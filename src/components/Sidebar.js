import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  styled,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 280;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    boxShadow: '4px 0 20px rgba(0, 0, 0, 0.05)',
  },
}));

const Logo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  margin: theme.spacing(0.5, 2),
  borderRadius: '12px',
  backgroundColor: active ? theme.palette.primary.main : 'transparent',
  color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.main : theme.palette.action.hover,
  },
  '& .MuiListItemIcon-root': {
    color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: DashboardIcon, link: '/' },
  { text: 'Influencers', icon: PeopleIcon, link: '/influencers' },
  { text: 'Brands', icon: BusinessIcon, link: '/brands' },
  { text: 'Campaigns', icon: CampaignIcon, link: '/campaigns' },
  { text: 'Settings', icon: SettingsIcon, link: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <StyledDrawer variant="permanent">
      <Logo>
        <Box
          component="img"
          src="/placeholder.svg"
          alt="Logo"
          sx={{ width: 32, height: 32 }}
        />
        <Typography variant="h6" fontWeight="bold" color="primary">
          Dabeng
        </Typography>
      </Logo>
      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <StyledListItem
            button
            key={item.text}
            component={Link}
            to={item.link}
            active={location.pathname === item.link ? 1 : 0}
          >
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
}

