import { ACTION_TYPE} from "../common/constantes/const_act";
import { _ } from 'lodash';
import { getCampaignsBrands, addCompaign } from "../common/utils";

export function itemsHasErrored(state = false, action) {
    switch (action.type){
        case ACTION_TYPE.ITEMS_HAS_ERROR:
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action){
    switch (action.type){
        case ACTION_TYPE.ITEMS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action ){
    switch (action.type){
        case ACTION_TYPE.ITEMS_FETCH_DATA_SUCCESS:
            return Object.assign({}, state, {
                brands : getCampaignsBrands(action.brands)
            });
        case ACTION_TYPE.ADD_CAMPAIGN:
            return Object.assign({}, state, {
                brands : addCompaign(action.brands, action.campaign)
            });

        default:
            return state;
    }
}




