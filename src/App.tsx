import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Layout from "./components/layout/Layout";
import NoteIndex from "./pages/notes";
import {Provider} from "react-redux";
import store from "./redux/store";
import TodoIndex from "./pages/todos";
import SeriesIndex from "./pages/series";


function App() {


    useEffect(() => {

    });

    return (
        <Provider store={store}>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/notes" component={NoteIndex}/>
                        <Route path="/todos" component={TodoIndex}/>
                        <Route path="/series" component={SeriesIndex}/>
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}

export default App;
