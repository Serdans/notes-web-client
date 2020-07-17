import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from "./components/layout/Layout";
import NoteIndex from "./pages/notes";
import {Provider} from "react-redux";
import store from "./redux/store";
import TodoIndex from "./pages/todos";


function App() {
  return (
      <Provider store={store}>
          <Router>
              <Layout>
                  <Switch>
                      <Route path="/notes" component={NoteIndex}/>
                      <Route path="/todos" component={TodoIndex}/>
                  </Switch>
              </Layout>
          </Router>
      </Provider>
  );
}

export default App;
