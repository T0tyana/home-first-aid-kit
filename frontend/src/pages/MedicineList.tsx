import { useState } from 'react';
import { Typography, Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import MedicineCard from '../components/MedicineCard';

const demoMedicines = [
  { id: 1, name: 'Парацетамол', expiry: '2024-12-01', quantity: 3, category: 'Обезболивающее' },
  { id: 2, name: 'Ибупрофен', expiry: '2026-11-15', quantity: 5, category: 'Противовоспалительное' },
  { id: 3, name: 'Аспирин', expiry: '2026-10-20', quantity: 7, category: 'Обезболивающее' },
  { id: 4, name: 'Диклофенак', expiry: '2028-11-20', quantity: 8, category: 'Противовоспалительное' },
  { id: 5, name: 'Налгезин', expiry: '2028-06-12', quantity: 9, category: 'Противовоспалительное' },
  { id: 6, name: 'Темпалгин', expiry: '2029-01-24', quantity: 11, category: 'Обезболивающее' },
];

export default function MedicineList() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const filteredMedicines = demoMedicines.filter((med) => {
    const matchesCategory = category === 'all' || med.category === category;
    const matchesSearch = med.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Список лекарств
      </Typography>

      <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
        <TextField
          label="Поиск"
          variant="outlined"
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FormControl size="small" sx={{ minWidth: 200 }}>
          <InputLabel>Категория</InputLabel>
          <Select
            label="Категория"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="all">Все</MenuItem>
            <MenuItem value="Обезболивающее">Обезболивающее</MenuItem>
            <MenuItem value="Противовоспалительное">Противовоспалительное</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((med) => (
            <MedicineCard key={med.id} medicine={med} />
          ))
        ) : (
          <Typography color="textSecondary">Ничего не найдено</Typography>
        )}
      </Box>
    </Box>
  );
}