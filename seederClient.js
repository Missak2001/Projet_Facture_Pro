const Client = require("../client");

module.exports = (ClientService) => {
    return new Promise(async (resolve, reject) => {
        try {
            await ClientService.dao.db.query("CREATE TABLE IF NOT EXISTS client (id SERIAL PRIMARY KEY," +
                " pseudo VARCHAR(255) NOT NULL," +
                " nom_C VARCHAR(255) NOT NULL," +
                " prenom_C VARCHAR(255) NOT NULL," +
                " adresse_C VARCHAR(255) NOT NULL," +
                " CP_C INTEGER NOT NULL," +
                " mail_C VARCHAR(255) NOT NULL," +
                " mdp_C VARCHAR(255) NOT NULL)")
                .then(_=>{resolve()});
            for (let i = 0; i < 5; i++) {
                await ClientService.dao.insertClient(new Client("pseudo" + i,
                    "nom_C" + i,
                    "prenom_C" + i,
                    "adresse_C" + i,
                    "CP_C" + i,
                    "mail_C" + i,
                    "mdp_C" + i
                ));
            }
            resolve()
        } catch (e) {
            if (e.code === "42P07") {
                resolve();
            } else {
                reject(e);
            }

        }
    })
}
