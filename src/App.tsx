import React, { useEffect, useState } from 'react';
import './styles/main.css';
import Layout from './pages/Layout';
import {HashconnectAPIProvider} from "./lib/hashconnect";

function App() {


  return (
    <HashconnectAPIProvider debug network='mainnet'>
      <Layout />
    </HashconnectAPIProvider>
  );
}

export default App;