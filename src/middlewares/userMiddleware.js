function userMiddleware (req, res, next){
    if (req.session.user.category_id != undefined) {
        next();
    } else {"Debes loguearte para continuar" }
}

module.exports = userMiddleware