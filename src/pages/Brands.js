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
  
  function createData(name, category, manager, status) {
    return { name, category, manager, status };
  }
  
  const rows = [
    createData('Acme Inc', 'Technology', 'John Smith', 'Active'),
    createData('Fashion Co', 'Fashion', 'Emma Brown', 'Active'),
    createData('Tech Innovators', 'Technology', 'Michael Johnson', 'Pending'),
  ];
  
  export default function Brands() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Brands Management
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField label="Search brands" variant="outlined" />
          <Button variant="contained" color="primary">
            Add New Brand
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Brand Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Manager</TableCell>
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
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.manager}</TableCell>
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
  
  