import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = {
    persons: []
  }
  
  componentDidMount() {
    axios.get(`https://digimon-api.vercel.app/api/digimon`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul >
        <section class="leading-bigtext"> 
            <p class = "leading-bigtext">
                Digimon Wiki
            </p>
            <input id="digimon" type="text" placeholder="nome do digimon"/>

            <button onclick="">Buscar</button>
        </section>
         <section class="cards">
                {this.state.persons.map(person =>
                  <li>
                    Name: {person.name}<br/>
                    Level: {person.level}
                    <div><img src={person.img} /> </div> 
                  </li>)}
        </section>
      </ul>
    )
  }

}
export default App;
