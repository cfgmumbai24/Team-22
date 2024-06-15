import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HeaderAdmin from './HeaderAdmin';
import FooterAdmin from './FooterAdmin';
import DashboardCards from './DashboardCards';
import FeedbacksPage from './FeedbacksPage';
import './index.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard'); // Initial state for current page

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardCards />;
      case 'feedbacks':
        return <FeedbacksPage />;
      default:
        return <DashboardCards />; // Default to dashboard if current page is unknown
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }}>
      <HeaderAdmin setCurrentPage={setCurrentPage} />
      <div style={{ flex: '1 0 auto', padding: '20px' }}>
        {renderPage()}
      </div>
      <FooterAdmin />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

