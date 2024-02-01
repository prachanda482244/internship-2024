import { ConfigProvider, Steps } from "antd";
import { useState } from "react";
import EducationalInformation from "./EducationalInformation";
import PersonalInformation from "./PersonalInformation";
import ParentGuardianInformation from "./ParentGuardianInformation";
import Attachment from './Attachment'
import Payment from './Payment'

export default function OnlineAddmissionForm() {
  const [step, setStep] = useState(0);

  return (
    <section>
      <div className="container">
        <ConfigProvider
          theme={{
            components: {
              Form: {
                itemMarginBottom: 0,
              },
              Steps: {
                finishIconBorderColor: "#4caf50",
              },
            },
          }}
        >
          <div className="grid grid-cols-4 gap-5">
            <Steps
              direction="vertical"
              current={step}
              items={[
                {
                  title: "Personal Information",
                },
                {
                  title: "Educational Information",
                },
                {
                  title: "Parent/Guardian Information",
                },
                {
                  title: "Attachment",
                },
                {
                  title: "Payment",
                },
              ]}
            />

            <div className="border col-span-3 p-5 rounded-xl shadow-lg bg-white">
              {step === 0 && (
                <PersonalInformation step={step} setStep={setStep} />
              )}
              {step === 1 && (
                <EducationalInformation step={step} setStep={setStep} />
              )}
              {step === 2 && (
                <ParentGuardianInformation step={step} setStep={setStep} />
              )}
              {step === 3 && (
                <Attachment step={step} setStep={setStep} />
              )}
              {step === 4 && (
                <Payment step={step} setStep={setStep} />
              )}
            </div>
          </div>
        </ConfigProvider>
      </div>
    </section>
  );
}
