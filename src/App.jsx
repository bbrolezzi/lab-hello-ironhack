import React, { Component } from 'react';
import logo from './components/ironhack-logo.svg';
import menu from './components/menu-top.svg';
import background from './components/react-logo.svg';
import declarative from './components/icon1.png';
import components from './components/icon2.png';
import singleWay from './components/icon3.png';
import jsx from './components/icon4.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <nav>
            <img src={logo} className='App-logo' alt='logo' />
            <img src={menu} className='App-menu' alt='menu' />
          </nav>
          <main>
            <p>
              <h1>
                <strong>
                  Say hello to <br /> ReactJS
                </strong>
              </h1>
            </p>
            <p>
              You will learn a Frontend <br />
              framework from scratch, to <br />
              become a Ninja Developer.
            </p>
            <div>
              <h3>Awsome!</h3>
            </div>
          </main>
        </header>
        <section>
          <div>
            <img
              src={declarative}
              className='App-declrative'
              alt='declarative'
            />
            <p>React make painless to create interactive UIs</p>
          </div>
          <div>
            <img src={components} className='App-components' alt='components' />
            <p>Build encapsulated components that manage their state</p>
          </div>
          <div>
            <img src={singleWay} className='App-singleWay' alt='single-way' />
            <p>A set of immutable values are passed to the component's</p>
          </div>
          <div>
            <img src={jsx} className='App-jsx' alt='jsx' />
            <p>Statically-typed designed to run on modern browsers</p>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
