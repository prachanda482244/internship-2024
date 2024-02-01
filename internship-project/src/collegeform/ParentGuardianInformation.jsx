import { Button, Form, Input } from 'antd'

const ParentGuardianInformation = ({ step, setStep }) => {
    const onFinish = (values) => {
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
        >
            <h2 className="mb-5">Parent Guardian Information</h2>

            <div className="grid grid-cols-2 gap-5 mb-5">
                <Form.Item label="Mother name" name="mothername">
                    <Input />
                </Form.Item>

                <Form.Item label="Contact" name="contact">
                    <Input />
                </Form.Item>

            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
                <Form.Item label="Father name" name="fathername">
                    <Input />
                </Form.Item>

                <Form.Item label="Contact" name="contact">
                    <Input />
                </Form.Item>

            </div>
            <div className="grid grid-cols-2 gap-5 mb-5">
                <Form.Item label="Gurdian name" name="guardianname">
                    <Input />
                </Form.Item>

                <Form.Item label="Contact" name="contact">
                    <Input />
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
                        onClick={() => setStep(step + 1)}
                    >
                        Next
                    </Button>
                </Form.Item>
            </div>

        </Form>
    )
}

export default ParentGuardianInformation
