import React from 'react';
import Table from 'react-bootstrap/Table';
import Ticket from './Ticket';

class TicketTable extends React.Component {
  render() {
    const tickets = this.props.tickets.map((ticket, i) => (
      <Ticket
        {...this.props}
        key = {i}
        id = {ticket._id}
        requestor = {ticket.requestor}
        desc = {ticket.desc}
        author = {ticket.author.username}
        created = {ticket.created}
        due = {ticket.due}
      />
    ));

    return(
      <div id='tickets'>
        <Table className="mb-0 table-responsive-md" hover>
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Requestor</th>
              <th>Description</th>
              <th>Author</th>
              <th>Created</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default TicketTable;
