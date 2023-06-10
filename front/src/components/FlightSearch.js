import React, { useState } from 'react'
import '../App.css'

const FlightSearch = () => {
  const [source, setSource] = useState("");
  const [destinaition, setDestinaition] = useState("");
  const [date, setDate] = useState(1);
  const [flightResult, setResult] = useState([]);
  const [notfound, setNotFound] = useState();
  const handleSearch = async (e) => {
    e.preventDefault();
    document.getElementById('search').style.display = "none";
    const search = { source, destinaition, date };
    try {
      //**** it is http, not https throgh error **/
      const response = await fetch("https://flight-search-mern.onrender.com", {
        method: 'POST',
        body: JSON.stringify(search),
        headers: {
          "Content-type": "application/json"
        }
      });
      const result = await response.json();
      if (response.ok) {
        setResult(result);
        setNotFound("");
      }
      if (Number(result) === 0) {
        setNotFound("No Flight Available");
        setResult([]);
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <div className='container d-flex justify-content-center flight'>
        <div className="forms p-4" id='search'>
          <h1>Search Here</h1>
          <hr />
          <p className='pls'>Please use small letters only..!</p>
          <form onSubmit={handleSearch}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Source</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={source} onChange={(e) => setSource(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Destinaition
              </label>
              <input type="text" className="form-control" id="exampleInputPassword1" value={destinaition} onChange={(e) => setDestinaition(e.target.value)} required />
            </div>
            <div className="mb-3">
              <p htmlFor="dates" className="form-label">
                Date
              </p>
              <input type="number" className="form-control d-inline ml-2" id="dates" value={date} onChange={(e) => setDate(e.target.value)} required /> <span>  April 2023</span>
            </div>
            <button type="submit" className="btn btn-success mt-4">Submit</button>
          </form>
        </div>
      </div>
      <br />


      <div className='aval'>
        {notfound && <div className="alert alert-danger text-center" role="alert">{notfound}</div>}
        {
          flightResult.map((element, index) => {
            return (
              <div key={element._id}>
                {(index === 0) ? <h2>Available Flights</h2> : console.log()}
                <div className="container border rounded-3 pt-3 mb-2" >
                  <div className="search-results">
                    <div className="availflight">
                      <div>
                        <img src={element.logo} alt="logo" className='airlogo' />
                        <span> {element.name}</span> </div>
                      <span> {date} April 2023</span>
                    </div>
                    <div className="srcdes">
                      <p className='fsrc'>{element.source}</p><p className='fdes'>{element.destination}</p><p className='rate'>Rs. {element.rate}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default FlightSearch
