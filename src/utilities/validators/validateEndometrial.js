const validateEndometrial=(formData)=>//check NG12 criteria
    {
    const youngPvBleed="Two week rule referal for post menopausal bleeding in patients under 55 is not mandatory but should be considered"

    const pelvicUltrasound="NICE recommend consideration of a direct access pelvic ultrasound"

    const dischargeUltarasound=" if this is the first presentation with vaginal discharge."
    
    if (formData.imagingEndometrial)
    {
    formData.twrValid.endometrial = true
    return formData
    }

    if (formData.pmBleeding)
        {
        formData.twrValid.endometrial = true
            if (formData.age < 55)
            {
            formData.message.endometrial=youngPvBleed
            }
        return formData
        }

    if (formData.vaginalDischarge)
       {
        if (formData.thrombocystosis || formData.haematuria)
            {
              formData.message.endometrial=pelvicUltrasound  
            }
        else
            {
                formData.message.endometrial=pelvicUltrasound + dischargeUltarasound    
            }
       }

    if (formData.haematuria && (formData.anaemia || formData.idAnaemia || formData.thrombocystosis || formData.elevatedGlucose || formData.diabetes))
        {
        formData.message.endometrial=pelvicUltrasound  
        }
}


export default validateEndometrial