// Actions just plain JavaScript objects
// They have always a property called 'type'

//But we cannot expect something to happen. ActionCreator returns these actions.

import {FEEDS_FETCH_FAILURE, FEEDS_FETCH_REQUEST, FEEDS_FETCH_SUCCESS} from "./actionTypes";

export const fetchFeedRequest = () => {
    const action = {
        type: FEEDS_FETCH_REQUEST,
        isFetching: true
    };
    console.log('Feeds are being fetched:', action);
    return action;
};

export const fetchFeedSuccess = (feeds) => {
    const action = {
        type: FEEDS_FETCH_SUCCESS,
        isFetching: false,
        feeds
    }
    console.log('Feeds are fetched:', action);
    return action;
};

export const fetchFeedFailure = (error) => {
    const action = {
        type: FEEDS_FETCH_FAILURE,
        isFetching: false,
        error,
    }
    console.log('Error occurred during fetching feeds:', action);
    return action;
};