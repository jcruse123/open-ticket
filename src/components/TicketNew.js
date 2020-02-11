import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TicketNavbar from './TicketNavbar';

class TicketNew extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeRequestor = this.onChangeRequestor.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeDue = this.onChangeDue.bind(this);

    this.state = {
      author: '',
      requestor: '',
      desc: '',
      due: ''
    }
  }


  onChangeAuthor = e => {
    this.setState({
      author: e.target.value
    })
  }

  onChangeRequestor = e => {
    this.setState({
      requestor: e.target.value
    })
  }

  onChangeDesc = e => {
    this.setState({
      desc: e.target.value
    })
  }

  onChangeDue = e => {
    this.setState({
      due: e
    });
    console.log(this.state.due)
  };

  onSaveClick = e => {
    e.preventDefault()

    const newTicket = {
      desc: this.state.desc,
      requestor: this.state.requestor,
      author: {
        username: this.state.author
      },
      due: this.state.due
    }

    axios.post('https://open-ticket-backend.herokuapp.com/tickets/', newTicket)
    .then(res => {
      this.props.history.push('/');
    });

  }

  render() {
    return(
      <div>
        <div>
          <TicketNavbar {...this.props} />
          <br />
        </div>
        <Container>
          <Card>
            <Container className="bg-light">
              <br />
              <h2>Create New Ticket</h2>
              <hr />
              <Form>
                <Form.Group controlId="formAuthorText">
                  <Form.Label>Author</Form.Label>
                  <Form.Control onChangeAuthor={this.onChangeAuthor} value={this.state.author} />
                </Form.Group>
                <Form.Group controlId="formPlainText">
                  <Form.Label>Requestor</Form.Label>
                  <Form.Control type="text" onChange={this.onChangeRequestor} value={this.state.requestor} placeholder="Who is requesting this ticket?" />
                </Form.Group>
                <Form.Group controlId="formTextArea">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" onChange={this.onChangeDesc} value={this.state.desc} placeholder="Describe the issue." />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Due Date</Form.Label>
                  <br />
                  <DatePicker
                    onChange={this.onChangeDue}
                    selected={this.state.due}
                  />
                </Form.Group>
                <Form.Group>
                  <Button onClick={this.onSaveClick} variant="primary" size="sm" type="submit">
                    Save Ticket
                  </Button>
                </Form.Group>
              </Form>
            </Container>
          </Card>
        </Container>
      </div>
    )
  }
}

export default TicketNew;
