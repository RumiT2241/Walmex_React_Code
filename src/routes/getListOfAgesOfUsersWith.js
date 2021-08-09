'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    try{
    const itemToLookup = request.params.itemLookup;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    return response.status(200).send(JSON.stringify(data));
    }
    catch(err){
        return response.status(500).send(err);
    }
};

module.exports = (app) => {
    app.get('/users/age/:itemLookup', getListOfAgesOfUsersWithHandler);
};
