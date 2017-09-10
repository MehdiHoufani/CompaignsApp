import React from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from "./actorAct";


export const mapStateToProps = (state) => {
    return {
        brands: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default function injectAct(component) {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}

