import logo from './logo.svg';
import {Routes, Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import FormPractice from './FormPractice';
import HomePage from './HomePage';
import StockData from './StockData';
import './App.css';

function App() {
    

  return (
    <div className="App">
      <Header />
      <NavBar />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/form' element={<FormPractice />} />
        <Route path='/stockdata' element={<StockData />} />
      </Routes>
      
    </div>
  );
}

export default App;
