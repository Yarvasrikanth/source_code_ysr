import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

export const Addition = () => {
    const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [frontendResult, setFrontendResult] = useState('');
  const [backendResult, setBackendResult] = useState('');

  const calculateFrontend = () => {
    const result = parseFloat(num1) + parseFloat(num2);
    setFrontendResult(` ${result}`);
  };

  const calculateBackend = () => {
    axios.post('/api/addition', { num1: parseFloat(num1), num2: parseFloat(num2) })
      .then(response => {
        setBackendResult(` ${response.data}`);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container">
    
      <form>
        
        <div className="mb-3 col-xs-3">
          <label htmlFor="num1" className="form-label">Enter first number:</label>
          <input type="number" className="form-control col-xs-3" id="num1" value={num1} onChange={e => setNum1(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="num2" className="form-label">Enter second number:</label>
          <input type="number" className="form-control col-xs-3" id="num2" value={num2} onChange={e => setNum2(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary me-2" onClick={calculateFrontend}>Submit </button>
       
      </form>
      
      <h3 className="mt-4">Your Addition Result (Cilent_side) is :</h3>
      <div>{frontendResult}</div>

      <h3 className="mt-4">Your Addition Result (Server_side) is :</h3>
      <div>{backendResult}</div>
    </div>
  );

}