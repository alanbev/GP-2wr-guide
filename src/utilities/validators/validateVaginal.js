const validateVaginal=(formData)=>
{
if (formData.vaginalMass)
    {
    formData.message.vaginal="Nice recommends consideration of referal for an appointment within two weeks in women with an unexplained palpable vaginal mass"
    formData.twrValid.vaginal=true
    }
}

export default validateVaginal