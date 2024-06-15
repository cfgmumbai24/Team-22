// DashboardCards.js
import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import BarChart from './BarChartAdmin';
import PolarAreaChartAdmin from './PolarAreaChart';
import VerticalBarChart from './BarChart'
import DistrictCounts from './DistrictCounts';
import { useState } from 'react';
export default function DashboardCards() {
  const [district, setDistrict] = useState('')

  function functionmap(district){
    setDistrict(district)
  }
  return (
    <Grid container spacing={2} sx={{ p: 2,justifyContent: 'center' }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Card sx={{ height: '350px', width: '600px', p:2, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Students by District
              </Typography>
              <BarChart />
            </CardContent>
          </Card>
          <Card sx={{ height: '350px', width: '400px', p:0, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            {/* <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Mentors by District
              </Typography> */}
            <CardContent sx={{ p: 0 ,display: 'flex', justifyContent: 'center', marginLeft: 4}}>
              <PolarAreaChartAdmin />
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Card sx={{ height: '350px', width: '600px', p:2, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Mentors by District
              </Typography>
              <BarChart />
            </CardContent>
          </Card>
          <Card sx={{ height: '350px', width: '400px', p:0, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            {/* <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Mentors by District
              </Typography> */}
            <CardContent sx={{ p: 0 ,display: 'flex', justifyContent: 'center', marginLeft: 4}}>
              <PolarAreaChartAdmin />
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Card sx={{ height: '350px', width: '600px', p:2, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Students by Field
              </Typography>
              <VerticalBarChart />
            </CardContent>
          </Card>
          <Card sx={{ height: '350px', width: '600px', p:2, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Mentors by Field
              </Typography>
              <VerticalBarChart />
            </CardContent>
          </Card>
        </Box>
      </Grid>
      <div style = {{alignItems: 'center',justifyContent: 'center', margin: 20}}>
      <Typography variant="h5" component="div" sx={{ mb: 0, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center'  }}>
          Deep Dive
      </Typography>
      </div>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Card sx={{ height: '450px', width: '600px', p:2, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Students by District
              </Typography>
              {/* <BarChart /> */}
              <DistrictCounts functionmap = {functionmap}/>
            </CardContent>
          </Card>
          <Card sx={{ height: '350px', width: '400px', p:0, backgroundColor: '#FEFAF6',border: '1px solid #ccc', marginTop: 5}}>
            {/* <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Mentors by District
              </Typography> */}
            <CardContent sx={{ p: 0 ,display: 'flex', justifyContent: 'center', marginLeft: 4}}>
              <PolarAreaChartAdmin />
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}






