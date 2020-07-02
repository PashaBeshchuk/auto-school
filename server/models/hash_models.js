const bcrypt = require('bcrypt');

exports.heshPassword = (password) => { 
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}
     
exports.checkPassword = (password, hash) => {
    const resultOfChecking = bcrypt.compareSync(password, hash);
    return resultOfChecking;
}

