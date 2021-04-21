module.exports = {
    login:(req, res)  =>  {
        res.render ('users/login')
        },
        
    register:(req, res) => {
            res.render ("users/register", {
    
            })
        }, 
    

        detail:(req, res) => {
            res.render ("users/detail", {
    
            })
        }, 
    
        edit:(req, res) => {
            res.render ("users/edit", {
    
            })
        }, 
    

        userList:(req, res) => {
            res.render ("users/userList", {
    
            })
        }, 


    }


