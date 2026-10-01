import { Card, CardContent, Typography, Chip, Box } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

interface Medicine {
  id: number;
  name: string;
  expiry: string;
  quantity: number;
  category: string;
}

interface MedicineCardProps {
  medicine: Medicine;
}

export default function MedicineCard({ medicine }: MedicineCardProps) {
  const expiryDate = new Date(medicine.expiry);
  const today = new Date();
  const threshold = new Date();
  threshold.setDate(today.getDate() + 30);

  const isExpiringSoon = expiryDate < threshold && expiryDate > today;
  const isExpired = expiryDate <= today;

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
          <Typography variant="h6">{medicine.name}</Typography>
          {(isExpiringSoon || isExpired) && <WarningIcon color="warning" />}
        </Box>
        <Typography color="textSecondary" gutterBottom>
          {medicine.category}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography>Количество: {medicine.quantity} шт.</Typography>
          <Chip
            label={`До: ${medicine.expiry}`}
            color={isExpired ? 'error' : isExpiringSoon ? 'warning' : 'default'}
            size="small"
          />
        </Box>
      </CardContent>
    </Card>
  );
}