import { useState } from 'react';
import { 
  Typography, 
  TextField, 
  Button, 
  Grid,
  Paper,
  Tabs,
  Tab,
  Box
} from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Settings() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ width: '100%', typography: 'body1' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="General" />
          <Tab label="Security" />
          <Tab label="Notifications" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="site-name"
                label="Site Name"
                defaultValue="The Marvel - Be You"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="site-description"
                label="Site Description"
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="current-password"
                label="Current Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="new-password"
                label="New Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="confirm-password"
                label="Confirm New Password"
                type="password"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Update Password
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="email-notifications"
                label="Email Notifications"
                select
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                fullWidth
              >
                <option value="all">All</option>
                <option value="important">Important Only</option>
                <option value="none">None</option>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="push-notifications"
                label="Push Notifications"
                select
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
                fullWidth
              >
                <option value="all">All</option>
                <option value="important">Important Only</option>
                <option value="none">None</option>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Save Preferences
              </Button>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </div>
  );
}

