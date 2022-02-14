const validateVulval=(formData)=>
{
if (formData.vulvalLump)
    {
    formData.message.vulval="Nice recommends consideration of referal for an appointment within two weeks in women with an unexplained vulval lump, ulceration or bleeding"
    formData.twrValid.vulval=true
    }
}

export default validateVulval