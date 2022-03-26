const validateSquamous=(formData)=>
    {
    if (formData.squamous)
        {
        formData.twrValid.squamous=true
        return formData
        }
    return formData
}

export default validateSquamous