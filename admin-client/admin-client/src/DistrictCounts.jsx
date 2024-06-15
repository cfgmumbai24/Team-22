import React from 'react';
import { Box, Typography } from '@mui/material';

// Sample data
const data = [
  { district: 'District A', count: 10 },
  { district: 'District B', count: 20 },
  { district: 'District C', count: 30 },
  { district: 'District D', count: 40 },
  { district: 'District E', count: 50 }
];

const DistrictCounts = ({mapfunction}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2, // space between each row
        p: 2, // padding
        border: '1px solid #ccc',
        borderRadius: '8px',
        width: '300px',
        margin: '0 auto',
        marginTop: 2
      }}
    >
      {data.map((entry, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '8px 16px',
            borderBottom: '1px solid #eee',
            '&:last-child': {
              borderBottom: 'none' // Remove border for the last item
            }
          }}
          onClick = {() => mapfunction(entry.district)}
        >
          <Typography variant="body1">{entry.district}</Typography>
          <Typography variant="body1">{entry.count}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default DistrictCounts;