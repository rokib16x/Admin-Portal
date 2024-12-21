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
  
  function createData(name, category, followers, status) {
    return { name, category, followers, status };
  }
  
  const rows = [
    createData('John Doe', 'Fashion', '100K', 'Approved'),
    createData('Jane Smith', 'Beauty', '50K', 'Pending'),
    createData('Mike Johnson', 'Technology', '75K', 'Approved'),
  ];
  
  export default function Influencers() {
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Influencers Management
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <TextField label="Search influencers" variant="outlined" />
          <Button variant="contained" color="primary">
            Add New Influencer
          </Button>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Followers</TableCell>
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
                  <TableCell>{row.followers}</TableCell>
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
  
  