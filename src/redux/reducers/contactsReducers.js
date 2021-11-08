import {ADD_CONTACT, GET_ALL_CONTACTS, EDIT_CONTACT, UPDATA_CONTACT, DELETE_CONTACT, SEACTH_FILTER} from '../actions/types'


const intialcontacts = {
    contacts: [
        {
        id:1,
        name:"Leanne Graham",
        phonenumber: "1234567890",
        email:"Sincere@april.biz"
    },
      {
          id:2,
        name:"Ervin Howell",
        phonenumber: "1234567890",
        email:"Shanna@melissa.tv"
    },
      {
          id:3,
        name:"Clementine Bauch",
        phonenumber: "1234567890",
        email:"Nathan@yesenia.net"
    }
    ],
    Editcontact:{},
}

export const contactsReducers = (state = intialcontacts,action) =>{

    switch(action.type){
        case GET_ALL_CONTACTS:
        return {state};

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

                case SEACTH_FILTER:
                    return{
                        ...state,
                       
                    }
        

        default: 
        return state

        

    }

    

}