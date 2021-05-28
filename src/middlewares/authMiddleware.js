function authMiddleware (req, res, next){
    if (req.session && req.session.user){
        if (req.session.user.category_id == 1) {
            next();
        } 
    }

    res.render('notAllowed')  
}   
    
     

module.exports = authMiddleware


