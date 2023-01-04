import './App.css';
import 'react-bootstrap'
import Header from './Sharedcomponents/Header';
import Home from './Pages/Home';
import Cats from './Sharedcomponents/Categories';

function App() {
  return (
    <div className="App">
      <Header/>
    
      <Home/>
      <Cats cateitem={"electronics"}/>
      <Cats cateitem={"men's clothing"}/>
      <Cats cateitem={"women's clothing"}/>
      <Cats cateitem={"jewelery"}/>
        
      
    </div>
  );
}

export default App;
