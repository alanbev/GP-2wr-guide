const validateBoneSarcoma=(formData)=>
{
if (formData.xrBoneSarcoma)
    {
    if (formData.age <= 24)
        {
        formData.message.boneSarcoma="Consider a very urgent referral (for an appointment within 48 hours) for specialist assessment for children and young people if an X‑ray suggests the possibility of bone sarcoma."
        }
    else
        {
        formData.message.boneSarcoma="Consider a suspected cancer pathway referral (for an appointment within 2 weeks) for adults if an X‑ray suggests the possibility of bone sarcoma."   
        }
    formData.twrValid.boneSarcoma=true
    return formData
    }

    if (formData.boneLump || formData.bonePain)
    {
    if (formData.age <= 24)
        {
        formData.message.boneSarcoma="Consider a very urgent direct access X‑ray (to be done within 48 hours) to assess for bone sarcoma in children and young people with unexplained bone swelling or pain."
        formData.investigations.push("Bone XR (urgent)")
        }
    else
        {
        formData.message.boneSarcoma="Consider a direct access X‑ray" 
        formData.investigations.push("Bone XR")  
        }
    return formData
    }
}

export default validateBoneSarcoma