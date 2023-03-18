import React from 'react'
import reactLogo from "../images/portfolio.jpg"
import reactLogo2 from  "../images/paper_folds_crumpled_216220_1366x768.jpg"

const Home = () => {
  return (
    <div className='main-name-top'>
      <h1 className='main-name'>Gene Derrick Espejo</h1>

      <div className="main">
        {/* <div>
          <img src={reactLogo2} alt="" style={{
          tintColor: '#000000',
          resizeMode: 'contain',
          height: 794.5,
          width: 1905,
          position: 'absolute',
           }} />
        </div> */}
          <div>
            <img src={reactLogo} alt="Picture"  style={{
          tintColor: '#000000',
          resizeMode: 'contain',
          height: 792,
          width: 600,
          position: 'relative',
        }} /></div>
        <div className="main-right">
          <div>
            <h1>Welcome to my portfolio, where innovation meets creativity and problem-solving leads to exceptional results. I'm Gene, I'm excited to share with you my passion for Web Development and showcase my best work.</h1>
          </div>
         

          
        </div>
      </div>
      
    </div>
  )
}

export default Home
