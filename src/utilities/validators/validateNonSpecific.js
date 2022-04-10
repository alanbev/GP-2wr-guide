const validateNonSpecific=(formData)=>
    {
     for (let pathway in formData.twrValid)
        {
        console.log(pathway)
        if (formData.twrValid[pathway])
            {
            return formData
            }
        }

    if (formData.age <= 15 && formData.childConcern)
        {formData.message.nonSpecific="Take into account the insight and knowledge of parents and carers when considering making a referral for suspected cancer in a child or young person. Consider referral for children if their parent or carer has persistent concern or anxiety about the child's symptoms, even if the symptoms are most likely to have a benign cause."
        formData.twrValid.nonSpecific=true
        return formData
        }

    if (formData.weightLoss)
        {
        formData.message.nonSpecific= "For people with unexplained weight loss, which is a symptom of several cancers including colorectal, gastro‑oesophageal, lung, prostate, pancreatic and urological cancer, carry out an assessment for additional symptoms, signs or findings that may help to clarify which cancer is most likely and offer urgent investigation or a suspected cancer pathway referral (for an appointment within 2 weeks). Consider referal on the non-specific sypmptoms pathway if >5% weight loss in the last 3 months or strong clinical concern.  "
        formData.twrValid.nonSpecific=true
        }

    if (formData.appetiteLoss)
        {
        let message = "For people with unexplained weight loss, which is a symptom of several cancers including colorectal, gastro‑oesophageal, lung, prostate, pancreatic and urological cancer, carry out an assessment for additional symptoms, signs or findings that may help to clarify which cancer is most likely and offer urgent investigation or a suspected cancer pathway referral (for an appointment within 2 weeks). Consider referal on the non-specific symptoms pathway if the appetite ost has persisted for four weeks or more or strong clinical concern. "

        if (formData.message.nonSpecific==="")
            {
            formData.message.nonSpecific=message
            }
        else
            {
            formData.message.nonSpecific += message
            }

        formData.twrValid.nonSpecific=true
        }


    if (formData.dvt)
        {
            let message = "For people with deep vein thrombosis, which is associated with several cancers including urogenital, breast, colorectal and lung cancer carry out an assessment for additional symptoms, signs or findings that may help to clarify which cancer is most likely and consider urgent investigation or a suspected cancer pathway referral (for an appointment within 2 weeks)."
    
            if (formData.message.nonSpecific==="")
                {formData.message.nonSpecific=message}
            else
                {formData.message.nonSpecific += message}
        }
    
        

    if (formData.abdoPain || formData.bonePain || formData.nonSpecPain)
        {
        let message = "Consider referring people with vague abdominal pain bone pain or other non-specific, bone pain or other non-specific pain, on the non-specific symptoms pathway if the pain has persisted for over four weeks or there is strong concern"

            if (formData.message.nonSpecific==="")
                {formData.message.nonSpecific=message}
            else
                {formData.message.nonSpecific += message}

        formData.twrValid.nonSpecific=true
        }

    if (formData.fatigue || formData.malaise || formData.distension)
        {
            let message = "Consider referring people with new constitutional symptoms including fatige, malaise or bloating on the non-specific symptoms pathway if the symptoms have persisted for over four weeks or there is strong concern"

            if (formData.message.nonSpecific==="")
                {formData.message.nonSpecific=message}
            else
                {formData.message.nonSpecific += message}

        formData.twrValid.nonSpecific=true
        }

    formData.investigations.push("Chest X Ray","FIT test",
    "Urine Dipstick and culture","FBC", "U&E", "ESR", "CRP", "Thyroid funtion", "LFT", "Globulins", "HBA1c", "Bone Profile","Ferritin","Iron Studies","B12", "Folate")

    if (formData.sex==="male")
        {
        formData.investigations.push("PSA")
        }
    else
        {
        formData.investigations.push("Ca125")
        }
    }

    export default validateNonSpecific