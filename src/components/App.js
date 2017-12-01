import React, { Component } from 'react';
import '../styles/App.css';
// import './Register.css';
import {Header} from './Header';
import {Main} from './Main';
import { TOKEN_KEY} from "../constants";

class App extends Component {
    state = {
        isLoggedIn: false,
    }

    handleLogin = (token) => {

        localStorage.setItem(TOKEN_KEY, token); // 'TOKEN_KEY' is a string, assign token to 'TOKEN_KEY'
        this.setState({isLoggedIn: true});
    }

    render() {
        return (
            <div className="App">
                <Header isLoggedIn={this.state.isLoggedIn}/>
                <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
            </div>
        );
    }
}

export default App;
