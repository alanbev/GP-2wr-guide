const validateLung=(formData)=>//check NG12 criteria
{if (formData.cxrLung)
    {
    formData.twrValid.lung=true
    return formData
    }

if (formData.age<40)
    {
     return formData   
    }
if (formData.haemoptysis)
    {
    formData.twrValid.lung=true
    return formData
    }

if (formData.cxrPleural)// patient has already had a CXR
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
        formData.investigations.push("Chest X Ray") 
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
        formData.investigations.push("Chest X Ray")    
    }
return formData
}

export default validateLung
