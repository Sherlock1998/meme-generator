import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor() {
    super()

    this.state ={
      memeLimit:10,
    }
  }
  render() {
    return (
      <div>
        <h2>Meme Generator</h2>
        {
          this.props.memes.slice(0, this.state.memeLimit).map((meme,index)=> {
            return (
              <h4 key={index}>
                {meme.name}
              </h4>
            )
          })
        }
        <button className="btn btn-primary button-load--meme" onClick={()=>{
          this.setState({memeLimit:this.state.memeLimit +10})
        }}>Load More</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps,null) (App);
