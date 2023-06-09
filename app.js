let express=require("express");
let app =express();

app.listen(3000);// création du port 
app.set('view engine','ejs') // moteur de lecture de page html

// nos middlwares
app.use('/',express.static("public"))
app.use(express.json())   
app.use(express.urlencoded({extended:false}))

//nos root
app.get('/modifier/:Identifiant',function(req,res){
  res.render('modifier')
              })

app.get('/supprimer/:Identifiant',function(req,res){
      var a = req.params.Identifiant
          console.log(a)
            let tous = require('./models/ajout')
             tous.supprimer(a,function(){
                res.redirect('/News')
                })
              })

                    app.post('/Modifier/:Identifiant', function(req,res){

                              let c = req.params.Identifiant

                              var tout ={
                                'Matricule' : req.body.Matricule,
                                'Nom' : req.body.Nom,
                                'Postnom' : req.body.Postnom,
                                'Prenom' : req.body.Prenom,
                                'Sexe' : req.body.Sexe,
                                'Qualification' : req.body.Qualification,
                                'Code_Salaire' : req.body.Code_Salaire,
                                'Salaire_Net' : req.body.Salaire_Net,
                                'Retraite_Complementaire' : req.body.Retraite_Complementaire,
                                'Devise': req.body.Devise
                              }
                              console.log(tout)
                              let tous = require('./models/ajout')
                                  tous.modifier(c,tout.Matricule,tout.Nom,tout.Postnom,tout.Prenom,tout.Sexe,tout.Qualification,tout.Code_Salaire,tout.Salaire_Net,tout.Retraite_Complementaire,tout.Devise, function(){
                                  res.redirect('/News')
                                  
                                    })
                                })


app.get('/www.hervekongo.hk@gmail.com',function(req,res){
res.render('login')
            })
            
app.get('/accueil',function(req,res){
 
       res.render('accueil')
             })

app.get('/News', function(req,res){


  var tous = require('./models/ajout')
      tous.afficher(function(bulletin){
            res.render('index',{ bulletins : bulletin})
      })

})
app.post('/News', function(req,res){

  var tout ={
    'Matricule' : req.body.Matricule,
    'Nom' : req.body.Nom,
    'Postnom' : req.body.Postnom,
    'Prenom' : req.body.Prenom,
    'Sexe' : req.body.Sexe,
    'Qualification' : req.body.Qualification,
    'Code_Salaire' : req.body.Code_Salaire,
    'Salaire_Net' : req.body.Salaire_Net,
    'Retraite_Complementaire' : req.body.Retraite_Complementaire,
    'Devise': req.body.Devise
  }
  console.log(tout)
  let tous = require('./models/ajout')
      tous.ajouter(tout.Matricule,tout.Nom,tout.Postnom,tout.Prenom,tout.Sexe,tout.Qualification,tout.Code_Salaire,tout.Salaire_Net,tout.Retraite_Complementaire,tout.Devise, function(){
      res.redirect('/News')
      
        })
    })

 app.post('/www.hervekongo.hk@gmail.com',function(req,res){
     let info={
         'nom':req.body.user,
         'key':req.body.key
     }
     console.log(info)
           
     if(info.nom === 'herve' && info.key ==='sam96'){

        res.redirect('/News')
     }else{
       
       res.redirect('/www.hervekongo.hk@gmail.com')

     } 

          
             })
            

                    
            