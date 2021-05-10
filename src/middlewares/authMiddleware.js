function authMiddleware (req, res, next){
    if (req.session.user.category_id == 1) {
        next();
    } else {"Esta pagina es solo para administradores" }
}
module.exports = authMiddleware