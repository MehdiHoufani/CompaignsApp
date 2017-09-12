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
        console.log(event.target.value);
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
      let suggestions = []
       _.get(brands, 'brands', []).map( brand => {
        suggestions.push(brand.name)
      });
      this.setState({
        keywords : suggestions
      })
    }

    getSuggest(){
      const value = _.trim(this.state.brandValue);
      if(value.length < 1){
        return undefined
      }else {
        const words = this.state.keywords;
        let keyMatch = "";
        const find = words.map(word => {
          if (word.substring(0, value.length) === value) {
            return keyMatch.concat(word, " ")
          }
        })
        return find[0];
      }
    }

    addCampaign(){
        this.setState({
            isActive: !this.state.isActive
        })
    }

    getValidationState(){
        const length = this.state.brandValue;
        const startDate = this.state.startDate;
        const endDate = this.state.endDate;
        if(length > 10) return 'success';
        else if(length>5) return 'warning';
        else if(length === 0) return 'error';
    }

    handleSubmit(){
        const newCampaign = {
            id: this.createUniqueId(),
            startDate: this.state.startDate,
            endDate: this.state.endDate || null,
            brandId: this.getIdBrandSelected()
        }
        this.props.addCampaign(newCampaign);
    }

    getIdBrandSelected(brandValue){
      const brands = _.get(this.props.brands,'brands')
      const idBrand = brands.map( brand => {
          if(brand.name = brandValue){
            return brand.id
          }
      })
      return idBrand;
    }

    createUniqueId(){
      const brands = _.get(this.props.brands,'brands')
      console.log(brands);
      return 40
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