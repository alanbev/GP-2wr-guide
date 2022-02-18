// allocates weights to symptoms for each pathway bases on how many pathways they occur in
// dynamically generates symptomsScores-useful in dev- could be replaced by static object in prod build
import "../css/report.css"
const buildSymptomScores=(validatorIndex)=>
{
let symptomScore={}
let pathwayCount={}
const nonScoringSymptoms=["uti","sti"]//symptoms from form that do not add positie weight to a pathway.
    
    validatorIndex.forEach(element => {
        element.symptoms.forEach(symptom=>{
        if (!pathwayCount[symptom])
            {pathwayCount[symptom]=1} 
        else
            {pathwayCount[symptom]+=1}
})});
for (const[key,value] of Object.entries(pathwayCount))
{
symptomScore[key]=1/value
}

nonScoringSymptoms.forEach(symptom=>
    {
    symptomScore[symptom]=0
    }
)
console.log("symptom score",symptomScore)
return symptomScore
}


export default buildSymptomScores