import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TicketDashboard from './TicketDashboard';
import TicketEdit from './TicketEdit';
import TicketNew from './TicketNew';


const App = () => {
  return (
    <div className="">
      <Router>
        <Route path='/' exact component={TicketDashboard} />
        <Route path='/new' exact component={TicketNew} />
        <Route path='/tickets/:id' exact component={TicketEdit} />
      </Router>
    </div>
  );
};

export default App;
