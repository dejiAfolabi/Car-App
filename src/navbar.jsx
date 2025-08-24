import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import GarageIcon from '@mui/icons-material/Garage';
import Button from '@mui/material/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function NavBar() {
  return (
    <AppBar position="static" sx={{ color: 'black', backgroundColor: '#fff', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left-aligned logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <GarageIcon />
          <Typography sx={{ ml: 1, fontWeight: 'bold' }}>CarHut</Typography>
        </Box>

        {/* Right-aligned nav items */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            <Typography sx={{ ml: 1, fontWeight: 'bold' }}>Page</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            <Typography sx={{ ml: 1, fontWeight: 'bold' }}>About</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
            <Typography sx={{ ml: 1, fontWeight: 'bold' }}>Contact</Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <PersonOutlineIcon sx={{
              display: 'flex',
              alignItems: 'center'
            }} />
            <Button color="inherit" sx={{ display: 'flex', textTransform: 'none', fontWeight: 'bold', mr: 2, alignItems: 'center' }}>
              Sign in
            </Button>
          </Box>
          <Button
            sx={{
              color: '#000',
              backgroundColor: '#fff',
              border: '1px solid #000',
              borderRadius: '50px',
              padding: '5px 15px',
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Submit Listing
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
