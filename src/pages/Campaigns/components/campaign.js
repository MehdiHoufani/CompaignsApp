import React, {Component} from 'react';
import * as _ from 'lodash';
import { Label } from 'react-bootstrap';
import moment from 'moment';

class Campaign extends Component{
    render(){
        const campaignId = _.get(this.props.campaign, 'id');
        const campaignStart = _.get(this.props.campaign, 'startDate');
        const campaignEnd = _.get(this.props.campaign, 'endDate');

        const dateStart = moment(campaignStart*1000).format('dddd, MMMM Do YYYY');
        const dateEnd = campaignEnd ? moment(campaignEnd*1000).format('dddd, MMMM Do YYYY'):'in Progress';

        return(
         <tr>
             <td className="text-center">{campaignId}</td>
             <td>{dateStart}</td>
             { dateEnd === 'in Progress'
                 ? <td>
                     <Label bsStyle="success">{dateEnd}</Label>
                 </td>
                 : <td>{dateEnd}</td>
             }

            </tr>
        )
    }
}

export default Campaign;