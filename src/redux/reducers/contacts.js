import {ADD_CONTACT, GET_ALL_CONTACTS, EDIT_CONTACT, UPDATA_CONTACT, DELETE_CONTACT} from '../actions/types'


const intialcontacts = {
    contacts: [
        {
        id:1,
        name:"Ganesh Gujjeti",
        phonenumber: "7506250294",
        email:"gujjeti97@gmail.com"
    },
      {
          id:2,
        name:"Basheer Mohammad",
        phonenumber: "1234567890",
        email:"Basheer@gmail.com"
    },
      {
          id:3,
        name:"Srikant Beerkula",
        phonenumber: "0987654321",
        email:"Srikant@gmail.com"
    }
    ],
    Editcontact:{},
}

export const contactsReducers = (state = intialcontacts,action) =>{

    switch(action.type){
        case GET_ALL_CONTACTS:
        return {...state};

        case ADD_CONTACT:
        return{
            ...state,
           
            contacts:[action.payload, ...state.contacts]
        }

        case EDIT_CONTACT:
        return{...state, Editcontact:{...state.contacts[action.payload], id:+action.payload}
        }

  
          
        case UPDATA_CONTACT:
          //  contacts[action.payload.id] = action.payload
           return{
                ...state,
               contacts:state.contacts.map((contact, index) => index === action.payload.id ? action.payload : contact
              )
            }

            case DELETE_CONTACT:
                return{
                   ...state,
                   contacts:state.contacts.filter((contact, index) => {
                       return action.payload !== index
                   })
                }
        

        default: 
        return state

        

    }

    

}