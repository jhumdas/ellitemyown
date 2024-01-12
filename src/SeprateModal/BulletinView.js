import React from 'react'

const BulletinView = ({selectedDescription,closemodal}) => {
  return (
    <>
    <div className='viedetailsmain' onClick={()=>closemodal()}>
        <div className='viewdetailscontent'>
            <div className='closemarkdst'><i class="fa-solid fa-xmark"></i></div>
              <div className=''>
                
                    <div className="">
                      {selectedDescription}
                    </div>
              </div>
        </div>
    </div>
    </>
  )
}

export default BulletinView