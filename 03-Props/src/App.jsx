import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Navbar />
      <div className="hero">
        <Card name="Amar Singh Katiyar" age={26} img='https://i.pinimg.com/originals/22/5f/4c/225f4c968155fcd81cc89182f673583b.png' />
        <Card name="Anupam Katiyar" age={28} img='https://i.pinimg.com/originals/90/c0/51/90c051810494297069df2b6b9a450c15.jpg'/>
        <Card name="Jagriti Katiyar" age={30} img="https://static.vecteezy.com/system/resources/previews/025/474/309/large_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg"  />
        <Card name="Jyoti Katiyar" age={20} img="https://pixu.ai/pixu/images/stock/__56/56gq7swm.jpg"  />
        <Card name="Ajay Katiyar" age={50} img="https://imgcdn.stablediffusionweb.com/2025/1/13/6623e561-3c8a-42b9-913d-d09a7020480a.jpg"  />
        <Card name="Poonam Katiyar" age={40} img="https://i.pinimg.com/originals/26/76/96/267696c0dff7790b8ff76f2cab15eac2.jpg"  />
      </div>
    </div>
  )
}

export default App