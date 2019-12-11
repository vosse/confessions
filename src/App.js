import React, { Fragment, useEffect } from 'react';
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth'


// Importing components
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Posts from './components/posts/Posts'
import PrivateRoute from './components/routing/PrivateRoute'
import Post from './components/post/Post'


// Store stuff
import { Provider } from 'react-redux'
import store from './store'



if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={ store }>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={ Landing } />
          <Route exact path='/confessions/' component={ Landing } />
          <section className='container'>
            <Switch>
              <Route exact path='/login' component={ Login } />
              <Route exact path='/register' component={ Register } />
              <PrivateRoute exacth path='/posts' component={ Posts } />
              <PrivateRoute exacth path='/post/:id' component={ Post } />
            </Switch>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
