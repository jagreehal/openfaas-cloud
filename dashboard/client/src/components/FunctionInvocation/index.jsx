import React from 'react';
import ReactDOM from 'react-dom';

import {
  Badge,
  ListGroup,
  ListGroupItem,
  Nav,
  NavLink,
  Progress
} from 'reactstrap';

import './FunctionInvocation.css';

export class FunctionInvocation extends React.Component {
  state = { selected: '1hr' };

  render() {
    const options = Object.keys(this.props.data);
    const selectedData = [...this.props.data[this.state.selected]];
    const data = {
      datasets: [
        { backgroundColor: ['#28a745', '#dc3545'], data: selectedData }
      ],
      labels: ['success', 'error'],
      options: { labels: { display: false } }
    };

    const navLinks = options.map(option => {
      return (
        <NavLink
          key={option}
          href="#"
          active={option === this.state.selected}
          onClick={() => this.navLinkClickHandle(option)}
        >
          {option}
        </NavLink>
      );
    });

    const total = selectedData[0] + selectedData[1];
    const success = (selectedData[0] / total) * 100;
    const errors = (selectedData[1] / total) * 100;

    return (
      <div className="">
        <Nav className="d-flex justify-content-center">
          <span className="d-flex align-items-center mr-4 font-weight-bold">
            Period:
          </span>
          {navLinks}
        </Nav>
        <div>
          <Progress multi={true} className="mt-3 d-flex justify-content-center">
            <Progress bar={true} color="success" value={success} />
            <Progress bar={true} color="danger" value={errors} />
          </Progress>
          <span className="font-weight-bold">
            {selectedData[0] + selectedData[1]}
          </span>{' '}
          invocations
        </div>

        <ListGroup className="mt-4 m0 flex-row">
          <ListGroupItem className="d-flex flex-fill flex-column align-items-center p-1">
            <h5 className="m-0">
              <Badge color="success">{selectedData[0]}</Badge>
            </h5>
            <span>Success</span>
          </ListGroupItem>
          <ListGroupItem className="d-flex flex-fill flex-column align-items-center p-1">
            <h5 className="m-0">
              <Badge color="danger">{selectedData[1]}</Badge>
            </h5>
            <span>Error</span>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  }

  navLinkClickHandle = option => {
    this.setState({ selected: option });
  };
}
