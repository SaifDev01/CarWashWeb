const { strictEqual } = require("assert");
const { stringify } = require("querystring");

class ApiFeatures {

    constructor(query , queryStr){
        this.query = query
        this.queryStr = queryStr

    }
    search(){
        const keyword  = this.queryStr.keyword ? {
             name: {
                $regex : this.queryStr.keyword,
                $options : "i"
             },
        } :{}

        // console.log(keyword);
        this.query = this.query.find({...keyword})
        return this; 
    }
    filter(){
        const queryCopy = {...this.queryStr}
        const removeFields = ["keyword","page","limit"]
        removeFields.forEach(key => delete queryCopy[key])

        console.log(queryCopy)
        let queryStr = JSON.stringify(queryCopy)
        console.log(queryStr)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) =>`$${key}`)
        this.query = this.query.find(JSON.parse(queryStr))
        console.log(queryStr);


        // this.query = this.query.find(queryCopy)  
        return this 
    }
    pagination(resultPerPage){
        const currentPage  = Number(this.queryStr.page) ||1
        const skip = resultPerPage *(currentPage-1);
        this.query = this.query.limit(resultPerPage).skip(skip)
        return this; 
    }

}


module.exports = ApiFeatures