import React,{Fragment} from 'react';
import {Router,Route,Switch ,Link} from 'react-router-dom';
import {createHashHistory} from 'history'
const App = () => <div>Talha <Link to="/profile" type="hash">Profile</Link></div>
const Profile = () => <div>Profile</div>
const History = createHashHistory()
export default  () =>(
    <Router history={History}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </Router>
)
