import './App.css';
import './utils.css';
import pic from'./topimg.png';
function App() {
  return (
    <div className="App">
     
      <header className="container header">
        <nav className="flex">
         
          <div className="left flex items-center">
           <img src="https://images.indianexpress.com/2021/01/myntra.png"/>
           <ul className="flex items-center justify-center uppercase semibold">
             <li>Men</li>
             <li>Women</li>
             <li>Kids</li>
             
             <li>Beauty</li>
             <li>Studio</li>
           </ul>
          </div>
           <div className="right flex items-center">
            <input className="input" type="text" placeholder="search product"/> 
            <div className="profile mx-2">Profile</div>
            <div className="wishlist mx-2">WishList</div>
            <div className="bag mx-2">Bag</div>
           </div>
          
        </nav>
      </header>
      <section className="container section1">
      <img className="imgpic" src={pic}/>
      </section>
    </div>
  );
}

export default App;
