const LoginModel = require('../models/loginSchema');

const bcrypt = require('bcrypt');

const postLoginService = async(email, password) => {
    const login = await LoginModel.findOneAndUpdate({ email }).exec();
    console.log(login)
    const compare = await bcrypt.compare(password, login.password);
    if (!compare){ 
     throw new Error('Dados inválidos')
    } 
    return login 
}

module.exports = {
    postLoginService,
  };