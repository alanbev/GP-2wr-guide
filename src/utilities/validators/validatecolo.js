import scorer from '../scorer.js'//utlity to allocate weighting to pathway (args: symptomLisTo score, formData)

//import the symptom lists containing symptoms for this pathway
import coloSymptomsList from '../../symptom lists/coloSymptoms.js';
import nonSpecSymptomsList from '../../symptom lists/nonSpecSymptoms.js';

const symptomlistsToScore=[coloSymptomsList,nonSpecSymptomsList]//list of symptom lists containing symptoms for this pathway

const validateColo=(formData)=>//check NG12 criteria
{
if ((formData.age>=40 && formData.weighLoss && formData.abdoPain)
||(formData.age>=50 && formData.rectalBleeding)
||(formData.age>=60 && (formData.idAnaemia || formData.cobh))
||(formData.fit)
||(formData.rectalMass)
||(formData.abdoMass)
||(formData.rectalBleeding &&(formData.abdoPain || formData.cobh || formData.weightLoss || formData.abdoMass ||formData.idAnaemia))
)
    {
    formData.validPathways.colorectal=scorer(symptomlistsToScore,formData)
    }
else if( (formData.cobh || formData.idAnaemia)//check DG30 criteria for recommending FIT test
||(formData.age>=50 && (formData.abdoPain || formData.weightLoss)) 
||(formData.age>=60 && formData.anaemia) )
    {
     formData.coloDG30=true
    }
return formData
}

export default validateColo