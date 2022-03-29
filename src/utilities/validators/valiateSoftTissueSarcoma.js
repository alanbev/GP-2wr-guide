const validateSoftTissueSarcoma=(formData)=>
{
    if (formData.usSarcoma)
    {
    if (formData.age <= 24)
        {
        formData.message.softTissueSarcoma="Consider a very urgent referral (for an appointment within 48 hours) for children and young people if they have ultrasound scan findings that are suggestive of soft tissue sarcoma or if ultrasound findings are uncertain and clinical concern persists. "
        }
    else
        {
        formData.message.softTissueSarcoma="Consider a suspected cancer pathway referral (for an appointment within 2 weeks) for adults if they have ultrasound scan findings that are suggestive of soft tissue sarcoma or if ultrasound findings are uncertain and clinical concern persists. "   
        }
    formData.twrValid.softTissueSarcoma=true
    return formData
    }

    if (formData.stLump)
    {
    if (formData.age <= 24)
        {
        formData.message.softTissueSarcoma="Consider a very urgent direct access ultrasound scan (to be done within 48 hours) to assess for soft tissue sarcoma in children and young people with an unexplained lump that is increasing in size. "
        formData.investigations.push("Soft Tissue Ultrasound (urgent)")
        }
    else
        {
        formData.message.softTissueSarcoma="Consider a direct access soft tissue ultrasound" 
        formData.investigations.push("Soft Tissue Ultrasound")  
        }
    return formData
    }

}

export default validateSoftTissueSarcoma