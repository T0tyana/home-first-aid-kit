import { Box, Container } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: 1, mt: '64px' }}>
        <Sidebar />
        <Container maxWidth={false} sx={{ mt: 4, mb: 4, flex: 1 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}