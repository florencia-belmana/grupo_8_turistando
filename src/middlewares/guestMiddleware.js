function guestMiddleware (req, res, next){
    if (req.session.user.category_id == undefined) {
        next();
    } else {"Debes cerrar sesión para continuar" }
}

module.exports = guestMiddleware