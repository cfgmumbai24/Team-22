import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function FooterAdmin() {
  return (
    <Box sx={{ bgcolor: '#57321A', p: 2, mt: 'auto' }}>
      <Typography variant="body1" sx={{ color: '#E9C874', textAlign: 'center' }}>
      Copyright © 2024 Eklavya Grassroots And Education Development Foundation. All rights reserved.
      </Typography>
    </Box>
  );
}
