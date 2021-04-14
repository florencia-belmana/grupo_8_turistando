module.exports = {
    /** Página principal */
    index: (req, res) => {
        res.render("index.html");
    },

    register: (req, res) => {
        res.render("register.html");
        
    },
    contact: (req, res) => {
        res.render("contact.html");
        
    },
    login: (req, res) => {
        res.render("login.html");
        
    },
};