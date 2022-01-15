//all symptoms lists to be used on the form need to be imported here- don't need to be imported anywhere else.
import coloSymptomsList from './coloSymptoms.js';
import nonSpecSymptomsList from './nonSpecSymptoms.js';


//array of symptoms lists to be displayed in the form -once added here they will display with not further edits needed format is [name of symptoms list, Tile to display at top of symptoms block]
const symptomsIndex=
[
[coloSymptomsList,"Colorectal Symptoms"],
[nonSpecSymptomsList,"Non-Specific Symptoms"]
]



export default symptomsIndex