const validateMesothelioma=(formData)=>
{if (formData.cxrPleural)
    {
    formData.twrValid.mesothelioma=true
    return formData
    }

if (formData.Age<40 || formData.cxrLung )
    {
     return formData   
    }
let cxrMessage="NICE guidelines  suggest Urgent (within 2 weeks) Chest X Ray"

if (
formData.fingerClubbing||
formData.chestSignsPleural
    )
        {
        formData.message.mesothelioma = cxrMessage
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

if (xrSymptomCount>=2 || (xrSymptomCount > 0 && (formData.smoker || formData.asbestos)))
    {
        formData.message.mesothelioma = cxrMessage
        formData.investigations.push("Chest X Ray")    
    }
return formData
}

export default validateMesothelioma
