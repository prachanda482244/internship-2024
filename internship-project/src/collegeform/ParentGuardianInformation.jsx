import { Button, Form, Input } from 'antd'
import { parentsData, rules, validateMessages } from '.';

const ParentGuardianInformation = ({ step, setStep }) => {

    const onFinish = (values) => {
        setStep(step + 1)
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };


    return (
        <Form
            layout="vertical"
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
            size="large"
        >
            <h2 className="mb-5 font-semibold text-3xl">Parent Guardian Information</h2>

            {
                parentsData?.map((info) => (

                    <div key={info.label} className="grid grid-cols-2  gap-2 mb-5">
                        <Form.Item className='font-semibold' label={info.label} name={info.name} rules={rules}>
                            <Input />
                        </Form.Item>

                        <Form.Item className='font-semibold' label="Qualification" name={info.qualificationName} rules={rules}>
                            <Input />
                        </Form.Item>

                        {/* <Form.Item label="Organization" name="Organization" rules={rules}>
                    <Input />
                </Form.Item> */}

                        {/* <Form.Item label="Designation" name="Designation" rules={rules}>
                    <Input />
                </Form.Item> */}

                        <Form.Item className='font-semibold' label="Email" name={info.emailName} rules={rules}>
                            <Input type='email' />
                        </Form.Item>

                        <Form.Item className='font-semibold' label="Contact" name={info.contactName} rules={rules}>
                            <Input />
                        </Form.Item>
                    </div>
                ))

            }

            <div className="flex justify-between">
                <Form.Item>
                    <Button htmlType="submit" onClick={() => setStep(step - 1)}>
                        Back
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        Next
                    </Button>
                </Form.Item>
            </div>

        </Form>
    )
}

export default ParentGuardianInformation
