const validateCervical=(formData)=>
{
if (formData.abnCervix)
    {
    formData.message.cervical="Nice recommends consideration of referal for an appointment within two weeks if examination of the cervix reveals an abnormality consistent with cervical cancer";
    formData.twrValid.cervical=true;
    }
}

export default validateCervical