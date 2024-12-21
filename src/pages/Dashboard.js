import React from 'react';
import { Grid, Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { TrendingUp, TrendingDown } from '@mui/icons-material';
import TotalRevenue from '../components/charts/TotalRevenue';
import CustomerSatisfaction from '../components/charts/CustomerSatisfaction';
import TopProducts from '../components/charts/TopProducts';
import ServiceLevel from '../components/charts/ServiceLevel';
import VisitorInsights from '../components/charts/VisitorInsights';
import WorldMap from '../components/charts/WorldMap';

const StatsCard = ({ title, value, trend, trendValue, color }) => (
  <Card sx={{ height: '100%', position: 'relative', overflow: 'visible' }}>
    <CardContent>
      <Box sx={{ 
        position: 'absolute', 
        top: -20, 
        left: 20, 
        width: 40, 
        height: 40, 
        borderRadius: '12px',
        backgroundColor: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
      }}>
        {trend === 'up' ? <TrendingUp /> : <TrendingDown />}
      </Box>
      <Box sx={{ pt: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ my: 1, color: 'text.primary' }}>
          {value}
        </Typography>
        <Typography 
          variant="body2" 
          color={trend === 'up' ? 'success.main' : 'error.main'}
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
        >
          {trend === 'up' ? '+' : '-'}{trendValue}
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">Today's Sales</Typography>
        <IconButton sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
          <Typography variant="body2" sx={{ px: 1 }}>Export</Typography>
        </IconButton>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Total Sales"
            value="$1k"
            trend="up"
            trendValue="8% from yesterday"
            color="#6E62E5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Visitors"
            value="300"
            trend="up"
            trendValue="5% from yesterday"
            color="#22B07D"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Total Orders"
            value="5"
            trend="up"
            trendValue="12% from yesterday"
            color="#FF8F6B"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard
            title="Total Customers"
            value="8"
            trend="up"
            trendValue="2% from yesterday"
            color="#6E62E5"
          />
        </Grid>

        <Grid item xs={12} md={8}>
          <TotalRevenue />
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomerSatisfaction />
        </Grid>

        <Grid item xs={12} md={4}>
          <TopProducts />
        </Grid>
        <Grid item xs={12} md={4}>
          <WorldMap />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceLevel />
        </Grid>

        <Grid item xs={12}>
          <VisitorInsights />
        </Grid>
      </Grid>
    </Box>
  );
}

