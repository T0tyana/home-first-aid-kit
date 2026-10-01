import { Card, CardContent, Typography, Box } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Dashboard() {
  const stats = [
    { title: 'Всего лекарств', value: 15, icon: <CheckCircleIcon />, color: '#1c4e28' },
    { title: 'Истекает срок', value: 3, icon: <WarningIcon />, color: '#ffd900' },
    { title: 'Для приюта', value: 5, icon: <FavoriteIcon />, color: '#ce1414' },
  ];

  return (
    <Box sx={{ textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
        Общее состояние аптечки
    </Typography>
    <Box
        sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        gap: 3,
        }}
    >
        {stats.map((stat) => (
        <Card key={stat.title}>
            <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {stat.icon}
                <Typography variant="h6" sx={{ ml: 1 }}>
                {stat.title}
                </Typography>
            </Box>
            <Typography variant="h3" sx={{ color: stat.color }}>
                {stat.value}
            </Typography>
            </CardContent>
        </Card>
        ))}
    </Box>
    </Box>
  );
}