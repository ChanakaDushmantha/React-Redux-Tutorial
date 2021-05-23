import {  BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';
import Cover from './components/Cover';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Cover/>
        <Cards/>
      </Router>
    </div>
  );
}

export default App;
