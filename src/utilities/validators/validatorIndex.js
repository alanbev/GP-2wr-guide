import validateColo from "./validateColo";
import validateLung from "./validateLung";
import validateMesothelioma from "./validateMesothelioma";
import validateOesophagus from "./ValidateOesophagus";
import validatePancreas from "./validatePancreas";
import validateStomach from "./validateStomach";
import validateLiverGb from "./validateLiverGb";



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
displayAs:"Colorectal",
requirements:"Two Fit tests, Colorectal blood bundle"
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
displayAs:"Lung",
requirements:"",
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
displayAs:"Mesothelioma",
requirements:"",
},

{
path:"oesophagus",
symptoms:[
    "weightLoss",
    "nausea",
    "anaemia",
    "idAnaemia",
    "thrombocytosis",
    "upperAbdoPain",
    "dysphagia",
    "reflux",
    "dyspepsia",
    "vomiting",
    "haematemesis"
    ],
validator:validateOesophagus,
displayAs:"Oesophageal Carcinoma",
requirements:"",
},

{
path: "pancreas",
symptoms: [
    "weightLoss",
    "nausea",
    "jaundice",
    "diabetes",
    "upperAbdoPain",
    "abdoPain",
    "backPain",
    "vomiting",
    "cobh"],
validator: validatePancreas,
displayAs: "Pancreatic Cancer",
requirements:"",
},

{
path:"stomach",
symptoms:[
    "upperAbdoPain",
    "weightLoss",
    "nausea",
    "anaemia",
    "idAnaemia",
    "thrombocytosis",
    "upperAbdoPain",
    "dysphagia",
    "reflux",
    "dyspepsia",
    "vomiting",
    "haematemesis"
    ],
validator:validateStomach,
displayAs:"Stomach Cancer",
requirements:"",
},

{
path:"liverGb",
symptoms:[
    "LiverGbMass"
    ],
validator:validateLiverGb,
displayAs:"Liver or Gall Bladder Cancer",
requirements:"",
}
]


export default validatorIndex