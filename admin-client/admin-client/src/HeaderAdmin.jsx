import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function HeaderAdmin({ setCurrentPage }) {
  return (
    <AppBar position="static" sx={{ bgcolor: '#57321A', margin: 0 }}>
      <Toolbar sx={{ justifyContent: 'space-between', margin: 0 }}>
        <img
          src="https://eklavyaindia.org/wp-content/uploads/2024/03/LOGO.png"
          alt="Logo"
          style={{ height: '60px', width: '60px', width: 'auto' }} // Adjusted height
        />
        <Typography variant="h7" sx={{ color: '#E9C874' ,fontWeight: 'bold' }}>
            Welcome
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link
            href="#"
            onClick={() => setCurrentPage('dashboard')}
            underline="none"
            color="inherit"
            sx={{ cursor: 'pointer' }}
          >
            <Typography variant="h7" sx={{ color: '#FFEBB2' }}>
              Home
            </Typography>
          </Link>
          <Link
            href="#"
            onClick={() => setCurrentPage('feedbacks')}
            underline="none"
            color="inherit"
            sx={{ cursor: 'pointer' }}
          >
            <Typography variant="h7" sx={{ color: '#FFEBB2' }}>
              Feedbacks
            </Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}




