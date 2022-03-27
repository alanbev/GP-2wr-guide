const validatelaryngeal=(formData)=>
{
if (formData.age >= 45 && (formData.hoarse || formData.neckLump))
    {
    formData.twrValid.laryngeal=true
    }
return formData
}
export default validatelaryngeal