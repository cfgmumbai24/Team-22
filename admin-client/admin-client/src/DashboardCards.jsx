// DashboardCards.js
import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import BarChart from './BarChartAdmin';
import PolarAreaChartAdmin from './PolarAreaChart';
import VerticalBarChart from './BarChart'
import DistrictCounts from './DistrictCounts';
import { useState, useEffect } from 'react';

export default function DashboardCards() {
  
  const [district, setDistrict] = useState('')
  const [details,setDetails] = useState([])
  const [mentorsDetails, setMentorDetails] = useState([])
  const [fields,setFields] = useState([])
  const [fieldsMentor,setFieldsMentor] = useState([])
  console.log('hello')
  const dosomething = async()=>{
    const response1 = await fetch('http://127.0.0.1:3000/admin/home')
    console.log(response1)
    const res = await response1.json()
    console.log(res)
    setDetails(res.districts)
    setFields(res.fields)
    const response2 = await fetch('http://127.0.0.1:3000/admin/mentors/data')
    console.log(response2)
    const res2 = await response2.json()
    console.log(res2)
    setMentorDetails(res2.districts)
    setFieldsMentor(res2.fields)
    console.log('fieldsmentor', res2.fields)
  }
  useEffect(() => {
    // Fetch details from /home endpoint
    dosomething()
    // Fetch mentor details from /mentors endpoint
    // const response2 = await fetch('/admin/mentors')
    //   .then(response => response.json())
    //   .then(data => setMentorDetails(data))
    //   .catch(error => console.error('Error fetching mentor details:', error));
  }, []);
  function functionmap(district){
    setDistrict(district)
  }
  function getCountDistrict(){
    let neededArr = details;
    console.log(neededArr)
    let ans = neededArr.map((entry)=>entry.count) 
    console.log(ans)
    return ans
  }
  function getLabelDistrict(){
    let neededArr = details;
    let ans = neededArr.map((entry)=>entry._id) 
    console.log(ans)
    return ans
    //return neededArr.map((entry)=>entry._id) 
  }
  function getCountField(){
    let neededArr = fields;
    let ans = neededArr.map((entry)=>entry.count) 
    console.log(ans)
    return ans
  }
  function getLabelFields(){
    let neededArr = fields;
    let ans = neededArr.map((entry)=>entry._id) 
    console.log(ans)
    return ans
    //return neededArr.map((entry)=>entry._id) 
  }
  function getCountFieldMentor(){
    let neededArr = fieldsMentor;
    let ans = neededArr.map((entry)=>entry.count) 
    console.log(ans)
    return ans
  }
  function getLabelFieldsMentor(){
    let neededArr = fieldsMentor;
    let ans = neededArr.map((entry)=>entry._id) 
    console.log(ans)
    return ans
    //return neededArr.map((entry)=>entry._id) 
  }
  function getCountDistrictMentor(){
    let neededArr = mentorsDetails;
    console.log(neededArr)
    let ans = neededArr.map((entry)=>entry.count) 
    console.log(ans)
    return ans
  }
  function getLabelDistrictMentor(){
    let neededArr = mentorsDetails;
    let ans = neededArr.map((entry)=>entry._id) 
    console.log(ans)
    return ans
    //return neededArr.map((entry)=>entry._id) 
  }
  console.log('Hey')
  return (
    <Grid container spacing={2} sx={{ p: 2,justifyContent: 'center' }}>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Card sx={{ height: '350px', width: '600px', p:2, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Students by District
              </Typography>
              <BarChart data2={getCountDistrict()} labels1 = {getLabelDistrict()}/>
            </CardContent>
          </Card>
          <Card sx={{ height: '350px', width: '400px', p:0, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            {/* <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Mentors by District
              </Typography> */}
            <CardContent sx={{ p: 0 ,display: 'flex', justifyContent: 'center', marginLeft: 4}}>
              <PolarAreaChartAdmin data2={getCountDistrict()} labels1 = {getLabelDistrict()}/>
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
              <BarChart data2={getCountDistrictMentor()} labels1 = {getLabelDistrictMentor()}/>
            </CardContent>
          </Card>
          <Card sx={{ height: '350px', width: '400px', p:0, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            {/* <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Mentors by District
              </Typography> */}
            <CardContent sx={{ p: 0 ,display: 'flex', justifyContent: 'center', marginLeft: 4}}>
              <PolarAreaChartAdmin data2={getCountDistrictMentor()} labels1 = {getLabelDistrictMentor()}/>
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
              <VerticalBarChart data2={getCountField()} labels1 = {getLabelFields()}/>
            </CardContent>
          </Card>
          <Card sx={{ height: '350px', width: '600px', p:2, backgroundColor: '#FEFAF6',border: '1px solid #ccc'}}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" component="div" sx={{ mb: 0, fontWeight: 'bold'  }}>
                Mentors by Field
              </Typography>
              <VerticalBarChart data2={getCountFieldMentor()} labels1 = {getLabelFieldsMentor()}/>
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
              <DistrictCounts data = {details} functionmap = {functionmap}/>
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






