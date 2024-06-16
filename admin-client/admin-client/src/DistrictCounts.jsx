import React from 'react';
import { Box, Typography } from '@mui/material';



const DistrictCounts = ({mapfunction,data,label}) => {
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
          onClick = {() => mapfunction(entry._id)}
        >
          <Typography variant="body1">{entry._id}</Typography>
          <Typography variant="body1">{entry.count}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default DistrictCounts;