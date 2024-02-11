import { Button, Form, Input } from 'antd'
import { rules, validateMessages } from '.';

const Attachment = ({ step, setStep }) => {
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
            size="large"
            validateMessages={validateMessages}
        >
            <h2 className="mb-3">Attachment:</h2>

            <div className="grid grid-cols-2 gap-5 mb-3">
                <Form.Item label="Birth Certificate" name="birthCertificate" rules={rules}>
                    <Input type='file' accept='image/*' />
                </Form.Item>

                <Form.Item label="Transfer Certificate" name="transferCertificate" rules={rules}>
                    <Input type='file' accept='image/*' />
                </Form.Item>

            </div>

            <div className="grid grid-cols-2 gap-5 mb-3" >
                <Form.Item label="Migration" name="Migration" rules={rules}>
                    <Input type='file' accept='image/*' />
                </Form.Item>
                <Form.Item label="Character" name="Character" rules={rules} >
                    <Input type='file' accept='image/*' />
                </Form.Item>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-3">

                <Form.Item label="Report card of last class" name="Reportcardoflastclass" rules={rules} >
                    <Input type='file' accept='image/*' />
                </Form.Item>

                <Form.Item label="Parent Citizenship" name="ParentCitizenship" rules={rules} >
                    <Input type='file' accept='image/*' />
                </Form.Item>
            </div>
            <div className="grid grid-cols-1  gap-5 mb-3">

                <Form.Item label="PP size photo of student" name="ppPhotoOfStudent" rules={rules} >
                    <Input type='file' accept='image/*' />
                </Form.Item>
            </div>

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

export default Attachment
