
const Sidebar = ({totalStep,currentStep,handleNavigation,showComplete}) => {
    const stepsProperties = [
        {info:"your info" },
        {info:"select plan"} ,
        {info:"add-ons"},
        {info:"summary"}
    ]
 
    const newStepProperties = stepsProperties.slice(0, totalStep)

    const handleSidebar = (index) =>{
        if(showComplete)
        {
         if(currentStep > index)
         {
          return handleNavigation(index-currentStep)
         }
         if(index > currentStep)
         { 
             return  handleNavigation(index++)
         }
        return handleNavigation(currentStep)
        }
    }

    return ( 
<aside className="sidebar flex">
{
newStepProperties.map((i,index) =>(
<div key={index} className="sidebar_button flex" onClick={()=>{handleSidebar(index)}} >

    <div className={`sidebar_button__counter ${currentStep === index ? "active"  : ""}`}>{index+1}</div>

    <div className="fs-100 sidebar_info"> 
    <p className="uppercase text-cool-gray fw-500">step {index+1}</p>
    <p className="text-white uppercase fs-200 fw-700">{i.info}</p>
    </div>

</div>
))
}
</aside>
     );
}
 
export default Sidebar;