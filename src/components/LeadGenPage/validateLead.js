import moment from 'moment';

const validate = values => {
    const errors = {}
    let phoneDate = moment(values.phoneScreen);
    let behavioralDate = moment(values.behavioralInterview);
    let technicalDate = moment(values.technicalInterview);
    let finalInterview = moment(values.finalInterview);
    if (!phoneDate.isValid()) {
        errors.phoneScreen='Please enter a valid date'
    }
    if (!behavioralDate.isValid()) {
        errors.behavioralInterview='Please enter a valid date'
    }
    if (!technicalDate.isValid()) {
        errors.technicalInterview='Please enter a valid date'
    }
    if (!finalInterview.isValid()) {
        errors.finalInterview='Please enter a valid date'
    }
    if (!values.techUsed) {
        errors.techUsed='Please enter the technologies used'
    }
    if (!values.companyName) {
        errors.companyName='Please enter company name'
    }
    if (!values.positionTitle) {
        errors.positionTitle='Please enter position title'
    }
    if(!values.jobDescriptionLink){
        errors.jobDescriptionLink="Insert a URL to the job description";
    } else if (!/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/.test(values.jobDescriptionLink)) 
          {
            errors.jobDescriptionLink = 'Invalid Link'
          }
    return errors;
}


export default validate;