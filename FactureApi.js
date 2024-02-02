module.exports = (app, svc) => {
    app.get("/facture", async (req, res) => {
        res.json(await svc.dao.getAllFacture())
    })

    app.get("/facture/:id", async (req, res) => {
        try {
            const facture = await svc.dao.getById(req.params.id)
            if (facture === undefined) {
                return res.status(404).end()
            }
            return res.json(facture)
        } catch (e) {
            res.status(400).end()
        }
    })

    app.post("/facture", (req, res) => {
        const facture = req.body
        // if (!svc.isValid(item)) {
        //     return res.status(400).end()
        // }
        svc.dao.insertFacture(facture)
            .then(_ => res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })

    app.delete("/facture/:id", async (req, res) => {
        const facture = await svc.dao.getById(req.params.id)
        if (facture === undefined) {
            return res.status(404).end()
        }
        svc.dao.delete(req.params.id)
            .then(_ => res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })

    app.put("/facture", async (req, res) => {
        const facture = req.body
        // if ((item.id === undefined) || (item.id == null) || (!svc.isValid(item))) {
        //     return res.status(400).end()
        // }
        if (await svc.dao.getById(facture.id) === undefined) {
            return res.status(404).end()
        }
        svc.dao.updateFacture(facture)
            .then(_ => res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })
}
