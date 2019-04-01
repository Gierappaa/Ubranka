import React from 'react';
import './App.scss';
import { Counter } from './../../components/Counter/Counter';
import { WelcomeSection } from './../../components/WelcomeSection/WelcomeSection';
import { CreateAccount } from './../../components/CreacteAccount/CreateAccount';
import { AboutUs } from './../../components/AboutUs/AboutUs';
import { Organizations } from './../../components/Organizations/Organizations';
import { ContactUs } from '../ContactUs/ContactUs';
import { scroller } from 'react-scroll';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from 'react-router-dom'


  const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100)
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }
  
  const Public = () => <h3>Public</h3>
  const Protected = () => <h3>Protected</h3>
  
  class Login extends React.Component {
    state = {
      redirectToReferrer: false
    }
    login = () => {
      fakeAuth.authenticate(() => {
        this.setState(() => ({
          redirectToReferrer: true
        }))
      })
    }
    render() {
      const { from } = this.props.location.state || { from: { pathname: '/' } }
      const { redirectToReferrer } = this.state
  
      if (redirectToReferrer === true) {
        return <Redirect to={from} />
      }
  
      return (
        <div>
          <p>You must log in to view the page</p>
          <button onClick={this.login}>Log in</button>
        </div>
      )
    }
  }
  
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )
  
  const AuthButton = withRouter(({ history }) => (
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome! <button onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  ))
  
  export default function AuthExample () {
    return (
      <Router>
        <div>
          <AuthButton/>
          <ul>
            <li><Link to="/public">Public Page</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
          </ul>
          <Route path="/public" component={Public}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path='/protected' component={Protected} />
        </div>
      </Router>
    )
  }

        
export class App extends React.Component {
    componentDidMount() {
        const pathName = this.props.location.pathname;
        const scrollElementId = pathName.replace('/', '');
        console.log(this.props.match);
        scroller.scrollTo(scrollElementId, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 50,
        });
    }



    render() {
        return (
            <div name="start">
                <WelcomeSection />
                <Counter />
                <CreateAccount />
                <AboutUs />
                <Organizations />
                <ContactUs />
            </div>
        );
    }
}

