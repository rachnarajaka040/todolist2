import './App.css';
import './utils.css';

function App() {
  return (
    <div className="App">
     
      <header className="container">
        <nav className="flex">
          <div className="left flex items-center">
           <img src="https://images.indianexpress.com/2021/01/myntra.png"/>
           <ul class="flex items-center justify-center uppercase semibold">
             <li>Men</li>
             <li>Women</li>
             <li>Kids</li>
             <li>Home and Living</li>
             <li>Beauty</li>
             <li>Studio</li>
           </ul>
          </div>
           <div className="right">

           </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
