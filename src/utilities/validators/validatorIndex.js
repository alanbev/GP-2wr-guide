import validateColo from "./validateColo";
import validateLung from "./validateLung";
import validateMesothelioma from "./validateMesothelioma";
import validateOesophagus from "./ValidateOesophagus";
import validatePancreas from "./validatePancreas";
import validateStomach from "./validateStomach";
import validateLiverGb from "./validateLiverGb";
import validateBreast from "./validateBreast";
import validateOvarian from "./validateOvarian";
import validateEndometrial from "./validateEndometrial";
import validateCervical from "./validateCervical.js";
import validateVulval from "./validateVulval.js";
import validateVaginal from "./validateVaginal.js";
import validateProstate from "./validateProstate.js";
import validateBladder from "./validateBladder.js";
import validateRenal from "./validateRenal";
import validateTesticular from "./validateTesticular";
import validatePenile from "./validatePenile";


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
},

{
path:"breast",
symptoms:[
    "breastLump",
    "nippleDischarge",
    "nippleRetraction",
    "breastOther",
    "breastSkinChanges",
    "axillaLump",
    ],
validator:validateBreast,
displayAs:"Breast",
requirements:"",
},

{
path:"ovarian",
symptoms:[
    "weightLoss",
    "fatigue",
    "appetiteLoss",
    "earlySatiety",
    "abdoPain",
    "pelvicPain",
    "distension",
    "ascites",
    "cobh",
    "urinaryFrequency",
    "ca125",
    "imagingOvarian"
        ],
    validator:validateOvarian,
    displayAs:"Ovarian Cancer",
    requirements:"",
    },

    {
path:"endometrial",
symptoms:[
    "diabetes",
    "haematuria",
    "vaginalDischarge",
    "pmBleeding",
    "anaemia",
    "idAnaemia",
    "thrombocytosis",
    "elevatedGlucose",
    "imagingEndometrial"
        ],
    validator:validateEndometrial,
    displayAs:"Endometrial Cancer",
    requirements:"",
    },

    {
    path:"cervical",
    symptoms:[
    "abnCervix"
    ],
    validator:validateCervical,
    displayAs:"Cervical Cancer",
    requirements:"",
    },

    {
    path:"vulval",
    symptoms:[
    "vulvalLump"
        ],
    validator:validateVulval,
    displayAs:"Vulval Cancer",
    requirements:"",
    },

    {
    path:"vaginal",
    symptoms:[
        "vaginalMass"
        ],
    validator:validateVaginal,
    displayAs:"Vaginal Cancer",
    requirements:"",
    },

    {path:"prostate",
    symptoms:[
        "urinaryFrequency",
        "urinaryRetention",
        "haematuria",
        "prProstate",
        "erectileDysfunction",
        "psa"
        ],
    validator:validateProstate,
    displayAs:"Prostate Cancer",
    requirements:""
    },

    {path:"bladder",
    symptoms:[
        "recUti",
        "haematuria",
        "microHaematuria"
        ],
    validator:validateBladder,
    displayAs:"Bladder Cancer",
    requirements:""
    },

    
    {path:"renal",
    symptoms:[
        "haematuria"
        ],
    validator:validateRenal,
    displayAs:"Renal Cancer",
    requirements:""
    },

    {path:"testicular",
    symptoms:[
        "testisEnlargement",
        "testisShape",
        "testisOther"
        ],
    validator:validateTesticular,
    displayAs:"Testicular Cancer",
    requirements:""
    },

    {path:"penile",
    symptoms:[
        "penileMass",
        "foreskin",
        ],
    validator:validatePenile,
    displayAs:"Penile Cancer",
    requirements:""
    }


]


export default validatorIndex