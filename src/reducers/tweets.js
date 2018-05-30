import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from '../actions/tweets';

export default function tweets (state = {}, action){
    switch(action.type){
        case RECEIVE_TWEETS :
            console.log({
                ...state,
                ...action.tweets
            })
            return {
                ...state,
                ...action.tweets
            }
        case TOGGLE_TWEET :
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    likes: action.hasLiked === true
                        ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
                        : state[action.id].likes.concat([action.authedUser])
                }
            }
        case ADD_TWEET :
            const { tweet } = action
        default :
            return state
    }
}