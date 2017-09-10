class Brand {
    constructor(id, name, campaigns){
        this.id = id;
        this.name = name;
        this.campaigns = campaigns;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getCampaigns(){
        return this.campaigns;
    }

    setId(id){
        this.id = id;
    }

    setName(name){
        this.name = name;
    }

    setCampaigns(campaigns){
        this.campaigns = campaigns;
    }


};

export default Brand;

