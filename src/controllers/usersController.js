module.exports = {

    userList:(req, res) => {
        res.render ("users/userList", {
            title: 'Listado de usuarios', 
            users : [
                { first_name: 'Juan' } , { first_name: 'María' }
            ]
        })
    }, 

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
    
    }


