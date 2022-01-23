import validateColo from "./validateColo";
import validateLung from "./validateLung";
const validatorIndex=[
{
path:"colorectal",  
symptoms:[
    "weightLoss",
    "abdoPain",
    "rectalBleeding", 
    "anaemia", 
    "idAnaemia", 
    "cobh", 
    "fit"],
validator:validateColo,
displayAs:"Colorectal"
},

{
path:"lung",  
symptoms:[
    "weightLoss"
    ,"fatigue"
    ,"appetiteLoss"
    ,"thrombocytosis"
    ,"smoker"
    ,"cxrLung"
    ,"haemoptysis"
    ,"cough"
    ,"sob"
    ,"chestPain"
    ,"fingerClubbing"
    ,"neckNodes"
    ,"chestSignsLung"
    ,"chestInfection"],
validator:validateLung,
displayAs:"Lung"
    }


]


export default validatorIndex