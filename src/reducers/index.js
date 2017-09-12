import { combineReducers } from 'redux';
import {  items, itemsHasErrored, itemsIsLoading, addCampaign } from './reducer';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    addCampaign
})