import { Typography, Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function AddMedicine() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Добавить лекарство
      </Typography>
      <Box component="form" sx={{ maxWidth: 600 }}>
        <TextField
          fullWidth
          label="Название"
          margin="normal"
          required
        />
        <FormControl fullWidth margin="normal" required>
          <InputLabel>Категория</InputLabel>
          <Select label="Категория">
            <MenuItem value="pain">Обезболивающее</MenuItem>
            <MenuItem value="anti">Противовоспалительное</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Количество (шт. таблеток)"
          type="number"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Срок годности"
          type="date"
          margin="normal"
          slotProps={{
            inputLabel: { shrink: true },
          }}
          required
        />
        <Button variant="contained" sx={{ mt: 3 }} size="large">
          Добавить
        </Button>
      </Box>
    </Box>
  );
}