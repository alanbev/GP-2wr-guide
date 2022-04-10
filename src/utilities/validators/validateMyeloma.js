const validateMyeloma=(formData)=>
{
    if (formData.bence || formData.electrophoresis)
        {
        formData.twrValid.myeloma=true
        return formData
        }

    if (formData.age>60 && (formData.hypercalcaemia || formData.leukopenia))
        {
        formData.message.myeloma ="Offer very urgent protein electrophoresis and a Bence–Jones protein urine test (within 48 hours) to assess for myeloma in people aged 60 and over with hypercalcaemia or leukopenia and a presentation that is consistent with possible myeloma"

        formData.investigations.myeloma.push("Plasma Protein electrophoresis", "Urine Bence-Jones protein")

        return formData
        }


        if (formData.esr)
        {
        formData.message.myeloma ="Consider very urgent protein electrophoresis and a Bence–Jones protein urine test (within 48 hours) to assess for myeloma if the plasma viscosity or erythrocyte sedimentation rate and presentation are consistent with possible myeloma."

        formData.investigations.push("Plasma Protein electrophoresis", "Urine Bence-Jones protein")

        return formData
        }
    
    if (formData.age >=60 && (formData.bonePain || formData.backPain || formData.fracture))
        {
        formData.message.myeloma="Offer a full blood count and blood tests for calcium and plasma viscosity or erythrocyte sedimentation rate to assess for myeloma in people aged 60 and over with persistent bone pain, particularly back pain, or unexplained fracture."

        formData.investigations.push("FBC", "Calcium","Plasma viscosity", "ESR")
        }
    return formData


}


export default validateMyeloma