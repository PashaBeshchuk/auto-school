const User  = require('./user_shema_model');
const { heshPassword, checkPassword } = require('./hash_models');

exports.createUser = async (userData) => {
    const hash = heshPassword(userData.password)
    userData.password = hash 
    return await new User(userData).save()
}
exports.getUser = async function(email) {
    return await User.findOne( {email}, { _id:0, __v:0, password: 0} )
}

exports.getUserPassword = async function(email) {
    return await User.findOne( {email}, { password: 1, _id: 0 } )
}
