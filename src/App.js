import './App.scss';
import Navigation from './components/layout/Navigation'
import Homepage from './components/homepage/Homepage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="container home-container">
          <Switch>
              <Route exact path='/'component={Homepage} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
