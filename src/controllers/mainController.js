module.exports = {
    
    index: (req, res) => {
       // console.log("alvaro", req.session.userLogged.user_type_id)
        res.render("index");

    },

    indexAdmin: (req, res) => {
        res.render("index-admin");
    },

    contact: (req, res) => {
        res.render("contact");
        
    },

 
};