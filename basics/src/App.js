import logo from './logo.svg';
import {Routes, Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import FormPractice from './FormPractice';
import HomePage from './HomePage';
import './App.css';
import { useState } from 'react';

function App() {
    const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=Y4WFU9BGMCI3M5LA';

    const [data, setData] = useState([])

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      }
    }).then(r => r.json()).then(data => console.log(data))

    // request.get({
    //     url: url,
    //     json: true,
    //     headers: {'User-Agent': 'request'}
    //   }, (err, res, data) => {
    //     if (err) {
    //       console.log('Error:', err);
    //     } else if (res.statusCode !== 200) {
    //       console.log('Status:', res.statusCode);
    //     } else {
    //       // data is successfully parsed as a JSON object:
    //       setData(data)
    //     }
    // });
  return (
    <div className="App">
      <Header />
      <NavBar />
      
      <Routes>
        <Route path='/' element={<HomePage stockData={data} />} />
        <Route path='/form' element={<FormPractice />} />
      </Routes>
      
    </div>
  );
}

export default App;
