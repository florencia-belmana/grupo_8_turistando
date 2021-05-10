function authMiddleware (req, res, next){
    if (req.session.user.category_id == 1) {
        next();
    } else { 
        
        return res.redirect('/notAllowed') }
}
module.exports = authMiddleware

/* 
module.exports = (req, res, next) =>{
    if (req.session & req.session.user){
        if (req.session.user.admin == true){
            next();
        }
        else res.redirect('/');
    }
    next();
}; */

