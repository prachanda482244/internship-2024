import { Button, Form } from 'antd'

const Payment = ({ step, setStep }) => {
    return (
        <div>
            payment
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
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </div>
    )
}

export default Payment
