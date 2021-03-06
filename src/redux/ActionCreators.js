import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


//returns plain js object
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment

});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating, 
        author: author, 
        comment: comment
    }

    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => { //recseive response from server
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error;
            }
        },
        error => { //don't get any response from server
        var errmess = new Error(error.message);
        throw errmess;
        })
        .then(response => response.json()) //turns response to json
        .then(response => dispatch(postComment(response)))
        .catch(error => { console.log('Post Comments', error.message)
            alert('your comment could not be posted\nError: ' + error.message)});
}


export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(response => { //receive response from server
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error;
            }
        },
        error => { //don't get any response from server
           var errmess = new Error(error.message);
           throw errmess;
        })
        .then(response => response.json()) //turns response to json
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));

}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
    
        .then(response => { //receive response from server
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error;
            }
        },
        error => { //don't get any response from server
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) //turns response to json
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const addComments = (comments) => ({
    type: ActionTypes.Add_COMMENTS,
    payload: comments
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));
    
    return fetch(baseUrl + 'promotions')
        .then(response => { //receive response from server
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error;
            }
        },
        error => { //don't get any response from server
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) //turns response to json
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
})

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
})

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
})


export const fetchLeaders = () => (dispatch) => {

    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
        .then(response => { //receive response from server
            if (response.ok) {
                return response
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText)
                error.response = response
                throw error;
            }
        }, error => { //don't get any response from server
           var errmess = new Error(error.message);
           throw errmess;
        })
        .then(response => response.json()) //turns response to json
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => dispatch(leadersFailed(error.message)));

}

export const feedbackFailed = (errmess) => ({
    type: ActionTypes.FEEDBACK_FAILED,
    payload: errmess
})

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }

    newFeedback.date = new Date().toISOString();
    
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if(response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ': ' + response.statusText)
            error.response = response;
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => {
        dispatch(postFeedback(response))
        alert(JSON.stringify(response)) 
    })
    .catch(error => dispatch(feedbackFailed(error.message)));
}


