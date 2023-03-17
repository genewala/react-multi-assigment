import React from 'react'
import reactLogo from "../images/portfolio.jpg"

const Home = () => {
  return (
    <div>
      <h1>Gene Derrick Espejo</h1>

      <div className="main">
          <div>
            <img src={reactLogo} alt="Picture"  style={{
          tintColor: '#000000',
          resizeMode: 'contain',
          height: 800,
          width: 600,
        }} /></div>
        <div className="main-right">
          <div>
            Hi my name is Gene
          </div>
         

          
        </div>
      </div>
      
    </div>
  )
}

export default Home
