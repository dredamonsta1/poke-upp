import logo from './logo.svg';
import PokeFetch from './components/PokeFetch'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>POKE UPP</h1>

      <PokeFetch/>
        <img src={logo} className="App-logo" alt="logo" />
        
        
      </header>
    </div>
  );
}

export default App;
