import './App.css';
import Navbar from './Navbar.js'
import Body from './Body.js'
import Contact from './Contact.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Body />
      <Contact />
    </div>
  );
}

export default App;
