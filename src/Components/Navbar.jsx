import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Navbar({ setSearch }) {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <div>
      <div className="nav">
        <div className="btn" onClick={() => {
          setSearch("nature")
          navigate('/')
        }}>Nature</div>
        <div className="btn" onClick={() => {
          setSearch("travel")
          navigate('/')
        }}>Travel</div>
        <div className="btn" onClick={() => {
          setSearch("city")
          navigate('/')
        }}>City</div>
        <div className="btn" onClick={() => {
          setSearch("car")
          navigate('/')
        }}>Car</div>
        <div className="btn" onClick={() => {
          setSearch("fashion")
          navigate('/')
        }}>Fashion</div>
        <div className="btn" onClick={() => {
          setSearch("animals")
          navigate('/')
        }}>Animals</div>
        <div className="btn" onClick={() => {
          setSearch("tecnology")
          navigate('/')
        }}>Tecnology</div>
        <div className="btn" onClick={() => {
          setSearch("tokyo")
          navigate('/')
        }}>Tokyo</div>
        <div className="btn" onClick={() => {
          setSearch("finace")
          navigate('/')
        }}>Business & Finace </div>
        <div className="btn" onClick={() => {
          setSearch("dubai")
          navigate('/')
        }}>Dubai</div>
        {
          location.pathname == '/saved' ? (<div className="btn" onClick={() => navigate('/')}>Home</div>) :
            (<div className="btn" onClick={() => navigate('/saved')}>Saved</div>)
        }
      </div>
      {
        location.pathname === '/' && (
          <form action="">
            <div className="inputDiv">
              <input type="text" onChange={(e) => {
                setSearch(e.target.value)
                e.preventDefault()
              }} />
            </div>
          </form>
        )
      }
    </div>
  );
}

export default Navbar;