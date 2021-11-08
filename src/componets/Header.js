import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { searchFilter } from '../redux/actions/contacts-actions'

import { useDispatch } from 'react-redux'

const Header = () => {

    const [searchValue, setsearchValue] = useState('')

const contact = useSelector((state) => state.contacts)

const dispacth = useDispatch();

    const searchHandleChange = (e) =>{
        setsearchValue(e.target.value);
        console.log(searchValue)
        dispacth(searchFilter(searchValue))
}

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <Link className="navbar-brand" to="/">
        Contacts App
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
       

       <form className="d-flex">
        <input onChange={(e) => searchHandleChange(e)} value={searchValue} name="search" className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    
    </div>
  </div>
</nav>
    )
}

export default Header
