import React from 'react';
import axios from 'axios';
import TicketTable from './TicketTable';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron'

class TicketDashboard extends React.Component {
  state = {
    tickets: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tickets/')
    .then(response => {
      console.log(response.data);
      this.setState({tickets: response.data})

    })
    .catch(error => {
      console.log(error);
    })
  }

  onNewClick = e => {
    window.location = '/new';
  }

  render() {
    return(
      <div className="">
        <Jumbotron>
          <h1>Open Ticket</h1>
          <hr />
          <p>
            Open Ticket is an easy to use issue tracker powered by React.
          </p>
          <p>
            <Button onClick={this.onNewClick}>New Ticket</Button>
          </p>
        </Jumbotron>
        <TicketTable tickets={this.state.tickets} />
      </div>
    )
  }
}

export default TicketDashboard;
