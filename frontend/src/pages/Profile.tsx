import { Typography, Box, TextField, Button, Avatar } from '@mui/material';

export default function Profile() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Профиль
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Avatar sx={{ width: 80, height: 80, mr: 2 }}>И</Avatar>
        <Box>
          <Typography variant="h5">Алексеева Татьяна</Typography>
          <Typography color="text.secondary">ta.alekseeva05@gmail.com</Typography>
        </Box>
      </Box>
      <Box component="form" sx={{ maxWidth: 600 }}>
        <TextField fullWidth label="Имя" defaultValue="Татьяна" margin="normal" />
        <TextField fullWidth label="Email" defaultValue="ta.alekseeva05@gmail.com" margin="normal" />
        <TextField fullWidth label="Телефон" margin="normal" />
        <Button variant="contained" sx={{ mt: 3 }} size="large">
          Сохранить
        </Button>
      </Box>
    </Box>
  );
}