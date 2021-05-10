function guestMiddleware (req, res, next){
    if (req.session.user.category_id == undefined) {
        next();
    } else {"Ya estas logueado" }
}

module.exports = guestMiddleware