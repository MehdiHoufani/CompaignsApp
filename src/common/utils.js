import * as _ from 'lodash';

import Brand from './entity/Brand';
import Campaign from './entity/Campaign';

export function getCampaignsBrands(items) {

    var brands = _.get(items, 'brands', []);
    var campaigns = _.get(items, 'campaigns', []);
    var campaignsByBrands = [];

    _.forEach(brands, item => {
        var brand = new Brand(item.id, item.name, []);
        _.forEach(campaigns, itemCampaign => {
            if(brand.getId() === itemCampaign.brand_id){
                var campaign = new Campaign(itemCampaign.id,
                                            itemCampaign.start_date,
                                            itemCampaign.end_date,
                                            itemCampaign.brand_id);
                brand.getCampaigns().push(campaign);
            }
        });

    campaignsByBrands.push(brand);
    });

    return campaignsByBrands;
}

export function addCompaign(brands, campaign){

 _.forEach(brands, brand => {
     if(brand.id === campaign.brandId){
         brand.campaigns.push(campaign)
     }
 })
return brands;
}