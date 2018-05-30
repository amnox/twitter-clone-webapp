import React, { Component } from 'react';
import TweetForm from '../components/TweetForm';

class NewTweet extends React.Component {
    render () {
        return (
            <div>
                <h3 className='center'>Type new Tweet</h3>
                <TweetForm />
            </div>
        )
    }
}

export default NewTweet;