import React, { Component } from 'react';
import './pet.css';
import HobbyList from './hobbylist.js'


class Pet extends Component {
      render() {
        const style = {fontSize: '1.5em'};
        return (<div className="card">
                  <h2 className="name">Moxie</h2>
                  <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png" alt="Moxie" />
                  <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies:</h5>
                  <HobbyList />
                </div>);
      }
    }
    
    export default Pet;
