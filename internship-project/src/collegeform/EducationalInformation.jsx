EducationalInformation.js
import { Button, DatePicker, Form, Input } from "antd";
import { rules, validateMessages } from ".";

export default function EducationalInformation({ step, setStep }) {
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
            <h2 className="mb-5">Educational Information</h2>
            <Form.Item
                label="Name of previous school attended"
                name="lastSchoolAttended"
                rules={rules}
            >
                <Input />
            </Form.Item>
            <div className="grid grid-cols-2 gap-5 mb-5">
                <Form.Item label="Location" name="location" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="Class" name="class" rules={rules}>
                    <Input />
                </Form.Item>


                <Form.Item label="Year of study (AD)" name="DobInAd" rules={rules}>
                    <DatePicker className="w-full" />
                </Form.Item>

                <Form.Item label="Grade" name="grade" rules={rules}>
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
                    >
                        Next
                    </Button>
                </Form.Item>
            </div>

        </Form>
    );
}
