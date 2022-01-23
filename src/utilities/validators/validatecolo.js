const validateColo=(formData)=>//check NG12 criteria
{
if ((formData.age>=40 && formData.weighLoss && formData.abdoPain)
||(formData.age>=50 && formData.rectalBleeding)
||(formData.age>=60 && (formData.idAnaemia || formData.cobh))
||(formData.fit)
||(formData.rectalMass)
||(formData.abdoMass)
||(formData.rectalBleeding &&(formData.abdoPain || formData.cobh || formData.weightLoss || formData.abdoMass ||formData.idAnaemia))
)
    {
    formData.twrValid.colorectal=true
    }
else if( (formData.cobh || formData.idAnaemia)//check DG30 criteria for recommending FIT test
||(formData.age>=50 && (formData.abdoPain || formData.weightLoss)) 
||(formData.age>=60 && formData.anaemia) )
    {
     formData.message.colorectal= "The patient does not meet the NICE criteria for Two week rule colorectal referal but on basis of their symtoms, FIT testing is recommended with consideration of a colorectal 2wr referal if FIT +ve"
    }
return formData
}

export default validateColo