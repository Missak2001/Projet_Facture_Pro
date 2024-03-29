const bcrypt = require('bcrypt')
const UserAccountDAO = require('../datamodel/useraccountDAO')
const UserAccount = require('../datamodel/useraccount')
module.exports = class UserAccountService {
    constructor(db) {
        this.dao = new UserAccountDAO(db)
    }
    hashPassword(password) {
        return bcrypt.hashSync(password, 10)  // 10 : cost factor -> + élevé = hash + sûr
    }
    insert(displayname, login, password) {
        return this.dao.insert(new UserAccount(displayname, login, this.hashPassword(password)))
    }
    comparePassword(password, hash) {
        return bcrypt.compareSync(password, hash)
    }
    async validatePassword(login, password) {
        const user = await this.dao.getByLogin(login.trim())
        return this.comparePassword(password, user.challenge)
    }


}