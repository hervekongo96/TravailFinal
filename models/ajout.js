/* requette denvoi des information */
let connection=require('../config/db')
class tous {

    static supprimer(Identifiant,cb){
        connection.query('DELETE FROM bulletin WHERE Identifiant=?',[Identifiant],function(err,result){
            if(err) throw err
            cb(result)
        }
        )}

    static ajouter(Matricule,Nom,Postnom,Prenom,Sexe,Qualification,Code_Salaire,Salaire_Net,Retraite_Complementaire,Devise,cb){
        connection.query('INSERT INTO bulletin SET Matricule=?,Nom=?,Postnom=?,Prenom=?,Sexe=?,Qualification=?,Code_Salaire=?,Salaire_Net=?,Retraite_Complementaire=?,Devise=?,Dates_Bulletin=?',[Matricule,Nom,Postnom,Prenom,Sexe,Qualification,Code_Salaire,Salaire_Net,Retraite_Complementaire,Devise,new Date()],(err,result)=>{
            if(err) throw err
            cb(result)

        })
    }


    static modifier(Identifiant,Matricule,Nom,Postnom,Prenom,Sexe,Qualification,Code_Salaire,Salaire_Net,Retraite_Complementaire,Devise,cb){
        connection.query('UPDATE bulletin SET Matricule=?,Nom=?,Postnom=?,Prenom=?,Sexe=?,Qualification=?,Code_Salaire=?,Salaire_Net=?,Retraite_Complementaire=?,Devise=?  WHERE Identifiant=?',[Matricule,Nom,Postnom,Prenom,Sexe,Qualification,Code_Salaire,Salaire_Net,Retraite_Complementaire,Devise,Identifiant],(err,result)=>{
            if(err) throw err
            cb(result)

        })
    }


/*affichage*/
    static afficher(cb){
        connection.query('select * from bulletin',function(err,result){
            if(err)throw err
            cb(result)
        })
    }

}

module.exports = tous
