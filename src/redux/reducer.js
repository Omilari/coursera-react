import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';


export const initialState = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
};


export const Reducer = (state = initialState /*setting the state to 'initialState' allows the Reducer to not be undefined initially  */, action) => {
   return state; 
} 