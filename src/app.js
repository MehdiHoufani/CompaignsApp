import React, { Component } from 'react';
import injectAct from './actions/index';
import * as _ from 'lodash';
import { Grid, Row, Col, Label } from 'react-bootstrap'
require( './styles/bootstrap/css/bootstrap.css');
import { API_ADYOULIKE } from "./common/constantes/const_app_config";
import Brand from './pages/Campaigns/components/brand';


class App extends Component{
     componentDidMount(){
         this.props.fetchData(API_ADYOULIKE)
     }
    render(){

            const loading = this.props.isLoading;
            const error = this.props.hasErrored;

            const brands = _.get(this.props.brands, 'brands', []);
            return (
                <div>
                    <Grid>
                        <Row className="showgrid">
                            <nav className="navbar navbar-light bg-faded">
                                <h2 className="text-muted pull-left">Test AdYouLike
                                {
                                    loading && <Label bsStyle="success">Loading...</Label>
                                }
                                {
                                    error &&
                                    <h4 className="text-danger">Sorry! There was an error loading the compaigns</h4>
                                }
                                </h2>
                                <h2 className="text-muted pull-right">Campaigns</h2>
                            </nav>
                        </Row>
                        <Row className="showgrid">
                            <Col md={2}>
                            </Col>
                            <Col md={8}>
                                <ul>
                                    {
                                        brands.map((brand) => {
                                            return <Brand brand={brand} key={brand.id}/>
                                        })
                                    }
                                </ul>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            )

    }
}

export default injectAct(App);
