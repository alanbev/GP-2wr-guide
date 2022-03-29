const validateNonHodgkins=(formData)=>
{
    if (formData.lymphadenopathy || formData.splenomegaly || formData.hepatosplenomegaly)
        {
        if (formData.age <=24)
            {
            formData.message.nonHodgkins="Consider a very urgent referral (for an appointment within 48 hours) for specialist assessment for non‑Hodgkin's lymphoma in children and young people presenting with unexplained lymphadenopathy or splenomegaly. When considering referral, take into account any associated symptoms, particularly fever, night sweats, shortness of breath, pruritus or weight loss."
            }
        else
            {
            formData.message.nonHodgkins="Consider a suspected cancer pathway referral (for an appointment within 2 weeks) for non‑Hodgkin's lymphoma in adults presenting with unexplained lymphadenopathy or splenomegaly. When considering referral, take into account any associated symptoms, particularly fever, night sweats, shortness of breath, pruritus or weight loss."
            }
        formData.twrValid.nonHodgkins=true
        }
    else 
        {
        formData.message.nonHodgkins="Consider examining for lymphadenopathy and splenomegaly"
        }
    return formData
}

export default validateNonHodgkins