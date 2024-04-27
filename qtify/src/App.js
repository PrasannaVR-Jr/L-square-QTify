import './App.css';
import NavBar from './Components/NavBar'
import correcthero from './assets/heroimagecorrect.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <NavBar message={"test"}/>
      
      </header>
      <body>
      <div className='heroimage'><img  src={correcthero} alt='heroimagealt'/></div>

    </body>
    </div>
    
    
    
  );
}

export default App;
