import { planOptions } from "../App";

//Assets
import joystick from '../assets/images/icon-arcade.svg'
import advance from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

const Step_two = ({isVisible, formData, updateForms}) => {
  

if(!isVisible)
 {
   return null
 } 

return ( 
    
<div className='flow2'>
<div>
  <h2 className='margin-bottom-05'>Select your plan</h2>
  <p className='text-cool-gray fs-250'>You have the option of monthly or yearly billing.</p>
</div>
<div className="form-step2">
  <div className="plans-container">
  <input type="radio" 
  id="arcade" 
  name="plan" 
  className="plan-radio"
  value={"arcade"}
  checked={formData.plan === "arcade" } 
  onChange={(e)=>{updateForms({plan:e.target.value})}}
  />
    <label htmlFor="arcade" className="label-plan">
      <img src={joystick} alt="" />
     <div className='label-info-wrapper'>
      <p className='capitalize fw-700 text-marine-blue'>arcade</p>
      <div>
      <p className='fs-250 text-cool-gray'>
      ${formData.switch ? planOptions.arcade.yearly : planOptions.arcade.monthly  }
      /{ formData.switch?"yr":"mo"}
      </p>
      <p className={`fs-200 text-marine-blue ${formData.switch ? "" : "dnone"}`}>2 months free</p>
      </div>
    </div>
    </label>
</div>

<div className="plans-container">
<input 
type="radio" 
id="advance" 
name="plan" 
value={"advance"} 
className="plan-radio"
checked={formData.plan === "advance" } 
onChange={(e)=>{updateForms({plan:e.target.value})}}
/>
    <label htmlFor="advance" className="label-plan">
    <img src={advance} alt="" />
     <div className='label-info-wrapper'> 
     <p className='capitalize fw-700 text-marine-blue'>advanced</p>
     <div>
     <p className='fs-250 text-cool-gray'>
      ${formData.switch ? planOptions.advance.yearly : planOptions.advance.monthly  }
      /{ formData.switch?"yr":"mo"}
      </p>
      <p className={`fs-200 text-marine-blue ${formData.switch ? "" : "dnone"}`}>2 months free</p>
      </div>
    </div>
    </label>
</div>
<div className="plans-container">
<input 
type="radio" 
id="pro" 
name="plan" 
value={"pro"} 
className="plan-radio"
checked={formData.plan === "pro" } 
onChange={(e)=>{updateForms({plan:e.target.value})}}
/>
    <label htmlFor="pro" className="label-plan">
    <img src={pro} alt="" />
    <div className='label-info-wrapper'>
      <p className='capitalize fw-700 text-marine-blue'>pro</p>
      <div>
      <p className='fs-250 text-cool-gray'>
      ${formData.switch ? planOptions.pro.yearly : planOptions.pro.monthly  }
      /{ formData.switch?"yr":"mo"}
      </p>
      <p className={`fs-200 text-marine-blue ${formData.switch ? "" : "dnone"}`}>2 months free</p>
      </div>
    </div>
    </label>
</div>
</div>

<div className='step2-monthly-yearly-group bg-alabaster'>
<span className={`fs-250 fw-700 ${formData.switch ? "text-cool-gray" : "text-marine-blue"}`}>Monthly</span>
<label className="switch">
  <input type="checkbox" 
  value={formData.switch ? "monthly" : "yearly"} 
  className='sr-only' 
  name='switch'
  checked={formData.switch} 
  onChange={(e)=>{
    updateForms({switch:e.target.checked})
    }} />
  <span className="slider round"></span>
</label>
<span className={`fs-250 fw-700 ${formData.switch ? "text-marine-blue" : "text-cool-gray"}`}>Yearly</span>
</div>
</div>

     );
}
 
export default Step_two;