import React, { Component } from 'react'
import {handleInitialData} from '../actions/shared';
import { connect } from 'react-redux';
import Dashboard from '../pages/Dashboard';
import NewTweet from '../pages/NewTweet';
import LoadingBar from 'react-redux-loading';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <LoadingBar/>
        {
          this.props.loading===true
            ?<h1>Loading</h1>
            :<NewTweet/>
        }
        
      </div>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)