import { Typography, Box, List, ListItem, ListItemText, Chip, Button } from '@mui/material';

const donateItems = [
  { id: 1, name: 'Аспирин', expiry: '2026-10-20', quantity: 7 },
];

export default function DonateList() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Лекарства, которые скоро истекут и могут быть полезны приюту
      </Typography>
      <List>
        {donateItems.map((item) => (
          <ListItem
            key={item.id}
            sx={{ border: '1px solid #e0e0e0', borderRadius: 1, mb: 1 }}
          >
            <ListItemText
              primary={item.name}
              secondary={`Количество: ${item.quantity} шт. | Срок: ${item.expiry}`}
            />
            <Chip label="Можно отдать" color="success" size="small" />
            <Button variant="outlined" sx={{ ml: 2 }}>
              Передать
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}