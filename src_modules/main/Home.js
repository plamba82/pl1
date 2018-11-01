import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack and better!</p>
      <p><Link to="/googleLogin">Navigate to Dynamic Page - really!</Link></p>
    </Layout>
  );
};

export default Home;