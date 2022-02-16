const validateTesticular=(formData)=>
{
if (formData.testisEnlargement || formData.testisShape)
    {
    formData.twrValid.testicular=true
    formData.message.testicular="Consideration should be given to a two week rule appoitent if testicular cancer is suspected"
    return formData
    }

if (formData.testisOther)
    {
    formData.message.testicular="Nice recommends considration of direct access testicular ultrasound for men with unexplained /peristent testicular symptoms"
    formData.investigations.push("Testicular ultrasound")
    }

return formData

}

export default validateTesticular