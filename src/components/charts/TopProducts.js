import React from 'react';
import { Card, CardContent, CardHeader, Box, Typography, LinearProgress } from '@mui/material';

const products = [
  { name: 'Premium Wireless Headphones', progress: 85, value: '$8.5k', tag: 'Electronics' },
  { name: 'Smart Fitness Tracker', progress: 75, value: '$7.2k', tag: 'Wearables' },
  { name: 'Ultra HD Monitor', progress: 65, value: '$6.8k', tag: 'Electronics' },
  { name: 'Ergonomic Keyboard', progress: 55, value: '$5.5k', tag: 'Accessories' },
];

export default function TopProducts() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader 
        title="Top Products" 
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {products.map((product, index) => (
            <Box key={index}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {product.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {product.tag}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {product.value}
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={product.progress} 
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: 'rgba(110, 98, 229, 0.1)',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#6E62E5',
                    borderRadius: 3,
                  }
                }}
              />
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

