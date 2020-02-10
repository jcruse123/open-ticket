import React from 'react';
import axios from 'axios';
import TicketTable from './TicketTable';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import TicketNavbar from './TicketNavbar';

class TicketDashboard extends React.Component {
  state = {
    tickets: [],
  }

  componentDidMount() {
    axios.get('https://open-ticket-backend.herokuapp.com/tickets/')
    .then(response => {
      console.log(response.data);
      this.setState({tickets: response.data})

    })
    .catch(error => {
      console.log(error);
    })
  }

  onNewClick = e => {
    this.props.history.push('/new')
  };

  render() {
    return(
      <div>
        <div>
          <TicketNavbar {...this.props} />
          <br />
        </div>
        <div className="container">
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
          <TicketTable {...this.props} tickets={this.state.tickets} />
        </div>
      </div>
    )
  }
}

export default TicketDashboard;
