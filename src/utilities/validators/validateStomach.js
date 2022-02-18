const validateStomach=(formData)=>
{if (formData.upperAbdoMass)
    {
    formData.twrValid.stomach=true
    return formData
    }  
const urgentOGD="Nice guidelines suggest referal for urgent (within two weeks) direct access Upper GI endoscopy"

const routOGD="Nice guidelines suggest referal for non-urgent direct access Upper GI endoscopy"

const treatmentResistantDysepsia= "Nice guidelines suggest referal for non-urgent direct access Upper GI endoscopy if the patient's dyspepsia is resistant to treatment"

if (formData.dysphagia)
    {
     formData.message.stomach=urgentOGD
     formData.investigations.push("Urgent Upper GI Endoscopy")
     return formData   
    }

if (formData.age>=55 && formData.weightLoss && (formData.upperAbdoPain || formData.reflux || formData.dyspepsia))
    {
    formData.message.stomach=urgentOGD
    formData.investigations.push("Urgent Upper GI Endoscopy")
    return formData    
    }
if (formData.haematemesis)
    {
    formData.message.stomach=routOGD
    formData.investigations.push("Routine Upper GI Endoscopy")
    return formData      
    }
     
if (formData.age < 55)
    {
    return formData 
    }
if ((formData.upperAbdoPain && (formData.anaemia || formData.idAnaemia)) || 

(formData.thrombocytosis && (formData.nausea || formData.vomiting || formData.weightLoss || formData.reflux || formData.dyspepsia || formData.upperAbdoPain)) ||

((formData.nausea || formData.vomiting) && (formData.weightLoss || formData.reflux || formData.dyspepsia || formData.upperAbdoPain)))
    {
    formData.message.stomach=routOGD
    formData.investigations.push("Routine Upper GI Endoscopy")
    return formData
    }
    
if (formData.dyspepsia)
    {
    formData.message.stomach=treatmentResistantDysepsia
    formData.investigations.push("Routine Upper GI Endoscopy")
    return formData   
    }

return formData
}
    

export default validateStomach