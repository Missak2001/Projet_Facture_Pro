const BaseDAO = require('./basedao')

module.exports = class FactureDAO extends BaseDAO{
    constructor(db) {
        super(db, "facture")
    }
    insertFacture(facture) {
        return this.db.query("INSERT INTO facture(titre,categorie_F ,prix_F, avis, statut, adresse_facturation) VALUES ($1,$2,$3,$4,$5,$6)",
            [facture.titre, facture.categorie_F, facture.prix_F, facture.avis, facture.statut, facture.adresse_facturation])
    }

    getAllFacture() {
        return new Promise((resolve, reject) =>
            this.db.query("SELECT * FROM facture ORDER BY titre,categorie_F,prix_F,avis,statut,adresse_facturation")
                .then(res => resolve(res.rows))
                .catch(e => reject(e)))
    }

    updateFacture(facture) {
        return this.db.query("UPDATE facture SET titre=$2,categorie_F=$3,prix_F=$4,avis=$5,statut=$6,adresse_facturation=$7 WHERE id=$1",
            [facture.titre, facture.categorie_F, facture.prix_F, facture.avis, facture.statut, facture.adresse_facturation])
    }

}