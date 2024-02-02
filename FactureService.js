const FactureDAO = require("../datamodel/FactureDao");

module.exports = class FactureService {
    constructor(db) {
        this.dao = new FactureDAO(db)
    }


}