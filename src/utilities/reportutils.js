//imports for the validators to be used- these also need to be added to the validators list below
import buildSymptomScores from './buildSymptomScores.js'
import validatorIndex from './validators/validatorIndex.js'

const reportUtils={

validators:[],// list of validators to use]


getAge(dob)//calculates age from date of birth- not used in current version since form changed to use age
{
    const dateToday= Date.now()
    const dateOfBirth=new Date(dob)
    const age=(dateToday-dateOfBirth.getTime())/31557600000
    return age
},

orderPathways(formData)
{
    let symptomScores=buildSymptomScores(validatorIndex);
    formData.scoredPathsToUse={};
    formData.pathsToUse.forEach(path=>
        {
            formData.symptomList.forEach(symptom=>
                {
                //let validatorIndexEntry =validatorIndex[path]
                //if (validatorIndexEntry.symptoms.includes(symptom))
                    if (!formData.scoredPathsToUse.hasOwnProperty(path))
                    {formData.scoredPathsToUse[path]=symptomScores[symptom]}
                else
                {formData.scoredPathsToUse[path]+=symptomScores[symptom]}
        })})
            

    
    var paths=Object.entries(formData.scoredPathsToUse)
    paths.sort((a, b) => b[1] - a[1])
    return paths
},

ValidateTwr(formData)// root method for validation- sends formdata to 
{
    //formData.age=this.getAge(formData.dob);  //taken out of use when incput conveted to age 
    formData.age=parseInt(formData.age)
    formData.twrValid={}
    formData.message={}
    console.log(formData)
    this.findValidators(formData)
    this.validators.forEach((funct)=>{funct(formData)})
    let paths=this.orderPathways(formData)
    formData.sortedPaths=paths
    return formData
},
findValidators(formData)
    {
    formData.pathsToUse=[]
    formData.symptomList.forEach(symptom=>{
    validatorIndex.forEach(pathway=>{
    if (pathway.symptoms.includes (symptom))
        {
        this.validators.push(pathway.validator)
        formData.pathsToUse.push(pathway.path)
        formData.twrValid[pathway.path]=false
        formData.message[pathway.path]=""
        }
}
)})},
}


export default reportUtils