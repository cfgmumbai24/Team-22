import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
const styles = {
    image: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 250,
        width: 300,
        marginLeft: 200,
        objectFit: 'contain',
     },
}
export default function FAQCard({mentor, student, feedback}) {
  
  return (
    <Card
      size="lg"
      variant="plain"
      orientation="horizontal"
      sx={{
        textAlign: 'center',
        maxWidth: '100%',
        width: 1000,
        height: 500,
        margin: 4,
        // to make the demo resizable
        resize: 'horizontal',
        overflow: 'auto',
      }}
    >
      <CardOverflow
        variant="solid"
        color="#57321A"
        sx={{
          flex: '0 0 200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          px: 'var(--Card-padding)',
          backgroundColor: '#57321A'
        }}
      >
        <Typography fontSize="xl4" fontWeight="xl" textColor="#FFFBEA">
          {student}
        </Typography>
        <Typography textColor="#FFFBEA">
          Mentor Name : {mentor}
        </Typography>
      </CardOverflow>
      <CardContent sx={{ gap: 1.5, minWidth: 150, maxHeight: 120 }}>
        <AspectRatio ratio="19/8" objectFit="contain" variant="plain">
          <div style = {styles.image}>
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/4658/4658943.png"
            // style={styles.image}
          />
          </div>
        </AspectRatio>
        <CardContent>
          <Typography level="title-lg">Brief</Typography>
          <Typography fontSize="sm" sx={{ mt: 0.5 }}>
          {feedback}

          </Typography>
        </CardContent>
        <Button
          variant="outlined"
          color="#FFFBEA"
          sx={{
            '--variant-borderWidth': '2px',
            borderRadius: 40,
            borderColor: '#FFEBB2',
            mx: 'auto',
          }}
        >
          See Details
        </Button>
      </CardContent>
    </Card>
  );
}

