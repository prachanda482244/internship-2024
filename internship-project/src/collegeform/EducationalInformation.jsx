EducationalInformation.js
import { Button, DatePicker, Form, Input } from "antd";

export default function EducationalInformation({ step, setStep }) {
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
            <h2 className="mb-5">Educational Information</h2>
            <Form.Item
                label="Name of previous school attended"
                name="lastSchoolAttended"
            >
                <Input />
            </Form.Item>
            <div className="grid grid-cols-2 gap-5 mb-5">
                <Form.Item label="Location" name="location">
                    <Input />
                </Form.Item>

                <Form.Item label="Grade" name="grade">
                    <Input />
                </Form.Item>

                <Form.Item label="Date of attended (AD)">
                    <DatePicker className="w-full" />
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
    );
}
