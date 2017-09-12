import React, { Component } from 'react';
import * as _ from 'lodash';
import Brand from './components/brand';
import injectAct from "../../actions/index";


class Campaigns extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const brands = _.get(this.props.brands, 'brands');
        return(
            <ul>
                {
                    brands &&
                    brands.map((brand) => {
                        return <Brand brand={brand} key={brand.id}/>
                    })
                }
            </ul>
        )
    }


}

export default injectAct(Campaigns);