import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteContact} from '../redux/actions/contacts-actions'
import { useDispatch } from 'react-redux'

const Contacts = () => {

    const contactslist = useSelector( state => state.contacts)

const dispacth = useDispatch()

const removeContact =  (id) =>{
dispacth(deleteContact(id))
}

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between">
                <div>
                    <h2>All Contacts</h2>
                </div>


                <div>
                   <Link to="/contacts/add" className="btn btn-primary">Add Contact</Link>
                </div>


            </div>


            <div className="row">
                <div className="col-md-12">
                    <table className="table  mt-5">
  <thead>
    <tr>
      <th>#S.No</th>
      <th>Name</th>
      <th>Phone Number</th>
      <th>Email Id</th>
       <th>Actions</th>
    </tr>
  </thead>
  <tbody>

  {
      contactslist.length> 0 && contactslist.map((contact, index) =>{

          return(
              <tr key={index}>
      <th>{index+1}</th>
      <td>
      <span className="avathar">
          {contact.name.substring(0,1)}
          
      </span>
       {contact.name}</td>
      <td>{contact.phonenumber}</td>
      <td>{contact.email}</td>
       <td className="actions-btns">
     
          <Link to={`/contacts/edit/${index}`}  className=" btn"><i className="bi bi-pencil-fill"></i></Link>
           <Link to="#" className="btn" onClick={(id) => removeContact(index)}><i className="bi bi-trash-fill"></i></Link>
       </td>
    </tr>
          )

      })

      
  }

  {
       contactslist.length === 0 && (
          
          <tr className="text-center">
             <td colSpan="5" className="border-0 p-5">
                   <h3 className="text-danger">No Data Found</h3>
             </td>
          </tr>
       )
  }
   
    
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    )
}

export default Contacts
