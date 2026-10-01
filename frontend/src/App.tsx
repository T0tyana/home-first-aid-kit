import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import MedicineList from './pages/MedicineList';
import AddMedicine from './pages/AddMedicine';
import DonateList from './pages/DonateList';
import Profile from './pages/Profile';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6e1292',
    },
    secondary: {
      main: '#003bdc',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/medicines" element={<MedicineList />} />
            <Route path="/add" element={<AddMedicine />} />
            <Route path="/donate" element={<DonateList />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
