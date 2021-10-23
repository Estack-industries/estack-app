import React, { useState, useEffect } from 'react';
import { Container } from '../../Container/Container';
import { WaveBG } from '../../WaveBG/WaveBG';
import PropertySection1 from './PropertySection1';
import './Property.css';

function Property() {
  const [apiState, setApiState] = useState({
    loading: false,
    data: [],
    error: null,
  })
  useEffect(() => {
    setApiState(pre => ({
      ...pre,
      loading: true,
      data: [],
      error: false,
    }))

    fetch("/api/data")
      .then(res => res.json(), {
        method: "GET",
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(res => {
        setApiState({
          loading: false,
          data: res,
          error: false,
        })
      })
      .catch(error => {
        setApiState({
          loading: false,
          error: true,
        })
        console.log(error)
      })
  }, [])

  return (
    <div className="property-container">
      <WaveBG position="none" />
      <Container>
        <PropertySection1 />
        <div className="testSection">
          {
            apiState.data.map((item) => {
              return (
                <div key={item.id} className="testDataGrid">
                  <h4>{item.id}</h4>
                  <h4>{item.title}</h4>
                  <h4>{item.owner}</h4>
                  <h4>{item.listedDate}</h4>
                  <h4>{item.city}</h4>
                  <h4>{item.sold ? "true" : "false"}</h4>
                </div>
              );
            })
          }
        </div>
      </Container>
    </div>
  )
}

export default Property
