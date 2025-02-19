import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles.css'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='login home'>
        <h1>NEET Past Year Tests</h1>
        <div className='homeCreds'>
            <p>Don&#39;t have an account <span onClick={() => navigate('/register')}>Register Hear</span></p>
            <p>Already Registered <span onClick={() => navigate('/login')}>Login Now</span></p>
        </div>
    </div>
  )
}

export default Home