module.exports = class Facture {
    constructor(titre, categorie_F, prix_F, avis, statut, adresse_facturation) {
        this.titre = titre
        this.categorie_F = categorie_F
        this.prix_F = prix_F
        this.avis = avis
        this.statut = statut
        this.adresse_facturation = adresse_facturation
    }
}