const validateNeuroblastoma=(formData)=>
{  if (formData.age <= 15 && (formData.upperAbdoMass ||
        formData.hepatosplenomegaly ||
        formData.splenomegaly ||
        formData.LiverGbMass ||
        formData.abdoMass ||
        formData.pelvicMass)) // if statement redundant in present implementation since filter stop this code running if these are not true but included for clarity.
        {
        formData.message.neuroblastoma="Consider very urgent referral (for an appointment within 48 hours) for specialist assessment for neuroblastoma in children with a palpable abdominal mass or unexplained enlarged abdominal organ."

        formData.twrValid.neuroblastoma=true
        }
    return formData
}


export default validateNeuroblastoma