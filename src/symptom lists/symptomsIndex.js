//all symptoms lists to be used on the form need to be imported here- don't need to be imported anywhere else.
import abdoSymptomsList from './abdoSymptoms.js';
import coloSymptomsList from './coloSymptoms.js';
import nonSpecSymptomsList from './nonSpecSymptoms.js';
import respiratorySymptoms from './respiratorySymptoms.js';
import painSymptoms from './painSymptoms.js';
import upperGiSymptoms from './upperGiSymptoms.js';
import breastSymptoms from './breastSymptoms.js';
import urinary from './urinary.js';
import femaleGenital from './femalegenital.js';
import maleGenital from './malegenital.js';
import labTests from './labTests.js';
import imaging from './imaging.js';
import skin from './skin.js'
import headNeck from './headneck.js';
import musculoskeletal from './musculoskeletal.js';


//array of symptoms lists to be displayed in the form -once added here they will display with not further edits needed format is [name of symptoms list, Tile to display at top of symptoms block]
const symptomsIndex=
[
    [nonSpecSymptomsList,"Non-Specific Symptoms"],
    [painSymptoms,"Pain"],
    [abdoSymptomsList,"Abdominal Symptoms"],
    [upperGiSymptoms, "Upper GI Symptoms"],
    [coloSymptomsList,"Colorectal Symptoms"],
    [urinary, "Urinary Symptoms"],
    [maleGenital, "Male Genital Symptoms"],
    [femaleGenital, "Female Genital Symptoms"],
    [respiratorySymptoms, "Respiratory Symptoms"],
    [breastSymptoms,"Breast"],
    [skin, "Skin"],
    [musculoskeletal, "Musculoskeletal"],
    [headNeck, "Head & Neck"],
    [labTests, "Lab Tests"],
    [imaging, "Imaging"]
]



export default symptomsIndex 