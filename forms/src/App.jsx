import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })
  const [alerts, setAlerts] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })
  const [FocusState, setFocusState] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phoneNumber: false,
  })

  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const handleChange = (e) =>{
    const{name,value}= e.target;
    setFormData((prevData) => ({...prevData,[name]:value}) )
  };
  const handleFocus = (name)=>{
    setFocusState((prevfocusState)=>({...prevfocusState,[name]: true}))

  }

  const handleSubmit = (e)=>{
    e.preventDefault();

    const newAlerts = {};

    if(formData.firstName === ''){
      newAlerts.firstName = 'Please Enter Your First Name .';

    }
    else{
      newAlerts.firstName ='';
    }

    if(formData.lastName === ''){
      newAlerts.lastName = 'Please Enter Your  LastName.';

    }
    else{
      newAlerts.lastName ='';
    }

    if(formData.phoneNumber === ''){
      newAlerts.phoneNumber = 'Please Enter Your Phone Number .';

    }
    else{
      newAlerts.phoneNumber ='';
    }

    if(formData.email === ''){
      newAlerts.email = 'Please Enter Your Email.';

    }
    else{
      newAlerts.email ='';
    }

    setAlerts(newAlerts)

    if(
      newAlerts.firstName === '' && newAlerts.lastName === '' && newAlerts.phoneNumber ==='' && newAlerts.email===''
    ){
      setRegistrationSuccess(true)
    }
    
  }
  return (
    <>
      <div className="App">
        {registrationSuccess && (
          <div style={{backgroundColor: 'blue', color:'white',padding:'10px',marginTop:'10px',borderRadius:'8px',textAlign:'center'}}>
            Registration Successfull !
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label>
            <input type='text' name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your First Name" onFocus={() => handleFocus('firstName')} style={{ borderColor: FocusState.firstName ? 'navy' : '#ccc' }} />
            <div className="alert">{alerts.firstName}</div>
          </label>
          <br />
          {/* For last name  */}
          <label>
            <input type='text' name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your Last Name" onFocus={() => handleFocus('lastName')} style={{ borderColor: FocusState.lastName ? 'navy' : '#ccc' }} />
            <div className="alert">{alerts.lastName}</div>
          </label>
          <br />
          {/* For email */}
          <label>
            <input type='email' name="email" value={formData.email} onChange={handleChange} placeholder="Enter your Email" onFocus={() => handleFocus('email')} style={{ borderColor: FocusState.email ? 'navy' : '#ccc' }} />
            <div className="alert">{alerts.email}</div>
          </label>
          <br />
          {/* For phone number */}
          <label>
            <input type='tel' name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your Phone Number" onFocus={() => handleFocus('phoneNumber')} style={{ borderColor: FocusState.phoneNumber ? 'navy' : '#ccc' }} />
            <div className="alert">{alerts.phoneNumber}</div>
          </label>
          <br />
          {/* submit button  */}
          <button type='submit' style={{ backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}>Register</button>
        </form>
      </div>
    </>
  )

}

export default App