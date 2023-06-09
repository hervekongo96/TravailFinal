let connection=require('../config/db')
class Ecole {

    static ajouter(nomEcole,categorieEcole,communeEcole,quartierEcole,avenueEcole,numeroEcole,cb){
        connection.query('INSERT INTO ecole SET nomEcole=?,categorieEcole=?,communeEcole=?,quartierEcole=?,avenueEcole=?,numeroEcole=?',[nomEcole,categorieEcole,communeEcole,quartierEcole,avenueEcole,numeroEcole])

    }
    



}