const mongoose = require('../services/loginService');
const loginService = require('../services/loginService')

const postLoginController = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    const login = await loginService.postLoginService(email, password);
    if (!login){ 
        return res.status(404).json({
            message: "E-mail ou Senha invalidos"
        })
    } 
    return res.status(200).json({
        message: "Login realizado com sucesso"
    })
}

module.exports = {
    postLoginController,
  };