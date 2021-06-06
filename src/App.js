import './App.scss';
import Navigation from './components/layout/Navigation'
import Homepage from './components/homepage/Homepage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProfileCard from '../src/components/shared/ProfileCard'
import SkillsCard from '../src/components/shared/SkillsCard'
import Education from './components/Education/Education';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="container home-container">
          <div className="main-page">
            <div className="profile-container">
                <ProfileCard />
                <SkillsCard />
            </div>
          <Switch>
              <Route exact path='/'component={Homepage} />
              <Route exact path='/portfolio' component={Homepage} />
              <Route exact path='/education' component={Education} />
          </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
