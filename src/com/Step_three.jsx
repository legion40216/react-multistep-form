import { planOptions } from "../App";

const Step_three = ({isVisible, formData, updateForms}) => {
    if(!isVisible)
 {
   return null
 } 

    return ( 
<div className="flow2">
  <div>
  <h2 className='margin-bottom-05'>Pick add-ons</h2>
  <p className='text-cool-gray fs-250'>Add-ons help enhance your gaming experience.</p>
  </div>

  
  <div className="grid">

  <label htmlFor="online_service" 
  className={`form3-checkbox-contianer ${formData.online_service ? "form3-label-checked" : ""} flex`}> 
  <div className="flex">
  <input type="checkbox" 
  value={formData.online_service} 
  id="online_service"
  name='online_service'
  checked={formData.online_service} 
  onChange={(e)=>{ updateForms({online_service: e.target.checked})}} />
  <div className="flow">
  <p className="text-marine-blue fw-700">Online service</p>
  <p className="text-cool-gray fs-250">Access to multiplayer games</p>
  </div>
  </div>
  <p className="text-purplish-blue fs-250">
  +${formData.switch ?  planOptions["online_service"].yearly : planOptions["online_service"].monthly }
  {formData.switch?"yr":"mo"}
  </p>
</label>

<label htmlFor="larger_storage" 
  className={`form3-checkbox-contianer ${formData.larger_storage ? "form3-label-checked" : ""} flex`}> 
  <div className="flex">
  <input type="checkbox" 
  id="larger_storage"
  value={formData.larger_storage} 
  name='larger_storage'
  checked={formData.larger_storage} 
  onChange={(e)=>{ updateForms({larger_storage: e.target.checked})}} />
  <div className="flow">
  <p className="text-marine-blue fw-700">Larger storage</p>
  <p className="text-cool-gray fs-250">Extra 1TB of cloud save</p>
  </div>
  </div>
  <p className="text-purplish-blue fs-250">
  +${formData.switch ? planOptions["larger_storage"].yearly : planOptions["larger_storage"].monthly  }
  {formData.switch?"yr":"mo"}
  </p>
</label>

<label htmlFor="customizable_profile" 
  className={`form3-checkbox-contianer ${formData.customizable_profile ? "form3-label-checked" : ""} flex`}> 
  <div className="flex">
  <input type="checkbox" 
  id="customizable_profile"
  value={formData.customizable_profile} 
  name='customizable_profile'
  checked={formData.customizable_profile} 
  onChange={(e)=>{ updateForms({customizable_profile: e.target.checked})}} />
  <div className="flow">
  <p className="text-marine-blue fw-700">Customizable Profile</p>
  <p className="text-cool-gray fs-250">Custom theme on your profile</p>
  </div>
  </div>
  <p className="text-purplish-blue fs-250">
  +${formData.switch ? planOptions["customizable_profile"].yearly : planOptions["customizable_profile"].monthly}
  {formData.switch?"yr":"mo"}
  </p>
</label>


</div>

</div>
     );
}
 
export default Step_three;