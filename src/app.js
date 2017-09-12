import React, { Component } from 'react';
import injectAct from './actions/index';
import { Grid, Row, Col, Navbar, Nav, NavItem} from 'react-bootstrap'
import { API_ADYOULIKE } from "./common/constantes/const_app_config";
import Campaigns from './pages/Campaigns/index';

require( './assets/bootstrap/css/bootstrap.css');



class App extends Component{
    constructor(props){
        super(props);
    }

     componentDidMount(){
         this.props.fetchData(API_ADYOULIKE)
     }

    render(){

            const loading = this.props.isLoading;
            const error = this.props.hasErrored;
            return (
                <div>
                    <Grid>
                        <Row>
                            <Navbar>
                                <Navbar.Header>
                                    <Navbar.Brand>
                                        <p>AdYouLike</p>
                                    </Navbar.Brand>
                                </Navbar.Header>
                                <Navbar.Collapse>
                                    <Nav>
                                        {
                                            loading &&
                                            <NavItem>Loading...</NavItem>
                                        }
                                        {
                                            error &&
                                            <NavItem>Sorry! There was an error loading the campaigns</NavItem>
                                        }
                                    </Nav>
                                    <Nav pullRight>
                                        <NavItem eventKey={3}>Campaigns</NavItem>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Row>
                        <Row className="showgrid">
                            <section className="col-md-8 col-md-offset-2">
                                <Campaigns/>
                            </section>
                        </Row>
                    </Grid>
                </div>
            )

    }
}

export default injectAct(App);
