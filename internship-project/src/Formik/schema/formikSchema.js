import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required').min(4, 'First name must be more than 4 characters').matches(/^[a-zA-Z]*$/, 'Only letter allowed.'),

    middleName: Yup.string().matches(/^[a-zA-Z]*$/, 'Only letter allowed.'),

    lastName: Yup.string().required('Last name is required').max(15, 'Last name is not more than 15 characters').matches(/^[a-zA-Z]*$/, 'Only letter allowed.'),

    dobInBs: Yup.string().required("Date of birth in BS is required ").matches(/^[0-9-]*$/, 'Only numbers and hyphens are allowed.'),

    dobInAd: Yup.date().required('Date of birth in AD is Required'),

    nationality: Yup.string().required('Nationality is required').matches(/^[a-zA-Z]*$/, 'Only letter allowed.'),

    religion: Yup.string().required('Religion is required').matches(/^[a-zA-Z]*$/, 'Only letter allowed.'),

    bloodGroup: Yup.string().required('Blood group is required').matches(/^[a-zA-Z+-]*$/, 'Only letter allowed.'),

    gradeAppliedFor: Yup.string().required('Grade applied for is required').matches(/^[a-zA-Z]*$/, 'Only letter allowed.'),

    permanentAddress: Yup.string().required('Permanent address is required').matches(/^[a-zA-Z]*$/, 'Only letter allowed.'),

    currentAddress: Yup.string().required('Current address is required').matches(/^[a-zA-Z]*$/, 'Only letter allowed.'),

    nameofSchoolAttended: Yup.string().required('Name of school attended is required').matches(/^[a-zA-Z ]*$/, 'Only letter allowed.'),

    location: Yup.string().required('Location is required').matches(/^[a-zA-Z]*$/, 'Only letter allowed.'),

    grade: Yup.string().required('Grade is required').matches(/^[a-zA-Z0-9+]*$/, 'Only letter allowed.'),

    dateAttended: Yup.string().required('Date attended is required').matches(/^[0-9-]*$/, 'Only letter allowed.'),

    motherName: Yup.string().required('Mother\'s name is required').matches(/^[a-zA-Z ]*$/, 'Only letter allowed.'),

    motherContactNumber: Yup.string()
        .required('Mother\'s contact number is required')
        // .matches(/^(98|97)/, 'Number needs to start with 98 or 97')
        // .matches(/^\d{10}$/, 'Number must be 10 digits'),
        .matches(/^(98|97)/, 'Number needs to start with 98 or 97')
        .matches(/^\d{10}$/, 'Number must be 10 digits'),


    fatherName: Yup.string().required('Father\'s name is required').matches(/^[a-zA-Z ]*$/, 'Only letter allowed.'),

    fatherContactNumber: Yup.string()
        .required('Father\'s contact number is required')
        .matches(/^(98|97)/, 'Number needs to start with 98 or 97')
        .matches(/^\d{10}$/, 'Number must be 10 digits'),

    guardianName: Yup.string().matches(/^[a-zA-Z ]*$/, 'Only letter allowed.'),

    guardianContactNumber: Yup.string().matches(/^(98|97)/, 'Number needs to start with 98 or 97')
        .matches(/^\d{10}$/, 'Number must be 10 digits'),


    personName: Yup.string().required('Person\'s name is required').matches(/^[a-zA-Z ]*$/, 'Only letter allowed.'),

    relationshipToTheChild: Yup.string().required('Relationship to the child is required').matches(/^[a-zA-Z ]*$/, 'Number not allowed'),

    mobileNumber: Yup.string()
        .required('Mobile number is required')
        .matches(/^(98|97)/, 'Number needs to start with 98 or 97')
        .matches(/^\d{10}$/, 'Number must be 10 digits'),

    email: Yup.string().required("Email is required").test('includesAt', 'Email must include @', value => value && value.includes('@'))
        .email('Invalid email address'),

    address: Yup.string().required('Address is required').matches(/^[a-zA-Z ]*$/, 'Number not allowed'),

    birthCertificate: Yup.mixed()
        .required('Birth certificate is required'),
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

