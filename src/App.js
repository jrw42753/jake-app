import './App.scss';
import Navigation from './components/layout/Navigation'
import Homepage from './components/homepage/Homepage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProfileCard from '../src/components/shared/ProfileCard'
import SkillsCard from '../src/components/shared/SkillsCard'
import Education from './components/Education/Education';
import Jobs from './components/Jobs/Jobs';
import Photobook from './components/Photobook/Photobook';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="container home-container">
          <Switch>
              <Route exact path='/'>
                <div className="main-page">
                  <div className="profile-container">
                      <ProfileCard />
                      <SkillsCard />
                  </div>
                  <Homepage />
                </div>
              </Route>
              <Route exact path='/portfolio'>
                <div className="main-page">
                  <div className="profile-container profile-edu-ex">
                      <ProfileCard />
                      <SkillsCard />
                  </div>
                  <Homepage />
                </div>
              </Route>
              <Route exact path='/education'>
                <div className="main-page">
                  <div className="profile-container profile-edu-ex">
                      <ProfileCard />
                      <SkillsCard />
                  </div>
                  <Education />
                </div>
              </Route>
              <Route exact path='/experience'>
                <div className="main-page">
                  <div className="profile-container profile-edu-ex">
                      <ProfileCard />
                      <SkillsCard />
                  </div>
                  <Jobs />
                </div>
              </Route>
              <Route exact path='/photobook' component={Photobook} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
