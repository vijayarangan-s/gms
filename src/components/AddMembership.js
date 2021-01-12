import React from 'react';
import Multistep from 'react-multistep';
import AddEnquiry from './AddEnquiry';
import AddPackage from './AddPackage';
import AddPersonalTrainer from './AddPersonalTrainer';
import Login from './Login';
// import the progress bar
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
import Membership from './Membership';
import PackageMembership from './PackageMembership';


export default function AddMembership() {

    const styleAlign = {
        position: "relative",
        top: "20px",
        minHeight: "100vh",
        background:"red",
        width : "100%"
    }

const step1Content =   <Membership/>
const step2Content =   <PackageMembership/>;
    
// setup step validators, will be called before proceeding to the next step
function step2Validator() {
    // return a boolean
  }
   
  function step3Validator() {
    // return a boolean
  }
   
  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

    return (
        <div>
            <StepProgressBar
                startingStep={0}
                onSubmit={onFormSubmit}
                buttonWrapperClass="white"
                steps={[
                    {
                        label: 'Add Membership',
                        subtitle: '50%',
                        name: 'Add Membership',
                        content: step1Content
                    },
                    {
                        label: 'Add Package',
                        subtitle: '100%',
                        name: 'step 2',
                        content: step2Content,
                    // validator: step2Validator
                    }
                ]}
                />
        </div>
    )
}
