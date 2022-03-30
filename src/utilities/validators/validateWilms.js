const validateWilms=(formData)=>
{  if (formData.age <= 15 && (formData.upperAbdoMass ||
    formData.hepatosplenomegaly ||
    formData.splenomegaly ||
    formData.LiverGbMass ||
    formData.abdoMass ||
    formData.pelvicMass||
    formData.haematuria)) // if statement redundant in present implementation since filter stop this code running if these are not true but included for clarity.
    {
    formData.message.wilms="Consider very urgent referral (for an appointment within 48 hours) for specialist assessment for Wilms' tumour."

    formData.twrValid.wilms=true
    }
return formData
}

export default validateWilms