import React from 'react'

export default function Events() {
  return (
    <div className='hide-scrollbar w-full flex flex-col justify-center bg-white'>
      <div className='overflow-hidden rounded-2xl relative'>
        <iframe
        className='hide-scrollbar m-10'
        src="https://lu.ma/embed/event/evt-tcK43PzcFZ0VN5y/simple"
        width="600"
        height="800"
        style={{width: 'fit', height: 'fit', display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
      </div>

      
    </div>
  )
}