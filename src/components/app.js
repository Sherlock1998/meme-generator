import React, {Component} from 'react';
import {connect} from 'react-redux';
import MemeItem from './memeitem';

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
              <MemeItem key={index} meme={meme}/>
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
