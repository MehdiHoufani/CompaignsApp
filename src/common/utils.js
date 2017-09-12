import * as _ from 'lodash';

import Brand from './entity/Brand';
import Campaign from './entity/Campaign';

export function getCampaignsBrands(items) {

    const brands = _.get(items, 'brands', []);
    const campaigns = _.get(items, 'campaigns', []);
    const campaignsByBrands = [];

    _.forEach(brands, item => {
        const brand = new Brand(item.id, item.name, []);
        _.forEach(campaigns, itemCampaign => {
            if(brand.getId() === itemCampaign.brand_id){
                const campaign = new Campaign(itemCampaign.id,
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

export function addCompaign(brands, campaign) {
    _.forEach(brands, brand => {
        if (brand.id === campaign.brandId) {
            brand.campaigns.push(campaign)
        }
    });
    return brands;
}