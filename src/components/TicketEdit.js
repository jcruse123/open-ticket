import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TicketEdit extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeRequestor = this.onChangeRequestor.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.onChangeDue = this.onChangeDue.bind(this);

    this.state = {
      id: '',
      author: '',
      requestor: '',
      desc: '',
      due: ''
    }
  }

  componentDidMount() {
    axios.get('http://open-ticket.herokuapp.com/tickets/' + this.props.match.params.id)
    // axios({
    //   method: "get",
    //   baseUrl: ("http://localhost:3001"),
    //   url:"/tickets/" + this.props.match.params.id
    // })
    .then(response => {
      this.setState({
        id: response.data._id,
        author: response.data.author.username,
        requestor: response.data.requestor,
        desc: response.data.desc,
        due: new Date(response.data.due)
      })
    })
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

    const editedTicket = {
      desc: this.state.desc,
      requestor: this.state.requestor,
      author: {
        username: this.state.author
      },
      due: this.state.due
    }

    axios.put('http://open-ticket.herokuapp.com/tickets/' + this.state.id, editedTicket)
    .then(res => {
      console.log(res.data)
      window.location = '/';
    });

  }

  onDeleteClick = e => {
    e.preventDefault()

    axios.delete('http://open-ticket.herokuapp.com/tickets/' + this.state.id)
    .then(res => {
      console.log(res.data)
      window.location = '/';
    });
  }

  render() {
    return(
      <div className="container">
        <h2>Ticket ID: {this.state.id.substring(this.state.id.length - 6, this.state.id.length).toUpperCase()}</h2>

        <Form>
          <Form.Group controlId="formAuthorText">
            <Form.Label>Author</Form.Label>
            <Form.Control readOnly value={this.state.author} />
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
            <Button onClick={this.onSaveClick} variant="primary" type="submit">
              Save Changes
            </Button>
          </Form.Group>
          <Form.Group>
            <Button onClick={this.onDeleteClick} variant="danger" type="submit">
              Delete Ticket
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default TicketEdit;
