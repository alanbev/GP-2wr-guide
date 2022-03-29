const validateHodgkins=(formData)=>
{
    if (formData.lymphadenopathy)
        {
        if (formData.age <= 24)
            {
            formData.message.hodgkins="Consider a very urgent referral (for an appointment within 48 hours) for specialist assessment for Hodgkin's lymphoma in children and young people presenting with unexplained lymphadenopathy. When considering referral, take into account any associated symptoms, particularly fever, night sweats, shortness of breath, pruritus or weight loss. "
            }
        else
            {
            formData.message.hodgkins="Consider a suspected cancer pathway referral (for an appointment within 2 weeks) for Hodgkin's lymphoma in adults presenting with unexplained lymphadenopathy. When considering referral, take into account any associated symptoms, particularly fever, night sweats, shortness of breath, pruritus, weight loss or alcohol‑induced lymph node pain. "
            }
        formData.twrValid.hodgkins=true
        }
    else 
    {
    formData.message.hodgkins="Consider examining for lymphadenopathy"
    }
    
    return formData
}

export default validateHodgkins