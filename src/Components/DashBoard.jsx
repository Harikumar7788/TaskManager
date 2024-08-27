import React from 'react';
import { Container, Grid, TextField, IconButton, Select, MenuItem, InputLabel, FormControl, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DonePage from './Done';
import SideBar from './SideBar';
import TodoPage from './Todo';
import InProgress from './OnProgress';
export default function Dashboard() {
  return (
    <Box className="bg-container" sx={{ backgroundColor: '#2E2F2F', minHeight: '100vh', padding: 2 }}>
      <Container>
        <Grid 
          container 
          spacing={2} 
          className="main-container" 
          sx={{ 
            backgroundColor: '#3F4041', 
            padding: 2, 
            borderRadius: 2, 
            boxShadow: '2px 4px #1c1d1d', 
            alignItems: 'center',
            justifyContent: 'space-between' 
          }}
        >
          <Grid item xs={12} sm={5} md={5} className="search-container" sx={{ backgroundColor: '#525455', borderRadius: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="search" sx={{ color: '#ffffff', marginRight: 1 }}>
              <SearchIcon />
            </IconButton>
            
<TextField 
  label="Search" 
  variant="outlined" 
  fullWidth 
  InputLabelProps={{ style: { color: '#ffffff' } }} 
  sx={{ 
    '& .MuiInputBase-root': { color: '#ffffff' }, 
    '& fieldset': { borderWidth: '0px' } 
  }} 
/>
          </Grid>
          
          <Grid item xs={12} sm={5} md={5} className="search-container" sx={{ backgroundColor: '#525455', borderRadius: 1, display: 'flex', alignItems: 'center' }}>
            <IconButton aria-label="filter" sx={{ color: '#ffffff', marginRight: 1 }}>
              <FilterListIcon />
            </IconButton>
            <FormControl fullWidth variant="outlined">
  <InputLabel sx={{ color: '#ffffff' }}>Filter</InputLabel>
  <Select
    label="Filter"
    sx={{ 
      color: '#ffffff', 
      '& .MuiOutlinedInput-notchedOutline': { borderWidth: '0px' } 
    }}
    defaultValue="To Do"
  >
    <MenuItem value="To Do">To Do</MenuItem>
    <MenuItem value="In Progress">In Progress</MenuItem>
    <MenuItem value="Done">Done</MenuItem>
  </Select>
</FormControl>

          </Grid>
        </Grid>
      </Container>

      <Container className="taskcontainer" sx={{ display: 'flex', flexDirection: 'row', marginTop: 4 }}>
        <SideBar/>
      </Container>
    </Box>
  );
}
