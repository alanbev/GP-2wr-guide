const validateBreast=(formData)=>
    {
    if ((formData.age >= 30 && (formData.breastLump || formData.axillaLump)) ||
    (formData.age >= 50 && (formData.nippleDischarge || formData.nippleRetraction)) ||
    formData.breastOther||
    formData.breastSkinChanges)
        {
            formData.twrValid.breast=true
            return formData
        }
const nonUrgentBreast="Consider non-urgent referal to the Breast Clinic"

    if (formData.breastLump)
    {
        formData.message.breast=nonUrgentBreast
    }
    return formData
    }


export default validateBreast