import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import { bloodGroupOptions, religionOptions, rules, validateMessages } from "./index";

export default function PersonalInformation({ step, setStep }) {

    const onFinish = (values) => {
        setStep(step + 1);
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
            <h2 className="mb-5">Student Personal Information</h2>

            <div className="grid grid-cols-3 gap-5 mb-5">
                <Form.Item label="First Name" name="firstName" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="Middle Name" name="MiddleName">
                    <Input />
                </Form.Item>

                <Form.Item label="Last Name" name="lastName" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="Date of Birth (AD)" name="D" rules={rules}>
                    <DatePicker className="w-full" />
                </Form.Item>

                <Form.Item label="Age" name="age" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="Gender" name="gender" rules={rules}>
                    <Radio.Group>
                        <Radio value={"male"} >Male</Radio>
                        <Radio value={"female"}>Female</Radio>
                        <Radio value={"other"}>Others</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Nationality" name="nationality" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="Religion" name="religion" rules={rules}>
                    <Select
                        placeholder="Select your religion"
                        className="w-full"
                        options={religionOptions}
                    />
                </Form.Item>

                <Form.Item label="Blood Group" name="bloodGroup" rules={rules}>
                    <Select
                        placeholder="Select your blood group"
                        className="w-full"
                        options={bloodGroupOptions}
                    />
                </Form.Item>

                <Form.Item label="Academic Programs" name="academicPrograms" rules={rules}>
                    <Select
                        placeholder="Select academic programs"
                        className="w-full"
                        options={[
                            {
                                value: "Science",
                                label: "Science",
                            },
                            {
                                value: "management",
                                label: "Management",
                            },
                            {
                                value: "humanities",
                                label: "Humanities",
                            },
                            {
                                value: "fineArts",
                                label: "Fine Arts",
                            },
                            {
                                value: "law",
                                label: "Law",
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item label="Current Address" name="currentAddress" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="Permanent Address" name="permanentAddress" rules={rules}>
                    <Input />
                </Form.Item>
            </div>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Next
                </Button>
            </Form.Item>
        </Form>
    );
}

