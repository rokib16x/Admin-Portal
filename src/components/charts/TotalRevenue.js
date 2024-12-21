import React from 'react';
import { Card, CardContent, CardHeader, Box, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, returns: 2400 },
  { name: 'Feb', sales: 3000, returns: 1398 },
  { name: 'Mar', sales: 2000, returns: 9800 },
  { name: 'Apr', sales: 2780, returns: 3908 },
  { name: 'May', sales: 1890, returns: 4800 },
  { name: 'Jun', sales: 2390, returns: 3800 },
];

export default function TotalRevenue() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader 
        title="Total Revenue" 
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="sales" fill="#6E62E5" radius={[4, 4, 0, 0]} />
            <Bar dataKey="returns" fill="#22B07D" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

