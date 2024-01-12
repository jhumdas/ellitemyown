import React from 'react'
import { Link } from 'react-router-dom'
import BoxImg1 from '../Images/box-img1.png';

function MyConnections() {
  return (
    <>
        <section id="my_connections">
            <div className='top'>
                <div className='head'>
                    <h4>My Connections</h4>
                </div>
                <div className='all_btn'>
                    <div className='add_btn'>
                        <button type='' className='btn'>Add</button>
                    </div>
                    <div className='Seeall_btn'>
                        <Link to="/" className='btn'>See All</Link>
                    </div>
                </div>
            </div>

            <div className='all_image_area'>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_ara'>
                        <img src={BoxImg1} className="img-fluid" alt='image' />
                    </div>
                    <div className='name'>
                        <p>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MyConnections