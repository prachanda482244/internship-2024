import { Button, DatePicker, Form, Input, Radio, Select } from "antd";

export default function PersonalInformation({ step, setStep }) {
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
            <h2 className="mb-5">Student Personal Information</h2>
            <div className="grid grid-cols-3 gap-5 mb-5">
                <Form.Item label="First Name" name="firstName">
                    <Input />
                </Form.Item>

                <Form.Item label="Middle Name" name="MiddleName">
                    <Input />
                </Form.Item>

                <Form.Item label="Last Name" name="lastName">
                    <Input />
                </Form.Item>

                <Form.Item label="Date of Birth (AD)">
                    <DatePicker className="w-full" />
                </Form.Item>

                <Form.Item label="Age" name="age">
                    <Input />
                </Form.Item>

                <Form.Item label="Gender" name="age">
                    <Radio.Group>
                        <Radio value={1}>Male</Radio>
                        <Radio value={2}>Female</Radio>
                        <Radio value={3}>Others</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Nationality" name="nationality">
                    <Input />
                </Form.Item>

                <Form.Item label="Religion" name="religion">
                    <Select
                        placeholder="Select your religion"
                        className="w-full"
                        options={[
                            {
                                value: "hinduism",
                                label: "Hinduism",
                            },
                            {
                                value: "buddhism",
                                label: "Buddhism",
                            },
                            {
                                value: "christianity",
                                label: "Christianity",
                            },
                            {
                                value: "sikhism",
                                label: "Sikhism",
                            },
                            {
                                value: "islam",
                                label: "Islam",
                            },
                            {
                                value: "others",
                                label: "Others",
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item label="Blood Group" name="bloodGroup">
                    <Select
                        placeholder="Select your blood group"
                        className="w-full"
                        options={[
                            {
                                value: "A+",
                                label: "A+",
                            },
                            {
                                value: "A-",
                                label: "A-",
                            },
                            {
                                value: "B+",
                                label: "B+",
                            },
                            {
                                value: "B-",
                                label: "B-",
                            },
                            {
                                value: "AB+",
                                label: "AB+",
                            },
                            {
                                value: "AB-",
                                label: "AB-",
                            },
                            {
                                value: "O+",
                                label: "O+",
                            },
                            {
                                value: "O-",
                                label: "O-",
                            },
                        ]}
                    />
                </Form.Item>

                <Form.Item label="Academic Programs" name="academicPrograms">
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

                <Form.Item label="Current Address" name="currentAddress">
                    <Input />
                </Form.Item>

                <Form.Item label="Permanent Address" name="permanentAddress">
                    <Input />
                </Form.Item>
            </div>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    onClick={() => setStep(step + 1)}
                >
                    Next
                </Button>
            </Form.Item>
        </Form>
    );
}

