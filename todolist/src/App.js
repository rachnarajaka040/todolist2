import './App.css';
import './utils.css';

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
            <input className=""/> 
            <div className="profile mx-2">Profile</div>
            <div className="wishlist mx-2">WishList</div>
            <div className="bag mx-2">Bag</div>
           </div>
          
        </nav>
      </header>
      <section className="container section1">
      Imagine you own a big e-commerce website that sells watches in bulk. Your company is called Batch Watch — it’s your baby. One of the biggest assets the company has is the data it collects on vendors, its products, and customers.

When you started the company, you didn’t have much cash to spend on an expensive database program, so you took the first inexpensive option that came your way. Unfortunately, this means your data is not well-modeled, and you’re not really sure how that initial data program’s technical skeleton is structured.

After years of growth, you’ve now got cash to invest and want to implement a high quality database management system. However, you want to ensure the transfer is smooth and requires minimal downtime. You hire an IT consultant to execute the transfer.

The IT consultant analyzes your data and its structure, and she decides on a new program that’s most efficient to store your data. The project outlines is as follows:
      </section>
    </div>
  );
}

export default App;
