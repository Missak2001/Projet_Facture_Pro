const ProduitDAO = require("../datamodel/ProduitDao");

module.exports = class ProduitService {
    constructor(db) {
        this.dao = new ProduitDAO(db)
    }


}