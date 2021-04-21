const fs = require('fs');
const path = require('path');
const jsonTable = require('../database/jsonTable');
const usersTable = jsonTable('users');

module.exports = {

    login:(req, res)  =>  {
        res.render ('users/login')
        },

    register:(req, res) => {
            res.render ("users/register", {
    
            })
        }, 

    store: (req, res) => {
            // Generamos el nuevo usuario
            let user = req.body;
    
            if (req.file) {
                user.image = req.file.filename;
            } else {
                res.send('La imagen es obligatoria');
            }
            
            let userId = usersTable.create(user);
            
            res.redirect('/users/' + userId);
        },

    userList:(req, res) => {
        let users = usersTable.all()
        res.render ("users/userList", {
            title: 'Listado de usuarios', 
            users
        })
    }, 

    show: (req, res) => {
        let user = usersTable.find(req.params.id);

        if ( user ) {
            res.render('users/detail', { user });
        } else {
            res.send('No encontré el usuario');
        }
    },
       
    edit:(req, res) => {
        let user = usersTable.find(req.params.id);
        res.render ("users/edit", {

        })
    }, 

        detail:(req, res) => {
            res.render ("users/detail", {
    
            })
        }, 
    
   
        update: (req, res) => {
            let user = req.body;
            user.id = Number(req.params.id);
    
            // Si viene una imagen nueva la guardo
            if (req.file) {
                user.image = req.file.filename;
            // Si no viene una imagen nueva, busco en base la que ya había
            } else {
                oldUser = usersTable.find(user.id);
                user.image = oldUser.image;
            }
    
            let userId = usersTable.update(user);
    
            res.redirect('/users/' + userId);
        },
    




    }


