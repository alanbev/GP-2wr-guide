const validateLiverGb=(formData)=>
{
    const liverGbMessage= "NICE guidelines recommend an urgent direct access ultrasound scan (to be done within 2 weeks) to assess for liver or gall bladder cancer in people with an upper abdominal mass consistent with an enlarged liver or gall bladder"
    
    if (formData.LiverGbMass)
            {
            formData.message.liverGb=liverGbMessage
            return formData
            }
    
        return formData
        }

        
export default validateLiverGb