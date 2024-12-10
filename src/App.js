import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Aboutus from './Components/Aboutus';
import Callus from './Components/Callus';
import List from './Components/List';
import Details from './Components/Details';


import { Provider } from 'react-redux';
import store from './store';
import Checkout from './Components/Checkout'
import Invoice from './Components/Invoice';
function App() {
  return (
    <Provider store={store}>
          <div className="App">
          <BrowserRouter> 
            <Routes>
              <Route   path='/' element={<Landing/>}/>
                <Route path='/aboutus' element={<Aboutus/>}/>
                <Route path='/callus' element={<Callus/>}/>
                <Route path='/list' element={<List/>}/>
                <Route path='/details' element={<Details/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/invoice' element={<Invoice/>}/>
            </Routes>
          </BrowserRouter>
    </div>  
    </Provider>
  
  );
}

export default App;
