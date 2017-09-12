import React, { Component }from 'react';
import { Button, Panel} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import injectAct from "../../../actions/index";
import 'react-datepicker/dist/react-datepicker.css';

class CampaignInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: moment(),
            endDate: null,
            isActive: false
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.addCampaign = this.addCampaign.bind(this);
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }

    addCampaign(){
        this.setState({
            isActive: !this.state.isActive
        })
    }

    render(){

        const active = this.state.isActive;
        return(
                <div>
                    <Button onClick={this.addCampaign}>{active?'-':'+'}</Button>
                    <Panel collapsible expanded={this.state.isActive}>
                        <div className="col-md-offset-2">
                            <div className="row">
                                <div className="col-md-5">
                                    <label className="pull-left"> Start Date :</label>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChangeStart}
                                    />
                                </div>
                                <div className="col-md-5">
                                    <label className="pull-left"> Start Date :</label>
                                    <DatePicker
                                        selected={this.state.endDate}
                                        onChange={this.handleChangeEnd}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="button col-md-2">
                                        <Button bsStyle="primary" onClick={this.props.addCampaign}>Valider</Button>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </div>


        )
    }
}

export default injectAct(CampaignInput);