//all symptoms lists to be used on the form need to be imported here- don't need to be imported anywhere else.
import abdoSymptomsList from './abdoSymptoms.js';
import coloSymptomsList from './coloSymptoms.js';
import nonSpecSymptomsList from './nonSpecSymptoms.js';
import respiratorySymptoms from './respiratorySymptoms.js';
import painSymptoms from './painSymptoms.js';
import upperGiSymptoms from './upperGiSymptoms.js';

//array of symptoms lists to be displayed in the form -once added here they will display with not further edits needed format is [name of symptoms list, Tile to display at top of symptoms block]
const symptomsIndex=
[
[nonSpecSymptomsList,"Non-Specific Symptoms"],
[painSymptoms,"Pain"],
[abdoSymptomsList,"Abdominal Symptoms"],
[upperGiSymptoms, "Upper GI Symptoms"],
[coloSymptomsList,"Colorectal Symptoms"],
[respiratorySymptoms, "Respiratory Symptoms"]
]


export default symptomsIndex 