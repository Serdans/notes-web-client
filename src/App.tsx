import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Layout from "./components/layout/Layout";
import NoteIndex from "./pages/notes";
import {Provider} from "react-redux";
import store from "./redux/store";
import TodoIndex from "./pages/todos";
import SeriesIndex from "./pages/series";


function App() {

    const returnRedirect = () => {
        return <Redirect to={store.getState().uiState.pinnedHomeRoute} />
    };

    return (
        <Provider store={store}>
            <Router>
                { returnRedirect() }
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
