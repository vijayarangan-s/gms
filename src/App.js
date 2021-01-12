import logo from './logo.svg';
import './App.css';
import Master from './components/Master';
import Nav from './components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Reports from './components/Reports';
import Login from './components/Login';

function App() {
  const pathname = window.location.pathname;
  console.log({pathname})
  return (
    <div>
      {
        pathname !== "/" && <Master/>
      }
       {
        pathname === "/" && <Login/>
      }
      
    </div>
  );
}

export default App;
