//imports for the validators to be used- these also need to be added to the validators list below
import buildSymptomScores from './buildSymptomScores.js'
import validatorIndex from './validators/validatorIndex.js'
import sexExclude from './validators/sexExclude.js'

const reportUtils=
{
validators:[],// list of validators to use]
twrBoost:30,  //amount to elevate path qualifying for 2wr clinic in display
noMessageDrop:30, //amount to downgrade paths with no 2wr message in display


getAge(dob)//calculates age from date of birth- not used in current version since form changed to use age
{
    const dateToday= Date.now()
    const dateOfBirth=new Date(dob)
    const age=(dateToday-dateOfBirth.getTime())/31557600000
    return age
},
getSymptomsForPath(path)//finds symptoms for each path -called from orderPathways function. 
    {
    let symptomsForThisPath=[]
    validatorIndex.some(item=>
        {
        if (item.path===path)
            {
            symptomsForThisPath=item.symptoms
            return true
            }
            return false
        })
    return symptomsForThisPath
    },

orderPathways(formData)
{
    let symptomScores=buildSymptomScores(validatorIndex);
    formData.scoredPathsToUse={};
    formData.pathsToUse.forEach(path=>
        {
        let score=0
    let pathSymptoms=this.getSymptomsForPath(path)

       formData.symptomList.forEach(symptom =>
        {
            if (pathSymptoms.includes(symptom))
                {
                score += symptomScores[symptom]
                }
            }
        )
                // boosts priority of path if two week rule valid    
            if (formData.twrValid[path] || path==="retinoblastoma")// also boosts retinoblatoma due to possible need for emergency referal.
                {
               score += this.twrBoost
                }
                //drops priority of path if not for 2wr clinic and no 2wr message
            else if(formData.message[path]==="")
                {
               score-= this.noMessageDrop
                }
            formData.scoredPathsToUse[path]=score
        })
            
    var paths=Object.entries(formData.scoredPathsToUse)
    paths.sort((a, b) => b[1] - a[1])   
    return paths
},

ValidateTwr(formData)// root method for validation- 
{
    //formData.age=this.getAge(formData.dob);  //taken out of use when incput conveted to age 
    formData.age=parseInt(formData.age)
    formData.twrValid={}
    formData.message={}
    formData.investigations=[]
    console.log(formData)
    this.findValidators(formData)
    this.validators.forEach((funct)=>{funct(formData)})
    let paths=this.orderPathways(formData)
    formData.sortedPaths=paths
    return formData
},

findValidators(formData)
    {
    this.validators=[]
    formData.pathsToUse=[]
     validatorIndex.forEach(pathway=>{
         if (!sexExclude[formData.sex].includes(pathway.path) && (formData.age <= 15 || !sexExclude.notChild.includes(pathway.path)))
         // excludes pathways not relevant for sex or age.
         {
    formData.symptomList.some(symptom=>{
    if( pathway["symptoms"].includes(symptom))
        {
        this.validators.push(pathway.validator)
        formData.pathsToUse.push(pathway.path)
        formData.twrValid[pathway.path]=false
        formData.message[pathway.path]=""
        return true
        }
        return false
    }
    )}})
        }
}


export default reportUtils