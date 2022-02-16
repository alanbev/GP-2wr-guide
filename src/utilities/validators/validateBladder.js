const validateBladder=(formData)=>
{
if (formData.age < 45)
    {
    return formData
    }

if (formData.haematuria && !formData.uti)
    {
    formData.twrValid.bladder=true
    return formData
    }

if (formData.age >= 60 && (formData.microHaematuria || formData.haematuria) && formData.recUti)
    {
    formData.message.bladder = "NICE recommends consideration of non-urgent urological referal"
    }

return formData

}



export default validateBladder