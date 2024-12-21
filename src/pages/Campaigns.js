import { 
    Typography, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Paper,
    Button,
    TextField,
    Box
  } from '@mui/material';
  
  function createData(name, brand, startDate, endDate, status) {
    return { name, brand, startDate, endDate, status };
  }
  
  const rows = [
    createData('Summer Collection', 'Fashion Brand X', '2023-06-01', '2023-08-31', 'Active'),
    createData('Tech Launch', 'Gadget Co', '2023-07-15', '2023-09-15', 'Pending'),
    createData('Holiday Special', 'Beauty Inc', '2023-11-01', '2023-12-31', 'Planned'),
  ];
  
  export default function Campaigns() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Campaigns Management
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField label="Search campaigns" variant="outlined" />
          <Button variant="contained" color="primary">
            Create New Campaign
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Campaign Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <Button variant="outlined" size="small" sx={{ mr: 1 }}>
                      View
                    </Button>
                    <Button variant="outlined" size="small">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  
  