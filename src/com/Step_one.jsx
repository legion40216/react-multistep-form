

const Step_one = ({isVisible , formData, updateForms, errors }) => {
if(!isVisible)
   {
   return null
 } 

return ( 
<div className='flow2'>
  <div>
  <h2 className='margin-bottom-05'>Personal info</h2>
  <p className='text-cool-gray fs-250'>Please provide your name, email address, and phone number.</p>
  </div>
<div className='form-step1 flow'>
  <div>
    <div className="flex justify-sb">
    <label htmlFor="name">Name</label>
    {errors.errorName && <p className="fs-200 fw-700 text-error ">{errors.errorName}</p>}
    </div>
    <input
    className={`form1-inputs ${errors.errorName ? "input-error" : ""}`} 
    type="text" 
    id= "name"
    name='name'
    value={formData.name} 
    onChange={(e)=>{updateForms({name:e.target.value})}}
    autoFocus
    autoComplete='name'
    placeholder='e.g. Stephen King'
    required/>
  </div>

  <div>
    <div className="flex justify-sb">
    <label htmlFor="email">Email Address</label>
    {errors.errorEmail && <p className="fs-200 fw-700 text-error ">{errors.errorEmail}</p>}
    </div>
    <input
    className={`form1-inputs ${errors.errorEmail ? "input-error" : ""}`} 
    type="email" 
    id= "email"
    name='email'
    value={formData.email}
    onChange={(e)=>{updateForms({email:e.target.value})}}
    autoComplete='email'
    placeholder='e.g. stephenking@lorem.com'
    required
   />
  </div>

  <div>
    <div className="flex justify-sb">
    <label htmlFor="phone">Phone Number</label>
    {errors.errorPhone && <p className="fs-200 fw-700 text-error ">{errors.errorPhone}</p>}
    </div>
    <input
    className={`form1-inputs ${errors.errorPhone ? "input-error" : ""}`} 
    type="tel"
    id = "phone" 
    name="phone"
    placeholder='e.g. +1 234 567 890'
    value={formData.phone}
    onChange={(e)=>{updateForms({phone:e.target.value})}}
    required
    />
  </div>
</div>

</div>
     );
}
 
export default Step_one;