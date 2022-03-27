const validateOral=(formData)=>
{
if (formData.neckLump || 
    formData.oralUlcer || 
    formData.oralLump ||
    formData.oralRedPatch)
        {
        formData.twrValid.oral=true
        }
    return formData
}
export default validateOral