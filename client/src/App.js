import React, {Component} from 'react';
import './App.css';
import Postrenderer from './components/Postrenderer';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import LoginRenderer from './components/LoginRenderer';
import Chat from './components/Chat';

class App extends Component{
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render(){
      return (
        <div className="App">
          <Router>
            <Routes>
              <Route path='/login' element={<LoginRenderer />} />
              <Route path='/messenger' element={<Chat />} />
              <Route path='/' element={<Postrenderer />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </Router>
        </div>
      );
  }

}

export default App;