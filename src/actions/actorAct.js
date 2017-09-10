import { itemsIsLoading, itemsFetchDataSucess, itemsHasErrors } from './compaignsAct';
import fetch from 'isomorphic-fetch';

export function itemsFetchData(url){

    var header = new Headers({
        'Content-Type' : 'application/json',
        'Cache-control':'no-cache',
        'Pragma': 'no-cache'
    });

    var defaultOptions = {
        method:'GET',
        headers: header,
    };

    return dispatch => {

        dispatch(itemsIsLoading(true));

        fetch(url, defaultOptions)
            .then( response => {
                if (!response.ok) {

                }
                dispatch(itemsIsLoading(false));
                return response
            })
            .then( response => response.json())
            .then( items => {
                dispatch(itemsFetchDataSucess(items))
            })
            .catch((error) => (
                dispatch(itemsHasErrors(true),
                console.log(error)
                    )));
    }

}