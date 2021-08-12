import {BrowserRouter, Switch, Route} from 'react-router-dom';

// component
import Header from './component/header/Header';
import Home from './component/home/Home';
import Cart from './component/cart/Cart';
import { TemplateProvider } from './templates/TemplateProvider';
import ContextProvider from './context/ContextProvider';
import DetailView from './component/product/DetailView';


function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>  
            <Route exact path="/cart" component={Cart}/>
            <Route exact path='/product/:id' component={DetailView}/>
          </Switch>
        </BrowserRouter>
      </ContextProvider>  
    </TemplateProvider>
  );
}

export default App;
