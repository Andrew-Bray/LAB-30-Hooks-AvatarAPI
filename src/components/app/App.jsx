import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ListPage from '../../containers/ListPage';
import DetailPage from '../../containers/DetailPage';
import Header from '../header/Header';

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ListPage} />
          <Route path="/character/:id" component={DetailPage} />
        </Switch>
        {/* <MySpecialFooter /> */}
      </Router>
    </>
  );}
