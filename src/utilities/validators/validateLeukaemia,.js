const validateLeukaemia=(formData)=>
{
if (formData.age <= 24 && (formData.petichiae || formData.hepatosplenomegaly))
    {
    formData.message.leukaemia="NICE recommends referal of children and young people for immediate specialist assessment for leukaemia if they have unexplained petechiae or hepatosplenomegaly. "

    formData.twrValid.leukaemia=true
    return formData
    }
    
if  (formData.pallor || 
    formData.fatigue || 
    formData.fever ||
    formData.infection ||
    formData.lymphadenopathy ||
    formData.bruising ||
    formData.bleeding ||
    formData.petechiae ||
    formData.hepatosplenomegaly ||
    (formData.age <24 && formData.bonePain))
        {
        formData.message.leukaemia="NICE recommends a very urgent (within 48 hours) Full Blood Count"
        formData.investigations.push("FBC")
        }
return formData
}

export default validateLeukaemia





