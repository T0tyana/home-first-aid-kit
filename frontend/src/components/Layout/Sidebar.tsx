import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import MedicationIcon from '@mui/icons-material/Medication';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { text: 'Главная', icon: <HomeIcon />, path: '/' },
    { text: 'Список лекарств', icon: <MedicationIcon />, path: '/medicines' },
    { text: 'Добавить', icon: <AddCircleIcon />, path: '/add' },
    { text: 'Отдать до срока', icon: <FavoriteIcon />, path: '/donate' },
    { text: 'Профиль', icon: <PersonIcon />, path: '/profile' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          top: '64px',
          height: 'calc(100% - 64px)',
        },
      }}
    >
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                selected={isActive}
                sx={{
                  backgroundColor: isActive ? 'action.selected' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'action.hover',
                  },
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
}