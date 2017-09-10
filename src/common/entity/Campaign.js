class Campaign{
    constructor(id, startDate, endDate, brand){
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.brand = brand;
    }

    getId(){
        return this.id;
    }

    getStartDate(){
        return this.startDate;
    }

    getEndDate(){
        return this.endDate;
    }

    getBrand(){
        return this.brand;
    }
};

export default Campaign;
