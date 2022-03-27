const validateThyroid=(formData)=>
    {
    if (formData.thyroid)
        {
        formData.twrValid.thyroid=true
        }
    return formData
    }

export default validateThyroid