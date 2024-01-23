import * as Yup from 'yup'

export const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required').min(4, 'First name must be more than 4 characters'),
    middleName: Yup.string(),
    lastName: Yup.string().required('Last name is required').max(15, 'Last name is not more than 15 characters'),
    dobInBs: Yup.string().required("Date of birth in BS is required "),
    dobInAd: Yup.date().required('Date of birth in AD is Required'),
    gender: Yup.string().required('Gender is required'),
    nationality: Yup.string().required('Nationality is required'),
    religion: Yup.string().required('Religion is required'),
    bloodGroup: Yup.string().required('Blood group is required'),
    gradeAppliedFor: Yup.string().required('Grade applied for is required'),
    permanentAddress: Yup.string().required('Permanent address is required'),
    currentAddress: Yup.string().required('Current address is required'),
    nameofSchoolAttended: Yup.string().required('Name of school attended is required'),
    location: Yup.string().required('Location is required'),
    grade: Yup.string().required('Grade is required'),
    dateAttended: Yup.string().required('Date attended is required'),

    motherName: Yup.string().required('Mother\'s name is required'),
    MotherContactNumber: Yup.string().required('Mother\'s contact number is required'),
    fatherName: Yup.string().required('Father\'s name is required'),
    fatherContactNumber: Yup.string().required('Father\'s contact number is required'),
    guardianName: Yup.string(),
    guardianContactNumber: Yup.string(),

    personName: Yup.string().required('Person\'s name is required'),
    relationshipToTheChild: Yup.string().required('Relationship to the child is required'),
    mobileNumber: Yup.string().required('Mobile number is required'),
    email: Yup.string().email('Invalid Email address'),
    address: Yup.string().required('Address is required'),

    birthCertificate: Yup.mixed().required('Birth certificate is required'),
    transferCertificate: Yup.mixed().required('Transfer certificate is required'),
    migration: Yup.mixed().required('Migration document is required'),
    character: Yup.mixed().required('Character document is required'),
    reportCardOfLastClass: Yup.mixed().required('Report card of last class is required'),
    parentCitizenship: Yup.mixed().required('Parent\'s citizenship document is required'),
    ppPhotoOfStudent: Yup.mixed().required('Passport photo of student is required'),
    hostelFacility: Yup.boolean(),
    transportationService: Yup.boolean(),
    transportationLocation: Yup.string()
});