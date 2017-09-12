import React, { Component }from 'react';
import { Button, Panel, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import moment from 'moment';
import * as _ from 'lodash';
import injectAct from "../../../actions/index";
import 'react-datepicker/dist/react-datepicker.css';

class CampaignInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            brandValue: "",
            startDate: moment().format("YYYY-MM-DD"),
            endDate: "",
            suggest: "",
            keywords:[],
            isActive: false
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addCampaign = this.addCampaign.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps){
          this.getKeywords(nextProps.brands)
    }

    handleChange(event){
        this.setState({
          brandValue : event.target.value,
          suggest: this.getSuggest()
        });
    }

    handleChangeStart(event) {
        this.setState({
            startDate: event.target.value
        });
    }

    handleChangeEnd(event) {
        this.setState({
          endDate: event.target.value
        });
    }

    getKeywords(brands){
      let suggestions = [];
       _.get(brands, 'brands', []).map( brand => {
        suggestions.push(brand.name)
      });
      this.setState({
        keywords : suggestions
      })
    }

    getSuggest(){
      const value = _.trim(this.state.brandValue);
      if(value.length <= 1){
        return ""
      }else {
        const words = this.state.keywords;
        const find = words.map(word => {
          if (word.substring(0, value.length) === value) {
            return word
          }
        });
        return find.join("");
      }
    }

    addCampaign(){
        this.setState({
            isActive: !this.state.isActive
        })
    }

    getValidationState(){
        // for the future
    }

    handleSubmit(){
        const newCampaign = {
            id: this.generateId(),
            startDate: moment(this.state.startDate,"YYYY-MM-DD").format('X'),
            endDate: this.state.endDate? moment(this.state.endDate,"YYYY-MM-DD").format('X') : null,
            brandId: this.getIdBrandSelected(this.state.brandValue)
        };
        const brands = _.get(this.props.brands,'brands');
        this.props.addCampaign(brands, newCampaign);
    }

    getIdBrandSelected(brandValue){
        return _.find(_.get(this.props.brands,'brands'),
                    brand => {
                        return brand.name === brandValue
                }).id;

    }

    generateId(){
      const brands =_.get(this.props.brands,'brands');
      const keys = [];
      brands.map( brand => {
         _.forEach(brand.campaigns, campaign => {
            keys.push(campaign.id);
         })
      });

      return _.max(keys)+1
    }

    render(){
        const isActive = !this.props.isLoading;
        const suggest = this.state.suggest ;
        return(
                <div>
                    <Panel header="Add Campaign" collapsible expanded={isActive}>
                        <form>
                            <FormGroup controlId="formCampaign" validationState={this.getValidationState()}>
                                <div className="row col-md-10 col-md-offset-1">
                                    <ControlLabel>brand</ControlLabel>
                                    <FormControl
                                      type="text"
                                      value={this.state.brandValue}
                                      placeholder="Enter name brand"
                                      onChange={this.handleChange}/>
                                  {suggest && <HelpBlock>{suggest}</HelpBlock>}
                                </div>
                                <div className="row col-md-10 col-md-offset-1">
                                    <ControlLabel>Start Date</ControlLabel>
                                    <FormControl
                                      type="date"
                                      value={this.state.startDate}
                                      onChange={this.handleChangeStart}/>
                                </div>
                                <div className="row col-md-10 col-md-offset-1">
                                    <ControlLabel>End Date</ControlLabel>
                                    <FormControl
                                      type="date"
                                      value={this.state.endDate}
                                      onChange={this.handleChangeEnd}/>
                                </div>
                                <div className="row col-md-10 col-md-offset-1 buttonBlock">
                                    <Button bsStyle="primary" block onClick={this.handleSubmit}>validate</Button>
                                </div>
                            </FormGroup>
                        </form>
                    </Panel>
                </div>


        )
    }
}

export default injectAct(CampaignInput);