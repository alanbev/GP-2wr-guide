const validateOvarian=(formData)=>//check NG12 criteria
{const ovarianTooYoungMessage = "NICE ovarian cancer guidance only applies to women 18 0r over"

const ovarianIBSSymptomsMessage = "It is rare for IBS symptoms to present for the first time in women over 50 and NICE recommends a CA 125 blood test in women with new IBS symptoms in the last 12 months."

const considerCa125Message = "NICE recommends consideration of carrying out a CA 125 blood test in women with unexplained weight loss, fatigue or a change in bowel habit"

const ovarianFreqSymptomsMessage = "If symptoms of distenison, early satiety, pelvic or abdominal pain or urinary frequency are frequent or persistent (particularly if more than twelve times per month and espcially in women over 50) NICE recommends a CA 125 blood test." 

const ovarianReturn= "Assess carefully & consider other causes of symptoms. If no other cause apparent advise return for review if these become more freqenunt or persistent"

const ca125RaisedMessage= "If the CA 125 is 35 or more NICE recommend that an ultrasound of the abdomen and pelvis should be arranged." 

    if (formData.age < 18)
        {
        formData.message.ovarian = ovarianTooYoungMessage 
        return formData
        }
    if (formData.ascites || formData.abdoMass || formData.pelvicMass || formData.imagingOvarian)
        {
          formData.twrValid.ovarian = true
          return formData  
        }
    if (formData.ca125)
        {
        formData.message.ovarian = considerCa125Message
        return formData
        }
    
    if (formData.age >= 50 && (formData.abdoPain || formData.distension || formData.cobh))
        {
        formData.message.ovarian=ovarianIBSSymptomsMessage
        }
    else if (formData.weightLoss || formData.fatigue || formData || formData.cobh)
        {
        formData.message.ovarian=considerCa125Message
        }

    if (formData.distension || formData.satiety || formData.appetiteLoss || formData.formData.abdoPain || formData.pelvicPain || formData.urinaryFrequency)
        {
        if (formData.message.ovarian === "")
            {
            formData.message.ovarian=ovarianFreqSymptomsMessage
            }
        else // add message on if previous messsage exists
            {
            formData.message.ovarian += "\n"
            formData.message.ovarian += ovarianFreqSymptomsMessage
            }
        }

    if (formData.message.ovarian ==="")
            {
             formData.message.ovarian=ovarianReturn   
            }

    else
            {
            formData.message.ovarian += "\n"
            formData.message.ovarian += ca125RaisedMessage
            }

    return formData
            
}

export default validateOvarian