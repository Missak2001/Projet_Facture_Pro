const ClientDAO = require("../datamodel/ClientDao");

module.exports = class ClientService {
    constructor(db) {
        this.dao = new ClientDAO(db)
    }


}