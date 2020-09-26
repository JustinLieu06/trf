import React from 'react';
import './App.css';

import Layout from './components/Layout/Layout';
import Form from './containers/SurveyForm/SurveyForm';

function App() {
  return (
    <Layout>
      <Form />
    </Layout>
  );
}

export default App;
