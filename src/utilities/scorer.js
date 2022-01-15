//utlity to allocate weighting to pathway 

const scorer=(symptomlistsToScore,formData)=> {
    let score=0   
    symptomlistsToScore.forEach((eachSymptomList)=>{
    formData.symptomList.forEach((symptomItem)=>{
        eachSymptomList.forEach((symptomObject)=>{
        if (symptomItem === symptomObject.symptom)
            {score+=symptomObject.coloWeight}
        })})})

        return score
    }
        export default scorer