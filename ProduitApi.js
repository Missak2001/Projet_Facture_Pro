module.exports = (app, svc) => {
    app.get("/produit", async (req, res) => {
        res.json(await svc.dao.getAllProduit())
    })

    app.get("/produit/:id", async (req, res) => {
        try {
            const produit = await svc.dao.getById(req.params.id)
            if (produit === undefined) {
                return res.status(404).end()
            }
            return res.json(produit)
        } catch (e) {
            res.status(400).end()
        }
    })

    app.post("/produit", (req, res) => {
        const produit = req.body
        // if (!svc.isValid(item)) {
        //     return res.status(400).end()
        // }
        svc.dao.insertProduit(produit)
            .then(_ => res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })

    app.delete("/produit/:id", async (req, res) => {
        const produit = await svc.dao.getById(req.params.id)
        if (produit === undefined) {
            return res.status(404).end()
        }
        svc.dao.delete(req.params.id)
            .then(_ => res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })

    app.put("/produit", async (req, res) => {
        const produit = req.body
        // if ((item.id === undefined) || (item.id == null) || (!svc.isValid(item))) {
        //     return res.status(400).end()
        // }
        if (await svc.dao.getById(produit.id) === undefined) {
            return res.status(404).end()
        }
        svc.dao.updateProduit(produit)
            .then(_ => res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })
}
