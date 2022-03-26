const validateBasal=(formData)=>
    {
    formData.message.basal="NICE only recommends consider a suspected cancer pathway referral (for an appointment within 2 weeks) for people with a skin lesion that raises the suspicion of a basal cell carcinoma if there is particular concern that a delay may have a significant impact, because of factors such as lesion site or size."

    if (formData.basalConcerning)
        {
        formData.twrValid.basal=true
        } 
    return formData
    }

export default validateBasal