const validateMelanoma=(formData)=>
    {if (formData.pigmentedLesion || formData.dermoscopyMelanoma || formData.nodularMelanoma)
        {
        formData.twrValid.melanoma=true
        return formData
        }
    return formData
}

export default validateMelanoma