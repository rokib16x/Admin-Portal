import React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', satisfaction: 85 },
  { name: 'Feb', satisfaction: 88 },
  { name: 'Mar', satisfaction: 87 },
  { name: 'Apr', satisfaction: 89 },
  { name: 'May', satisfaction: 91 },
  { name: 'Jun', satisfaction: 92 },
];

export default function CustomerSatisfaction() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader 
        title="Customer Satisfaction" 
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="satisfaction" 
              stroke="#6E62E5" 
              strokeWidth={2}
              dot={{ fill: '#6E62E5', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

