import { planOptions } from "../App";
import tick from "../assets/images/icon-thank-you.svg"

const Step_four = ({isVisible, formData, updateForms, showComplete}) => {

  if(!isVisible)
  {
    return null
  } 

  const plan = formData.switch ?  planOptions[formData.plan].yearly : planOptions[formData.plan].monthly 

  const online_service = formData.switch ?  planOptions["online_service"].yearly : planOptions["online_service"].monthly 
  const larger_storage = formData.switch ?  planOptions["customizable_profile"].yearly : planOptions["customizable_profile"].monthly   
  const customizable_profile = formData.switch ?  planOptions["larger_storage"].yearly : planOptions["larger_storage"].monthly 

  const totals =  (formData["larger_storage"] &&  larger_storage) + 
  (formData["online_service"] && online_service) + 
  (formData["customizable_profile"] && customizable_profile) + plan

   return (  
<>
{!showComplete ? 

<div className="flow2">
  <div>
  <h2 className='margin-bottom-05'>Finishing up</h2>
  <p className='text-cool-gray fs-250'>Double-check everything looks OK before confirming.</p>
</div>

<div className="flow">
  <div className="summary-container flow bg-magnolia">
  <div className="flex justify-sb form-plan_wrapper">
      <div>
      <p className="text-marine-blue fw-700 capitalize">{formData.plan}({formData.switch ? "yearly" : "monthly"})</p>
      <button type="button" data-type="change-btn" onClick={()=>{
        updateForms({switch: !formData.switch })
        }} >
        change
        </button>
      </div>
      <p className="text-marine-blue fw-700">${plan}</p>
    </div>
    
    <div className="flow">
    {formData["online_service"] &&
     <div className="flex justify-sb" >
       <span className="text-cool-gray fs-250 capitalize">online service</span> 
       <span className="fs-250 fw-500 text-marine-blue">+${online_service}</span>
     </div>
    }
        {formData["larger_storage"] &&
     <div className="flex justify-sb" >
       <span className="text-cool-gray fs-250 capitalize">larger storage</span> 
       <span className="fs-250 fw-500 text-marine-blue">+${larger_storage}</span>
     </div>
    }
        {formData["customizable_profile"] &&
     <div className="flex justify-sb" >
       <span className="text-cool-gray fs-250 capitalize">customizable profile</span> 
       <span className="fs-250 fw-500 text-marine-blue">+${customizable_profile}</span>
     </div>
    }
    </div>
  </div>
    <div className="flex justify-sb align-center">
      <span className="capitalize text-cool-gray fs-250">total(per {formData.switch ?  "yearly" : "monthly"  } )</span> 
      <span className="fw-700 text-purplish-blue fs-400">${totals}/{formData.switch ?  "yr" : "mo"  }</span>
    </div>
  </div>
</div>
:

<div className="finalized_message">
<img src={tick} alt="" />
<h2 className='margin-bottom-05'>Thank you!</h2>
<p className='text-cool-gray fs-250'>
Thanks for confirming your subscription! We hope you have fun 
using our platform. If you ever need support, please feel free 
to email us at support@loremgaming.com. 
</p>
</div>

}

</>
  );
}
 
export default Step_four;