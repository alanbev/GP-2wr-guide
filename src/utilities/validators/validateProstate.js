const validateProstate=(formData)=>
{

if (formData.prProstate)
    {
    formData.twrValid.prostate=true
    return formData
    }

if (formData.urinaryFrequency || formData.urinaryRetention || formData.haematuria || formData.erectileDysfunction)
    {
        if (formData.psa)
            {
            formData.message.prostate="NICE recomends consideration of referal under the prostate two week rule pathway but that the patients's preferences and any co-morbidity should be taken into considration before making hte decision";
            formData.twrValid.prostate=true;
            }
        else
            {
            formData.message.prostate = "NICE recommends consideration of a rectal examination and a PSA test." 
            formData.investigations.push("PSA")
            }

         return formData
    }




}


export default validateProstate