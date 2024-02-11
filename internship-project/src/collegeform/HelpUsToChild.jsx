import { Button, Checkbox, Form, Input, Radio, Select } from "antd";
import { recommendOptions, rules, } from ".";
import { useState } from "react";

const HelpUsToChild = ({ step, setStep }) => {
    const [showLocation, setShowLocation] = useState(true)
    const onFinish = (values) => {
        setStep(step + 1)
        console.log("Success:", values);

    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const validateMessages = {
        // required: "${label} is required!",
        required: "This field is required!",
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
            <h2 className="mb-5">HELP US KNOW YOUR CHILD:</h2>

            <div className="grid grid-cols-2  p-3 font-semibold gap-5 mb-5">
                <Form.Item label="Mother Tongue (मातृभाषा):" name="motherTongue" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="Language used at home (घरमा प्रयोग हुने भाषा) : " name="langUsedInHome" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="How do you keep your child engaged at home? (तपाईं आफ्नो बच्चालाई घरमा कसरी व्यस्त राख्न सक्नुहुन्छ ?)" name="engagedChildAtHome" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="Which aspects of school does your child find most difficult? ( तपाइँको बच्चालाई विद्यालयको कुन पक्षहरू सबैभन्दा गाह्रो लाग्छ ?)" name="difficult" rules={rules}>
                    <Input />
                </Form.Item>
            </div>

            <div className="grid grid-cols-2 font-semibold gap-5 mb-5">

                <Form.Item name="childDevelopment"
                    label="Which aspects of your child development are you most pleased with?"
                    rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item label="How does your child react when he/she is upset?( तपाईंको बच्चा रिसाउँदा कस्तो प्रतिक्रिया दिन्छ? )" name="childReact" rules={rules}>
                    <Input />
                </Form.Item>

                <Form.Item name="hritSee"
                    label="In what way would you like to see HRIT WORLD SECONDARY SCHOOL influence his/her growth?"
                    rules={rules}>
                    <Input />
                </Form.Item>


                <Form.Item label="Who recommended HRIT School to you and what motivated you to apply? " name="grade" rules={rules}>
                    <Select
                        placeholder="Who Recommend Hrit"
                        className="w-full "
                        options={recommendOptions}
                    />
                </Form.Item>
            </div>


            <div className="grid grid-cols-2 font-semibold gap-5 mb-5">

                <Form.Item label="Is your child vegetarian?" name="veg" rules={rules}>

                    <Radio.Group>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                    </Radio.Group>
                </Form.Item>


                <Form.Item label="Do you require Day-Boarding facility for your child?" name="boarding" rules={rules}>

                    <Radio.Group>
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="Do your child required Transportation? Yes/No" name="transpotation" rules={rules}>

                    <Radio.Group onChange={() => setShowLocation(!showLocation)} >
                        <Radio value="Yes">Yes</Radio>
                        <Radio value="No">No</Radio>
                    </Radio.Group>
                </Form.Item>

                {!showLocation && <Form.Item name="transportationLocation"
                    label="Transportation Location"
                    rules={rules}>
                    <Input />
                </Form.Item>}
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
export default HelpUsToChild