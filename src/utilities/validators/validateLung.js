const validateLung=(formData)=>//check NG12 criteria
{if (formData.cxrLung)
    {
    formData.twrValid.lung=true
    return formData
    }

if (formData.Age<40)
    {
     return formData   
    }
let cxrMessage="NICE guidelines  suggest Urgent (within 2 weeks) Chest X Ray"

if (formData.chestInfection || 
    formData.fingerClubbing||
    formData.neckNodes ||
    formData.chestSignsLung ||
    formData.thrombocytosis
    )
        {
        formData.message.lung = cxrMessage 
        return formData
        }


const XrSymptoms=["cough", "fatigue", "sob", "chestPain,", "weightLoss", "appetiteLoss" ]
let xrSymptomCount=0

formData.symptomList.forEach(symptom=>
  {if (XrSymptoms.includes (symptom))
        {
        xrSymptomCount+=1  
        }
    })

if (xrSymptomCount>=2 || (xrSymptomCount > 0 && formData.smoker))
    {
        formData.message.lung = cxrMessage    
    }
return formData
}

export default validateLung
