import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Nav from './Nav';
import './App.css';
import {dogs} from './Routes';

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav names={dogs.map(d => d.name)}/>
      <Routes />
    </BrowserRouter>
    </div>
  );
}

// App.defaultProps = dogs
export default App;
