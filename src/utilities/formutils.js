import melanomaCriteria from "../symptom lists/melanomaCriteria"

const formUtils=
{

initialValuesObjectBuilder(objectList,calledFrom)
    //generates initialValues object for Formik from array of symptmom object arrays
    {
    let keylist = []
    let newObject={}
    if (calledFrom==="mainForm")//manual enty of initalValues for main form goes here 
        {
        newObject["age"]=""
        newObject["sex"]=""
        keylist = objectList.map(eachobject=>eachobject[0].map(item=>item.symptom)) //version to deal with array of arrays of objects.
        for (const keys of keylist)
        {
        for (const eachKey of keys)
            {
            newObject[eachKey]=false
            }
        }}
    else
        {
        keylist = objectList.map(item=>{return item.symptom})
        console.log(objectList,keylist)
        }//simpler versio  to deal with cases where single array of object

    for (const eachKey of keylist)
            {
            newObject[eachKey]=false
            }
    return newObject
    },

buildSymptomList(values)
    {
        let symptomList=[]
    for (let key in values)
        { 
        if (values[key])
        symptomList.push(key)
        }
        symptomList.splice(0,1)//removes age
        values.symptomList=symptomList
            return values
    },

melanomaScore(values)
    {
    let score=0
    for (let key in values)
        {
        if (values[key])
            {
            for (let item of melanomaCriteria)
                {
                if (item.symptom === key)
                    {
                    score += item.points
                    break
                    }
                }
            }
        }      
    return (score>=3 ? true : false)  
    

    },
idAnaemiaChecker(values)
// draft version only - needs to be rewritten with proper ID anaemia criteria

    {
    if (values.Haemoglobin>12 || values.MCV > 100 || values.Ferritin > 100)
        {
        return false
        }
    else {return true}
    }

}
export default formUtils