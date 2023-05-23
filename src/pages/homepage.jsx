import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

function Homepage() {
  const [output, setOutput] = useState([]);
    useEffect(() => {
      axios.get('https://api.publicapis.org/entries')
        .then(response => {
          console.log(response.data.entries);
          setOutput(response.data.entries);
          setOutput('UWU')
        }
      );
    },

    []);

}

 export default class homepage extends Component {
  render() {
    return (
      <div>
      <h2 align="center"> WELCOME! </h2>
      <img src="./wasted_junjun.png" className="wasted" alt="waste junjun"/>
      </div>
    )
  }
}
