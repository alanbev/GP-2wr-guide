const validateRetinoblastoma=(formData)=>
{      if (formData.squint)
            {
            if (formData.cns || formData.vomiting || formData.headache)
                {
                formData.message.retinoblastoma="Refer immediately children with new-onset squint that occurs together with ataxia, vomiting or headache to acute paediatric services."
                return formData
                }
            else if (formData.lossRedReflex)
                {
                formData.message.retinoblastoma="Refer immediately children with new-onset squint that occurs together with loss of red reflex in one or both eyes to ophthalmology services."
                return formData
                }
            else
                {
                formData.message.retinoblastoma="Refer urgently children with paralytic squint for neurological assessment, even in the absence of other signs and symptoms of raised intracranial pressure.   Refer children with non-paralytic squint to ophthalmology services."
                } 
            } 

    if (formData.lossRedReflex)
            {
            formData.message.retinoblastoma="Consider urgent referral (for an appointment within 2 weeks) for ophthalmological assessment for retinoblastoma in children with an absent red reflex."
            formData.twrValid.retinoblastoma=true   
            }

    return formData
        


}

export default validateRetinoblastoma
    