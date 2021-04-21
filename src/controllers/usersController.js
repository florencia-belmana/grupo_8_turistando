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
    
    }


