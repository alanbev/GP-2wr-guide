const validateRenal=(formData)=>
{
if (formData.age >= 45 && formData.haematuria && !formData.uti)
    {
        formData.twrValid.renal=true
    }
return formData
}


export default validateRenal