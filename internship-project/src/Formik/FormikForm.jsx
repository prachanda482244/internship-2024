import { Formik, Form } from 'formik'
import FormikInput from './FormikInput'
import { validationSchema } from './schema/formikSchema'
import FormikCheckBox from './FormikCheckBox'
const FormikForm = () => {
    const initialValues = {
        firstName: '',
        middleName: '',
        lastName: '',
        dobInAdDay: '',
        dobInAdMonth: '',
        dobInAdYear: '',
        dobInBsDay: '',
        dobInBsMonth: '',
        dobInBsYear: '',

        age: 0,
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
        MotherContactNumber: '',
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
        console.log(other, 'other')
        other.resetForm()
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={FormSubmit}
            >
                {
                    ({ values, isValid }) => {
                        console.log(values);
                        return (

                            <Form className='flex flex-col border-2 bg-gray-300 border-red-800 mx-auto mt-10 gap-4 p-4'>


                                <main className='flex flex-col justify-center border border-black p-3'>
                                    <div className="flex gap-1  justify-between items-center ">
                                        <h1 className='py-3  px-10 bg-red-400 uppercase text-nowrap text-white font-semibold'>1.CHILD’S personal Information: </h1>
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

                                    <div className="inputs flex flex-col items-center justify gap-1">

                                        {/* Name field */}
                                        <div className="name flex items-center justify-start gap-1">

                                            <p className='font-bold mb-5  text-right text-sm'>
                                                Name<br />
                                                (English)
                                            </p>

                                            <FormikInput name="firstName" type="text" placeholder="First" required={true} />
                                            <FormikInput name="middleName" type="text" placeholder="Middle" />
                                            <FormikInput name="lastName" type="text" placeholder="Last" required={true} />
                                        </div>

                                        {/* DOB FIELD */}
                                        <div className="name flex items-center justify-start gap-16">
                                            <div className='flex items-center '>
                                                <p className='font-bold mb-5  mr-2 text-right text-sm'>
                                                    Date of<br />
                                                    Birth BS
                                                </p>

                                                <FormikInput name="dobInBsDay" w={32} type="text" placeholder="Day" required={true} />
                                                <FormikInput name="dobInBsMonth" w={40} type="text" placeholder="Month" required={true} />
                                                <FormikInput name="dobInBsYear" w={52} type="text" placeholder="Year" required={true} />
                                            </div>
                                            <div className='flex items-center'>

                                                <p className='font-bold mb-5  text-right text-sm'>
                                                    Date of<br />
                                                    Birth AD
                                                </p>

                                                <FormikInput name="dobInAdDay" w={32} type="text" placeholder="Day" required={true} />
                                                <FormikInput name="dobInAdMonth" w={40} type="text" placeholder="Month" required={true} />
                                                <FormikInput name="dobInAdYear" w={52} type="text" placeholder="Year" required={true} />
                                            </div>
                                        </div>


                                        {/* GENDER AND NATIONALITY FIELD */}
                                        <div className="name flex items-center justify-between mr-40 ">
                                            <div className='flex items-center'>
                                                <p className='font-bold mb-5  text-right text-sm'>
                                                    Gender
                                                </p>

                                                <FormikInput name="gender" type="text" placeholder="Gender" required={true} />

                                            </div>
                                            <div className='flex items-center'>

                                                <p className='font-bold mb-5  text-right text-sm'>
                                                    Nationality
                                                </p>

                                                <FormikInput name="nationality" type="text" placeholder="Nationality" required={true} />

                                            </div>
                                        </div>


                                        {/* RELIGION AND BLOOD GROUP */}
                                        <div className="name flex items-center justify-center  gap-2">
                                            <div className='flex items-center'>
                                                <p className='font-bold mb-5 text-right text-sm'>
                                                    Religion
                                                </p>

                                                <FormikInput name="religion" w={80} type="text" placeholder="Religion" required={true} />

                                            </div>
                                            <div className='flex items-center'>

                                                <p className='font-bold mb-5  text-right text-sm'>
                                                    Blood Group
                                                </p>

                                                <FormikInput name="bloodGroup" w={80} type="text" placeholder="Blood Group" required={true} />

                                            </div>

                                            <div className='flex items-center'>

                                                <p className='font-bold mb-5  text-right text-sm'>
                                                    Specify Grade
                                                </p>

                                                <FormikInput name="gradeAppliedFor" w={80} type="text" placeholder="Grade Applied For" required={true} />

                                            </div>

                                        </div>

                                        {/* permanentAddress: '', currentAddress: '', nameofSchoolAttended*/}

                                        <div className="name flex items-center justify-center  gap-2">
                                            <div className='flex items-center'>
                                                <p className='font-bold mb-5 text-right text-sm'>
                                                    Permanent <br /> Address
                                                </p>

                                                <FormikInput name="permanentAddress" w={80} type="text" placeholder="Your permanent Address" required={true} />

                                            </div>
                                            <div className='flex items-center'>

                                                <p className='font-bold mb-5  text-right text-sm'>
                                                    Current  <br />Address
                                                </p>

                                                <FormikInput name="currentAddress" w={80} type="text" placeholder="Blood Group" required={true} />

                                            </div>

                                            <div className='flex items-center'>

                                                <p className='font-bold mb-5  text-right text-sm'>
                                                    Name of school <br /> atttend
                                                </p>

                                                <FormikInput name="nameofSchoolAttended" w={80} type="text" placeholder="Name of school you attend" required={true} />

                                            </div>

                                        </div>

                                        {/* : '',location: '',grade: '',dateAttended: '', */}
                                        <div>
                                            <div className='flex flex-col justify-center  '>
                                                <div className='flex justify-center items-center '>

                                                    <div className='flex  justify-center flex-col'>
                                                        <h2 className=' font-bold ml-2'>Location:-</h2>
                                                        <FormikInput name="location" type="text" placeholder="location" required={true} />
                                                    </div>

                                                    <div>
                                                        <h2 className=' font-bold ml-2'>Grade:-</h2>

                                                        <FormikInput name="grade" type="text" placeholder="Grade" required={true} />
                                                    </div>

                                                    <div>
                                                        <h2 className=' font-bold ml-2'>Date Attended:-</h2>

                                                        <FormikInput name="dateAttended" type="text" placeholder="Date attended" required={true} />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* Parents Info */}
                                    <div>
                                        <h1 className='py-3  px-10 bg-red-400 uppercase text-nowrap text-white font-semibold'>
                                            2.STUDENT&apos;S PARENTAL INFORMATION (PARENT/ GUARDIAN)
                                        </h1>
                                    </div>

                                    <div className="flex flex-col  ">
                                        <div className='flex flex-col '>
                                            <h1 className='py-3  capitalize  text-nowrap  font-semibold text-xl'>Mother Info:-</h1>
                                            <div className="h-1  bg-slate-500 border"></div>
                                            <div className='flex  items-center  justify-center gap-x-40'>
                                                <div className='flex flex-col '>

                                                    <h1 className='font-bold ml-3'>Name:</h1>
                                                    <FormikInput name='motherName' required={true} placeholder={'Enter Mother Name'} type='text' />
                                                </div>
                                                <div className='flex flex-col '>

                                                    <h1 className='font-bold ml-3'>Contact Number:</h1>
                                                    <FormikInput name='MotherContactNumber' required={true} placeholder={'Enter Contact Name'} type='number' />
                                                </div>
                                            </div>

                                        </div>

                                        <div className='flex flex-col '>
                                            <h1 className='py-3  capitalize  text-nowrap  font-semibold text-xl'>Father Info:-</h1>
                                            <div className="h-1 bg-slate-500 border"></div>
                                            <div className='flex  items-center  justify-center gap-x-40'>
                                                <div className='flex flex-col '>

                                                    <h1 className='font-bold ml-3'>Name:</h1>
                                                    <FormikInput name='fatherName' required={true} placeholder={'Enter Father Name'} type='text' />
                                                </div>
                                                <div className='flex flex-col '>

                                                    <h1 className='font-bold ml-3'>Contact Number:</h1>
                                                    <FormikInput name='fatherContactNumber' required={true} placeholder={'Enter Contact Number'} type='number' />
                                                </div>
                                            </div>

                                        </div>

                                        <div className='flex flex-col '>
                                            <h1 className='py-3  capitalize  text-nowrap  font-semibold text-xl'>Guardian Info:-</h1>
                                            <div className="h-1  bg-slate-500 border"></div>
                                            <div className='flex  items-center  justify-center gap-x-40'>
                                                <div className='flex flex-col '>

                                                    <h1 className='font-bold ml-3'>Name:</h1>
                                                    <FormikInput name='guardianName' required={true} placeholder={'Enter Gurdian Name'} type='text' />
                                                </div>
                                                <div className='flex flex-col '>

                                                    <h1 className='font-bold ml-3'>Contact Number:</h1>
                                                    <FormikInput name='guardianContactNumber' required={true} placeholder={'Enter Contact Name'} type='number' />
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div>
                                        <h1 className='py-3  px-10 bg-red-400 uppercase text-nowrap text-white font-semibold'>
                                            3.Emergency contact other than parents:
                                        </h1>
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex items-center'>
                                            <FormikInput name='personName' required={true} placeholder={'Your Name'} type='text' />
                                            <FormikInput name='relationshipToTheChild' required={true} placeholder={'Your Relation to the child'} type='text' />
                                            <FormikInput name='mobileNumber' required={true} placeholder={'Your contact Number'} type='number' />
                                        </div>
                                        <div className='flex justify-around'>
                                            <FormikInput name='email' required={true} placeholder={'Your email'} type='email' />
                                            <FormikInput name='address' required={true} placeholder={'Your address'} type='text' />

                                        </div>

                                    </div>

                                    <div>
                                        <h1 className='py-3  px-10 bg-red-400 uppercase text-nowrap text-white font-semibold'>
                                            4.DOCUMENTS TO BE ATTACHED (upload)

                                        </h1>
                                    </div>

                                    <div className='flex flex-col items-center gap-2 m-2'>
                                        <div className='flex items-center gap-2 flex-wrap'>
                                            <div className='flex -items-center flex-col border border-slate-900 rounded-lg tetext-gray-700 p-2'>
                                                <label className='font-semibold uppercase ml-2'>Birth Certificate:-</label>
                                                <FormikInput name='birthCertificate' required={true} type='file' />
                                            </div>
                                            <div className='flex -items-center flex-col border border-slate-900 rounded-lg text-gray-700 p-2'>
                                                <label className='font-semibold uppercase ml-2'>Transfer Certificate:-</label>
                                                <FormikInput name='transferCertificate' required={true} type='file' />
                                            </div>

                                            <div className='flex -items-center flex-col border border-slate-900 rounded-lg text-gray-700 p-2'>
                                                <label className='font-semibold uppercase ml-2'>Migration Certificate:-</label>
                                                <FormikInput name='migration' required={true} type='file' />
                                            </div>


                                            <div className='flex -items-center flex-col border border-slate-900 rounded-lg text-gray-700 p-2'>
                                                <label className='font-semibold uppercase ml-2'>character Certificate:-</label>
                                                <FormikInput name='character' required={true} type='file' />
                                            </div>
                                            <div className='flex -items-center flex-col border border-slate-900 rounded-lg text-gray-700 p-2'>
                                                <label className='font-semibold uppercase ml-2'>report Card Of Last Class :-</label>
                                                <FormikInput name='reportCardOfLastClass' required={true} type='file' />
                                            </div>

                                            <div className='flex -items-center flex-col border border-slate-900 rounded-lg text-gray-700 p-2'>
                                                <label className='font-semibold uppercase ml-2'>parent Citizenship:-</label>
                                                <FormikInput name='parentCitizenship' required={true} type='file' />
                                            </div>

                                            <div className='mx-auto'>
                                                <div className='flex -items-center flex-col border border-slate-900 rounded-lg text-gray-700 p-2'>
                                                    <label className='font-semibold uppercase ml-2'>Passport Size Photo of student:-</label>
                                                    <FormikInput name='ppPhotoOfStudent' required={true} type='file' />
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <div>
                                        <h1 className='py-3  px-10 bg-red-400 uppercase text-nowrap text-white font-semibold'>
                                            5.Transporation Facility
                                        </h1>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <FormikCheckBox name='hostelFacility' label="Hostel Facility" />
                                        <FormikCheckBox name='transportationService' label="Transporation Facility" />
                                        <div className='mt-6'>
                                            {
                                                values.transportationService ?
                                                    <FormikInput name="transportationLocation" type="text" placeholder="Location" required={true} />
                                                    : null

                                            }
                                        </div>

                                    </div>

                                </main>


                                <button disabled={!isValid} className='bg-blue-700 p-3 text-white disabled:bg-blue-600' type='submit'>Submit</button>

                            </Form>
                        )

                    }
                }
            </Formik>

        </div>
    )
}

export default FormikForm
