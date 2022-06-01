import logo from './logo.svg';
import {Routes, Route, Link} from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import Form from './Form';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/form' element={<Form />} />
      </Routes>
      
    </div>
  );
}

export default App;
