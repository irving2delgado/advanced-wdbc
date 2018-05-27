import React, { Component } from 'react';
import './pet.css';


class HobbyList extends Component{
    render(){
      const hobbies = ["sleeping", "eating", "cuddling"];
      const style = {fontSize: '1.5em'};
      return (
        <ul>
          {hobbies.map((h,i) => {
            return <li key={i} style={style}>{h}</li>
          })}
          </ul>
        );
      }
    };
    
export default HobbyList;