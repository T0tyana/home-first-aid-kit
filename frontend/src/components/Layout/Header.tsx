import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1201,
        width: 'calc(100% - 240px)',
        ml: '240px',
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
          Ваша домашняя онлайн аптечка
        </Typography>
      </Toolbar>
    </AppBar>
  );
}