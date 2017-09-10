import React, {Component} from 'react';
import * as _ from 'lodash';
import { Panel, Table , Badge} from 'react-bootstrap';

import Campaign from './campaign';

class Brand extends Component{
    render(){
        const brandName = _.get(this.props.brand, 'name');
        const campaigns = _.get(this.props.brand, 'campaigns');
        const badgeInstance = (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-muted">{brandName}</div>
                        <div className="col-md-6">
                            <span className="text-right">
                                <Badge>{campaigns.length}</Badge>
                            </span>
                        </div>
                </div>
            </div>
        );

        return (
            <div className="z-depth-5">
            <Panel header={badgeInstance}>
                <Table hover>
                    <thead>
                        {
                            campaigns.length !== 0
                                ?   <tr>
                                     <th className="col-md-2 text-muted text-center">Campaigns</th>
                                     <th className="col-md-5 text-muted">Start Date</th>
                                     <th className="col-md-5 text-muted">End Date</th>
                                    </tr>
                                : <tr></tr>
                        }
                    </thead>
                    <tbody>
                        {
                            campaigns.length === 0
                                ? <tr key={null}>
                                    <td className="text-center">no campaigns</td>
                                  </tr>
                                : campaigns.map((campaign)=>{
                                   return <Campaign campaign={campaign} key={campaign.id}/>})
                        }
                    </tbody>
                </Table>
            </Panel>
            </div>
        );
    }



}

export default Brand;