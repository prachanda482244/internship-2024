import { Formik, Form } from 'formik'
import FormikInput from './FormikInput'
import { validationSchema } from './schema/formikSchema'
import FormikCheckBox from './FormikCheckBox'
import FormikHeaderComponent from './FormikHeaderComponent'
import FormikSelect from './FormikSelect'
import { genders } from './index'
const FormikForm = () => {
    const initialValues = {
        firstName: '',
        middleName: '',
        lastName: '',

        dobInAd: '',
        dobInBs: '',
        gender: '',
        nationality: '',
        religion: '',
        bloodGroup: '',
        gradeAppliedFor: '',
        permanentAddress: '',
        currentAddress: '',
        nameofSchoolAttended: '',
        location: '',
        grade: '',
        dateAttended: '',

        // # STUDENT'S PARENTAL INFORMATION (PARENT/ GUARDIAN)
        motherName: '',
        motherContactNumber: '',
        fatherName: '',
        fatherContactNumber: '',
        guardianName: '',
        guardianContactNumber: '',

        // #Emergency contact other than parents:

        personName: '',
        relationshipToTheChild: '',
        mobileNumber: '',
        email: '',
        address: '',

        // # CHECKLIST OF DOCUMENTS TO BE ATTACHED (upload)

        // type=file
        birthCertificate: '',
        transferCertificate: '',
        migration: '',
        character: '',
        reportCardOfLastClass: '',
        parentCitizenship: '',
        ppPhotoOfStudent: '',

        // # SERVICE REQUIRED
        hostelFacility: false, //yes/no) radio btn
        transportationService: false, //yes/no) radio btn -> if yes. location input field
        transportationLocation: ''
    }
    const FormSubmit = async (values, other) => {
        console.log(values, 'data')
        console.log(other);
        // resetForm()
    }
    return (
        <div className='bg-gray-200'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={FormSubmit}

            >
                {
                    ({ values, isValid }) => {
                        console.log(values);
                        return (

                            <Form className='flex flex-col   p-4'>


                                <main className='flex flex-col max-w-6xl mx-auto justify-center bg-white shadow-md rounded p-3'>
                                    <div className="flex gap-1 flex-col md:flex-row justify-between md:items-center ">
                                        <h1 className='py-3  px-10 bg-red-400 uppercase text-nowrap text-white
                                        font-semibold'>1.CHILD’S personal Information: </h1>
                                        <div className='flex flex-col  py-3 w-full'>
                                            <div className=" bg-red-400 border h-1"></div>
                                            <div className='flex flex-col font-extralight tracking-tighter '>
                                                <em>
                                                    (Please print clearly with
                                                </em>
                                                <em>
                                                    black ink in BLOCK letters)
                                                </em>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="inputs flex flex-col w-auto md:w-auto sm:items-center justify gap-1">

                                        {/* Name field */}
                                        <div className="name w-full flex md:items-center justify-start md:gap-1">

                                            <FormikInput name="firstName" type="text" labelName='First Name' placeholder="First" required={true} />
                                            <FormikInput name="middleName" type="text" labelName='Middle Name' placeholder="Middle" />
                                            <FormikInput name="lastName" type="text" labelName='Last Name' placeholder="Last" required={true} />
                                        </div>

                                        {/* DOB FIELD */}
                                        <div className="flex
                                         flex-col md:flex-row items-center w-full  ">
                                            <div className='w-full flex flex-col'>
                                                <div className=' underline underline-offset-8 ml-5 mt-3'>
                                                    <p>Date (BS)</p>
                                                </div>
                                                <div className=' flex w-full items-center'>
                                                    <FormikInput name="dobInBs" type="text" placeholder="Write the nepali date" required={true} />

                                                </div>
                                            </div>
                                            <div className='w-full flex flex-col '>
                                                {/* <div className=' flex flex-col border border-white rounded-sm shadow'> */}
                                                <div className=' underline underline-offset-8 ml-5 mt-3'>
                                                    <p>Date (AD)</p>
                                                </div>
                                                <div className='flex w-full items-center '>
                                                    <FormikInput name="dobInAd" type="date" placeholder="Day" required={true} />

                                                </div>
                                            </div>
                                        </div>


                                        {/* GENDER AND NATIONALITY FIELD */}
                                        <div className="name flex justify-between  ">
                                            <div className='flex  flex-wrap md:flex-nowrap md:items-center'>
                                                <div className='flex w-full'>
                                                    {/* <FormikInput name="gender" labelName='Gender' type="text" placeholder="Gender" required={true} /> */}
                                                    <FormikSelect name='gender' genders={genders} />
                                                    <FormikInput name="nationality" labelName='Nationality' type="text" placeholder="Nationality" required={true} />
                                                    <FormikInput name="religion" type="text" labelName='Religion' placeholder="Religion" required={true} />
                                                </div>
                                                <div className='flex w-full'>
                                                    <FormikInput name="bloodGroup" type="text" labelName='Blood Group' placeholder="Blood Group" required={true} />
                                                    <FormikInput name="gradeAppliedFor" type="text" labelName='Grade Applied For' placeholder="Grade Applied For" required={true} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* permanentAddress: '', currentAddress: '', nameofSchoolAttended*/}

                                        <div className="flex flex-col w-full items-center ">
                                            <div className='w-full py-5 border border-white shadow-lg'>
                                                <div className='  text-center text-xl  mt-3'>
                                                    <p>Address:</p>
                                                </div>
                                                <div className='flex flex-col items-center '>
                                                    <div className='flex  w-full items-center'>
                                                        <FormikInput labelName='Permanent Address' name="permanentAddress" type="text" placeholder="Your permanent Address" required={true} />
                                                        <FormikInput name="currentAddress" labelName='Current Address' type="text" placeholder="Current Address" required={true} />
                                                        <FormikInput name="nameofSchoolAttended" labelName='Name of School Attend' type="text" placeholder="Name of school you attend" required={true} />
                                                    </div>
                                                    <div className='flex  w-full items-center '>
                                                        <FormikInput name="location" labelName='Location' type="text" placeholder="location" required={true} />
                                                        <FormikInput name="grade" type="text" labelName='Grade' placeholder="Grade" required={true} />
                                                        <FormikInput name="dateAttended" type="text" labelName='Date attended' placeholder="Date attended" required={true} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Parents Info */}
                                    <FormikHeaderComponent heading=' 2.STUDENT&apos;S PARENTAL INFORMATION (PARENT/ GUARDIAN)' />

                                    <div className='mb-4 w-full'>
                                        <div className='text-center uppercase text-xl  mt-3'>
                                            Parents Info
                                        </div>
                                        <div className="flex flex-wrap w-full shadow-xl border border-white ">
                                            <div className='flex w-full py-3 '>

                                                <FormikInput name='motherName' labelName='Mother Name' required={true} placeholder={'Enter Mother Name'} type='text' />
                                                <FormikInput name='motherContactNumber' labelName='Contact No:' required={true} placeholder={'Enter Contact Name'} type='number' />
                                            </div>

                                            <div className='flex w-full  py-3 '>
                                                <FormikInput name='fatherName' labelName='Father Name' required={true} placeholder={'Enter Father Name'} type='text' />
                                                <FormikInput name='fatherContactNumber' labelName='Contact No:' required={true} placeholder={'Enter Contact Number'} type='number' />
                                            </div>

                                            <div className='flex w-full  py-3 '>

                                                <FormikInput name='guardianName' labelName='Guardian Name' required={true} placeholder={'Enter Gurdian Name'} type='text' />
                                                <FormikInput name='guardianContactNumber' labelName='Contact No:' required={true} placeholder={'Enter Contact Name'} type='number' />
                                            </div>
                                        </div>

                                    </div>

                                    <FormikHeaderComponent heading='3.Emergency contact other than parents:' />

                                    <div className='flex flex-col'>
                                        <div className='text-center mx-auto uppercase text-xl  mt-3'>
                                            Emergency Contacts:
                                        </div>
                                        <div className='flex flex-col md:flex-row md:items-center flex-wrap mb-3  '>
                                            <FormikInput name='personName' labelName='Your Name' required={true} placeholder={'Your Name'} type='text' />
                                            <FormikInput name='relationshipToTheChild' labelName='your relationship To The Child' required={true} placeholder={'Your Relation to the child'} type='text' />
                                            <FormikInput name='mobileNumber' labelName='your Contact Number' required={true} placeholder={'Your contact Number'} type='number' />
                                            <FormikInput name='email' required={true} labelName='Your Email' placeholder={'Your email'} type='email' />
                                            <FormikInput name='address' required={true} labelName='Your address' placeholder={'Your address'} type='text' />
                                        </div>
                                    </div>

                                    <FormikHeaderComponent heading='4.DOCUMENTS TO BE ATTACHED (upload)' />

                                    <div className='mb-4'>
                                        <div className='flex flex-col md:flex-row w-full md:items-center flex-wrap'>
                                            <FormikInput labelName='Birth Certificate' name='birthCertificate' required={true} type='file' />
                                            <FormikInput labelName='transfer certificate' name='transferCertificate' required={true} type='file' />
                                            <FormikInput labelName='Migration' name='migration' required={true} type='file' />
                                            <FormikInput labelName='Character' name='character' required={true} type='file' />
                                            <FormikInput labelName='report Card Of Last Class' name='reportCardOfLastClass' required={true} type='file' />
                                            <FormikInput labelName='parent Citizenship' name='parentCitizenship' required={true} type='file' />

                                        </div>
                                        <div className='md:flex md:mx-auto justify-center items-center '>
                                            <FormikInput labelName='pp size Photo Of Student' name='ppPhotoOfStudent' required={true} type='file' />
                                        </div>
                                    </div>

                                    <FormikHeaderComponent heading=' 5.Transporation Facility' />

                                    <div className='flex flex-col   p-2 h-44 md:h-32 '>
                                        <div className='flex md:items-center mt-10 '>
                                            <FormikCheckBox name='hostelFacility' label="Hostel Facility" />
                                            <FormikCheckBox name='transportationService' label="Transporation Facility" />
                                        </div>
                                        <div className='  md:w-full flex items-center  md:justify-center '>
                                            {
                                                values.transportationService ?
                                                    <FormikInput name="transportationLocation" type="text" placeholder="Transportation Location" />
                                                    : <p className='text-center text-red-400 text-sm font-bold h-10 mt-10 ml-10 md:mt-10'>*If you want the transportation facility ,tick in the box !! *</p>
                                            }
                                        </div>

                                    </div>

                                </main>


                                <button disabled={!isValid} className='max-w-6xl mx-auto w-full bg-blue-700 p-3 text-white disabled:bg-blue-600' type='submit'>Submit</button>
                            </Form>
                        )

                    }
                }
            </Formik>

        </div>
    )

}

export default FormikForm
