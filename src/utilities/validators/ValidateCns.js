const validateCns=(formData)=>
    {
    if (formData.cns)
        {
        if (formData.age <=24)
            {
            formData.message.cns="NICE recommends consideration of a very urgent referral (for an appointment within 48 hours) for suspected brain or central nervous system cancer in children and young people with newly abnormal cerebellar or other central neurological function. "

            formData.twrValid.cns=true
            }

        else
            {
            formData.message.cns="NICE recommends consideration of an urgent, direct access, MRI scan of the brain (or CT scan if MRI is contraindicated; to be done within 2 weeks) to assess for brain or central nervous system cancer in adults with progressive, sub‑acute loss of central neurological function."
            
            
            formData.investigations.push("MRI brain")
            formData.investigations.push("CT brain (if MRI contraindicated)")
            }
        }
    return formData
    }

export default validateCns


        
    