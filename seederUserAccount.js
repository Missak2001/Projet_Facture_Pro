module.exports = async (userAccountService) => {
    try {
        await userAccountService.dao.db.query("CREATE TABLE IF NOT EXISTS useraccount(id SERIAL PRIMARY KEY, displayname TEXT NOT NULL, login TEXT NOT NULL, challenge TEXT NOT NULL)")
    } catch (e) {
        if (e.code === "42P07") {
            // La table existe déjà, continuons
        } else {
            throw e; // Rejeter s'il y a une autre erreur
        }
    }

    // Insérer user1
    await userAccountService.insert("User1", "user1@example.com", "azerty");
    const user1 = await userAccountService.dao.getByLoginUserAccount("user1@example.com");
    console.log("Utilisateur 1 :", user1);

    // Insérer user2
    await userAccountService.insert("User2", "user2@example.com", "azerty");
    const user2 = await userAccountService.dao.getByLoginUserAccount("user2@example.com");
    console.log("Utilisateur 2 :", user2);
};
