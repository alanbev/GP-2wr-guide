const validatePancreas=(formData)=>

{
if (formData.age>=40 && formData.jaundice)
    {formData.twrValid.pancreas=true
    return formData
    }

if (formData.age < 60)
    {
    return formData
    }

const pancreasMessage= "NICE guidelines recommend an urgent direct access CT scan (to be done within 2 weeks), or an urgent ultrasound scan if CT is not available."

if (formData.weightLoss && 
    (formData.cobh ||
     formData.backPain || 
     formData.abdopain || 
     formData.upperAbdoPain ||
     formData.nausea ||
     formData.vomiting ||
     formData.diabetes)) 
        {
        formData.message.pancreas=pancreasMessage
        return formData
        }

    return formData

}

export default validatePancreas