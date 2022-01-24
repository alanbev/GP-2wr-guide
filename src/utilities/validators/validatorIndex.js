import validateColo from "./validateColo";
import validateLung from "./validateLung";
import validateMesothelioma from "./validateMesothelioma";



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
    },

    {
path:"mesothelioma",  
symptoms:[
    "weightLoss"
    ,"fatigue"
    ,"appetiteLoss"
    ,"smoker"
    ,"asbestos"
    ,"cxrPleural"
    ,"haemoptysis"
    ,"cough"
    ,"sob"
    ,"chestPain"
    ,"fingerClubbing"
    ,"chestSignsPleural"
   ],
validator:validateMesothelioma,
displayAs:"Mesothelioma"
    }

]


export default validatorIndex