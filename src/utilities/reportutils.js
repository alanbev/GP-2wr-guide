//imports for the validators to be used- these also need to be added to the validators list below
import validateColo from './validators/validatecolo.js'



const reportUtils={

validators:[validateColo],// list of validators to use


getAge(dob)//calculates age from date of birth
{
    const dateToday= Date.now()
    const dateOfBirth=new Date(dob)
    const age=(dateToday-dateOfBirth.getTime())/31557600000
    return age
},

orderPathways(validPathways)
{
    var paths=Object.entries(validPathways)
    paths.sort((a, b) => b[1] - a[1])
    return paths
},

ValidateTwr(formData)// root method for validation- sends formdata to 
{
    formData.age=this.getAge(formData.dob);
    this.validators.forEach((funct)=>{funct(formData)})
    let paths=this.orderPathways(formData.validPathways)
    formData.paths=paths
    return formData
},

}



export default reportUtils