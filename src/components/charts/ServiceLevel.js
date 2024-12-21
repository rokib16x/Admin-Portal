import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Q1', volume: 800, service: 750 },
  { name: 'Q2', volume: 900, service: 800 },
  { name: 'Q3', volume: 850, service: 825 },
  { name: 'Q4', volume: 950, service: 875 },
];

export default function ServiceLevel() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader 
        title="Volume vs Service Level" 
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Bar dataKey="volume" fill="#6E62E5" radius={[4, 4, 0, 0]} />
            <Bar dataKey="service" fill="#22B07D" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

