import Axios from 'axios';

import * as actionTypes from './../actionTypes';

export function setTitle(title) {
    return {
        type: actionTypes.SET_TITLE,
        title,
    };
}

export function setBody(body) {
    return {
        type: actionTypes.SET_BODY,
        body,
    };
}

export function addPost() {
    return (dispatch, getState) => {
        const title = getState().setTitle.title;
        const body = getState().setBody.body;
        const post = { title, body };

        const request = Axios.post('/todos', post);

        request.then(() => {
            dispatch({ type: actionTypes.ADD_POST, payload: post });
        }).catch((error) => {
            /*eslint-disable */
            console.log(error);
            /*eslint-enable */
        });
    };
}
