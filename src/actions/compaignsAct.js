import { ACTION_TYPE } from "../common/constantes/const_act";

export function itemsHasErrors(bool){
    return {
        type : ACTION_TYPE.ITEMS_HAS_ERROR,
        hasErrored : bool
    };
}

export function itemsIsLoading(bool){
    return {
        type : ACTION_TYPE.ITEMS_IS_LOADING,
        isLoading : bool
    };
}

export function itemsFetchDataSucess(items){
    return{
        type : ACTION_TYPE.ITEMS_FETCH_DATA_SUCCESS,
        brands : items,
    };
}

export function addCampaign(brands, campaign){
    return{
        type : ACTION_TYPE.ADD_CAMPAIGN,
        brands,
        campaign
    }
}