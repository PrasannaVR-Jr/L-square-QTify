import './App.css';
import NavBar from './Components/NavBar'
import Section from './Components/Section';
import correcthero from './assets/heroimagecorrect.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <NavBar message={"test"}/>
      
      </header>
      <body>
      <div className='heroimage'><img  src={correcthero} alt='heroimagealt' width='500px'/></div>
      <div>
        <Section sectionName='Top Albums' APIlink='https://qtify-backend-labs.crio.do/albums/top'/>
        <div className='Line'></div>
        <Section sectionName='New Albums' APIlink='https://qtify-backend-labs.crio.do/albums/new'/>
        <div className='Line'></div>
        <Section sectionName='Songs' APIlink='https://qtify-backend-labs.crio.do/songs'/>
        <div className='Line'></div>
      </div>
    </body>
    </div>
    
    
    
  );
}

export default App;
