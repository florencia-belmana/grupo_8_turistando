module.exports = {
    /** Página principal */
    index: (req, res) => {
        res.render("index");
    },

    register: (req, res) => {
        res.render("register");
        
    },
    contact: (req, res) => {
        res.render("contact");
        
    },
    login: (req, res) => {
        res.render("login");
        
    }
};