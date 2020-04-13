import React from 'react';
import Routes from "../../routes/Routes";
import {BrowserRouter as Router} from "react-router-dom";
import Header from "../Header";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <section>
                    <Router>
                        <Routes/>
                    </Router>
                </section>
            </main>
        </>
    );
};

export default App;
