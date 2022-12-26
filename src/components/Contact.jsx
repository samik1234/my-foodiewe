import React from 'react';

const Contact = () => {
  return (
    <div id= 'contact' className='max-w-[1140px] m-auto w-full 
    p-4 py-16'>
<h2 className='text-center text-gray-700 font-bold'> Send us a feedback! </h2>
<p className='text-center text-gray-700 py-2 font-semibold'>We are standing by!</p>
<div className='grid md:grid-cols-2'>
  <img src='https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'alt='/' className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'/>
  <form method='POST' action="https://getform.io/f/fc4c4735-e8e3-4636-900b-7d4308643d0b" className='flex flex-col max-w-[600px] w-full'> 
    <div className='grid grid-cols-2'>
      <input className='border m-2 p-2'type='text' placeholder='First'/>
      <input className='border m-2 p-2' type='text' placeholder='Last'/>
      <input className='border m-2 p-2' type='email' placeholder='Email'/>
      <input className='border m-2 p-2' type='tel' placeholder='Phone'/>
      <input className='border col-span-2 p-2 m-2' type='text' placeholder='Address'/>
      <textarea className='border col-span-2 m-2 p-2' cols='30' rows='10'></textarea>
      <button className='col-span-2 m-2 p-2 font-bold border-orange-600 hover:bg-orange-400'>Submit</button>
    </div>
  </form>
</div>
    </div>
    
  )
}

export default Contact;