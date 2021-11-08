import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/actions/contacts-actions'
import shortid from 'shortid';
import { useHistory } from 'react-router';
const AddContact = () => {

let history = useHistory()

const dispacth = useDispatch()

    const [contactValues, setcontactValues] = useState({
        name:'',
        phonenumber:'',
        email:''
    })
    const {name, phonenumber, email} = contactValues;


    const handleInputChange = (e) =>{
     setcontactValues({
      ...contactValues,id:shortid.generate(),
      [e.target.name]: e.target.value
    });
    }

    const createContact = (e) =>{
        e.preventDefault();
        if(name === '' && phonenumber === '' && email === ''){
           alert('Please Enter Values')
              return false
          
        }

        else{
       dispacth(addContact(contactValues))
        history.push('/')
            
        }

       
    }

    return (
        <div className="container mt-5">
           <div className="d-flex justify-content-between">
              <div><h2>Add Contact</h2></div>

                  <div className="">
                       <Link to="/" className="btn btn-primary w-100">Back to Home</Link>
                  </div>
               
           </div>


           <div className="row align-items-center">
            <div className="col-md-6">
               
               <img src="https://timdebordplumbing.com/wp-content/uploads/2020/01/Contact-us-banner.png" className="img-fluid" alt=""/>

            </div>
               <div className="col-md-6">
                   <div className="card mt-4 ">
  <div className="card-header">
    Add Contact
  </div>
  <div className="card-body">
   <form onSubmit={(e) => createContact(e)}>

  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" name="name" value={name} onChange={(e) => handleInputChange(e)} className="form-control" />
  </div>

    <div className="mb-3">
    <label htmlFor="phonenumber" className="form-label">Phone Number</label>
    <input type="text" name="phonenumber" value={phonenumber} onChange={(e) => handleInputChange(e)}  className="form-control" />
  </div>

  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email Id</label>
    <input type="email" name="email" value={email} onChange={(e) => handleInputChange(e)} className="form-control"/>
  </div>

 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>
</div>
               </div>
           </div>
        </div>
    )
}

export default AddContact
