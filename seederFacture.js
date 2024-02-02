const Facture = require("../facture");

module.exports = (FactureService) => {
    return new Promise(async (resolve, reject) => {
        try {
            await FactureService.dao.db.query("CREATE TABLE IF NOT EXISTS facture (id SERIAL PRIMARY KEY," +
                " titre VARCHAR(255) NOT NULL," +
                " categorie_F VARCHAR(255) NOT NULL," +
                " prix_F INTEGER NOT NULL," +
                " avis VARCHAR(255) NOT NULL," +
                " statut INTEGER NOT NULL," +
                " adresse_facturation VARCHAR(255) NOT NULL)")
                .then(_=>{resolve()});
            for (let i = 0; i < 5; i++) {
                await FactureService.dao.insertFacture(new Facture("titre" + i,
                    "categorie_F" + i,
                    "prix_F" + i,
                    "avis" + i,
                    "statut" + i,
                    "adresse_facturation" + i
                ));
            }
            resolve()
        } catch (e) {
            if (e.code === "42P07") { // TABLE ALREADY EXISTS
                resolve();
            } else {
                reject(e);
            }
        }
    })
}
