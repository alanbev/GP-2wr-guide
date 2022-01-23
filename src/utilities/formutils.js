

const formUtils={

initialValuesObjectBuilder(objectList)
    //generates initialValues object for Formik from array of symptmom object arrays
    {
    let keylist = []

    //manual enty of initalValues goes here
    let newObject=
    {
    age:"",
    }

//adds enties to initialValues from the symotom lists
    keylist = objectList.map(eachobject=>eachobject[0].map(item=>item.symptom))

    for (const keys of keylist)
        {
        for (const eachKey of keys)
            {
            newObject[eachKey]=false
            }
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
        console.log("values", values)
         return values
},
}


export default formUtils