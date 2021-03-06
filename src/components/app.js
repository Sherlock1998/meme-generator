import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';
import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MemeItem from './memeitem';
import MyMemes from './mymemes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    };
  }

  render() {
    return (
      <div>
        <h2>
          <u>Meme Generator</u>
        </h2>
        <MyMemes />
        <h4>Write some Text</h4>
        <Form inline className="form">
          <FormGroup>
            <ControlLabel>Top</ControlLabel>
            {'  '}
            <FormControl
              type="text"
              onChange={event => this.setState({ text0: event.target.value })}
            />
          </FormGroup>
          {'  '}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>
            {'  '}
            <FormControl
              type="text"
              onChange={event => this.setState({ text1: event.target.value })}
            />
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (
            <MemeItem
              key={index}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
            />
          );
        })}
        <button
          className="btn btn-primary button-load--meme"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load More
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
