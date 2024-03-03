import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Listing from './components/Listing';
import Details from './components/Details';
import Login from './components/Login';
import LoggedInListing from '/components/LoggedInListing';
import AddListing from './components/AddListing';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Listing} />
          <Route path="/details/:id" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/add" component={AddListing} />
          <Route path="/logged-in-listing" component={LoggedInListing} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;