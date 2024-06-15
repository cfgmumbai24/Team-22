import React from 'react';
import Typography from '@mui/material/Typography';
import HorizontalCard from './HorizontalCard';

const feedbacks = [
  { title: 'John Morgan', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Ellie Anderson', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Nia Adebayo', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Rigo Louie', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Mia Williams', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const styles = {
  feedbacksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
    textAlign: 'center', // Center the text within the elements
    padding: '20px',
  },
  cardsRow: {
    display: 'flex',
    flexWrap: 'wrap', // Allow the cards to wrap to the next line if needed
    justifyContent: 'center', // Center the cards horizontally
    gap: '20px', // Add space between the cards
  },
};

const FeedbacksPage = () => {
  return (
    <div style={styles.feedbacksContainer}>
      <Typography variant="h4" sx={{ color: '#57321A', fontWeight: 'bold', margin: 4 }}>
        Recent Feedbacks from Mentors
      </Typography>
      <div style={styles.cardsRow}>
        {feedbacks.map((feedback, index) => (
          <HorizontalCard key={index} title={feedback.title} content={feedback.content} />
        ))}
      </div>
    </div>
  );
};

export default FeedbacksPage;
