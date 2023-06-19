import { useState } from 'react'
import Sidebar from './com/Sidebar'

import Step_one from './com/Step_one'
import Step_two from './com/Step_two';
import Step_three from './com/Step_three';
import Step_four from './com/Step_four';

export const planOptions = {
  arcade:{
    monthly:9,
    yearly:12
  },
  advance:{
    monthly:12,
    yearly:120
  },
  pro:{
    monthly:15,
    yearly:150,
  },
  online_service:{
    monthly:1,
    yearly:10,
  },
  larger_storage:{
    monthly:2,
    yearly:20,
  },
  customizable_profile:{
    monthly:3,
    yearly:20,
  }
}


function App() {
  const [currentStep, setCurrentStep] = useState(0); // Track the current step
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    plan:"arcade",
    online_service: false,
    larger_storage: false,
    customizable_profile: false,
    switch:false,

}); // Store form data


const [errors, setErrors] = useState({errorName:"", errorEmail:"", errorPhone:""})
const [showComplete, setShowComplete] = useState(false)
const stepComponents = [Step_one,Step_two,Step_three,Step_four] // Add more step components here

const updateForms = (change) => {
    setFormData((prevData)=>({...prevData, ...change}))
}

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    // Handle form submission logic using the complete form data
    setShowComplete(true)
    console.log("send")
  }

  const handleNavigation = (direction) =>{
 
    const checkValidity = validateCurrentStep()
    if (!checkValidity) {
      return; // Return without navigating if current step validation fails
    }
   
      setCurrentStep((prevStep)=>{
        const nextStep = prevStep + direction
        if(direction > prevStep)
        {
          return direction
        }
        if(nextStep >= 0 && nextStep < stepComponents.length){
          return nextStep
        }
        return prevStep
      })
  }

  const validateCurrentStep = () => {
    let isValid = true
    if (currentStep === 0 && formData.name === '') {
     setErrors((prevErrors)=>({ ...prevErrors, errorName:'Please fill in all required fields.'}))
     isValid = false
    }
    else{
      setErrors((prevErrors)=>({ ...prevErrors, errorName:''}))    
    }

    if (currentStep === 0 && formData.email === '') {
      setErrors((prevErrors)=>({ ...prevErrors, errorEmail:'Please fill in all required fields.'}))
      isValid = false
     }
     else{
       setErrors((prevErrors)=>({ ...prevErrors, errorEmail:''}))    
     }

     if (currentStep === 0 && formData.phone === '') {
      setErrors((prevErrors)=>({ ...prevErrors, errorPhone:'Please fill in all required fields.'}))
      isValid = false
     }
     else{
       setErrors((prevErrors)=>({ ...prevErrors, errorPhone:''}))    
     }

    if(formData.name && formData.email && formData.phone  > "")
    {
      isValid = true
    }

    return isValid
  }

return (
<main>
<form  onSubmit={handleFormSubmit} className='main-form'>
<Sidebar 
totalStep={stepComponents.length} 
currentStep={currentStep} 
handleNavigation={handleNavigation}
showComplete = {showComplete}
/>

<div className={`mutlistep-content ${showComplete ? "grid-center" : ""}`}>
  <div className='muti-wrapper'>
    {
stepComponents.map((StepComponent, index) => (
  <StepComponent
    key={index}
    isVisible={index === currentStep}
    formData = {formData}
    errors = {errors}
    updateForms = {updateForms}
    showComplete = {showComplete}
  />
))
}
</div>
</div>

{!showComplete &&
<div className='navigation'>
<button
type='button'  
data-type='secondary-btn' 
className={`${currentStep === 0 ? "dnone" : ""}`} 
onClick={()=>{handleNavigation(-1)}}>
go back
</button>

{currentStep === stepComponents.length - 1 && (
<button data-type='primary-btn'  className='button-confirm margin-left-auto' type='submit'>
confirm
</button>
  )}

{currentStep < stepComponents.length - 1 && (
<button
type='button'
data-type='primary-btn' 
onClick={()=>{handleNavigation(1)}}
className="margin-left-auto">
next step
</button>
)}
</div>
}

</form>
</main>
)
}

export default App
