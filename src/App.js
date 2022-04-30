import './App.css';
import Header from './Header';
import Nav from './Nav';
import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Nav/>
            </div>
        );
    }
}

export default App;