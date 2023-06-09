/* requette denvoi des information */
let connection=require('../config/db')
class Bulletin {

    static ajouter(Matricule,Nom,Postnom,Prenom,Grade,Salaire,Devise,Sexe,Date,Age,Matricule_Entreprise,Matricule_Service,Matricule_Caisse,cb){
        connection.query('INSERT INTO Travailleur SET Matricule=?,Nom=?,Postnom=?,Prenom=?,Grade=?,Salaire=?,Devise=?,Sexe=?,Date=?,Age=?,Matricule_Entreprise=?,Matricule_Service=?,Matricule_Caisse=?',[Matricule,Nom,Postnom,Prenom,Grade,Salaire,Devise,Sexe,Date,Age,Matricule_Entreprise,Matricule_Service,Matricule_Caisse],(err,result)=>{
            if(err) throw err
            cb(result)

        })

    }

}

module.exports = Bulletin
