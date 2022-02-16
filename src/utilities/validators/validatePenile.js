const validatePenile=(formData)=>
{
if ((formData.penileMass && !formData.sti) || (formData.foreskin))
    {
    formData.twrValid.penile=true
    return formData
    }
}

export default validatePenile