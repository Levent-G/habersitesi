import { Container } from '@mui/material'
import React from 'react'
import UlkeSecimiComp from '../components/UlkeSecimiComp'
import HaberlerComp from '../components/HaberlerComp'

const Home = () => {
  return (
    <div>
        <Container className='flex justify-center items-center '>
         <UlkeSecimiComp/>
         <HaberlerComp/>
     
    
        </Container>
    </div>
  )
}

export default Home