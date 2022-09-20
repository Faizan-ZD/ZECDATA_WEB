import React from 'react'
import './home.css';


function Home() {
    return (
        <>
            <div className='first-container'>
                <div className='row'>
                    <div className="col-5 mt-5" style={{ paddingTop: "4rem" }} >
                        <h1>Bring Your Vision to Life</h1>
                        <p>Build beautiful, market-disruptive,
                            enterprise-level apps 65% faster than the competition. Build beautiful, market-disruptive,
                            enterprise-level apps 65% faster than the competition.</p>
                    </div>
                    <div className="col-5 mt-5" id='side_img'>
                        <img src='' className='px-5' style={{ borderRadius: '190px' }} />
                    </div>
                </div>
            </div>
            <div>

                <div className='second-container row justify-content-center' >
                    <div className='row ' id='second_cont'>

                        <div className='col-3' id='second_cont'>
                            <p>We put your business front & center</p>
                            <h1>Our Approach</h1>
                           
                        </div>

                        <div class="d-flex col-1" >
                            <div class="vr"></div>
                        </div>

                        <div className='col-3'>
                            <h5>01.Tell us what problem you’re trying to solve</h5>
                            <p className='mt-3 fw-lighter'>Want to use your data to learn more about your customers? Trying to uncover business efficiencies to save money? Looking for a custom-built app for your community? We can help.</p>
                        </div>
                        <div class="d-flex col-1">
                            <div class="vr "></div>
                        </div>
                        <div className='col-3 '>

                            <h5>02.Tell us what problem you’re trying to solve</h5>
                            <p className='mt-3 fw-lighter'>Want to use your data to learn more about your customers? Trying to uncover business efficiencies to save money? Looking for a custom-built app for your community? We can help.</p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-3' id='second_cont_1'>
                        </div>
                        <div class="d-flex col-1">
                            <div class="vr "></div>
                        </div>
                        <div className='col-3'>
                            <h5>03.Tell us what problem  you're trying to solve</h5>
                            <p className='mt-3 fw-lighter'>Want to use your data to learn more about your customers? Trying to uncover business efficiencies to save money? Looking for a custom-built app for your community? We can help.</p>
                        </div>
                        <div class="d-flex col-1">
                            <div class="vr "></div>
                        </div>
                        <div className='col-3'>
                            <h5>04.Tell us what problem you're trying to solve</h5>
                            <p className='mt-3 fw-lighter'>Want to use your data to learn more about your customers? Trying to uncover business efficiencies to save money? Looking for a custom-built app for your community? We can help.</p>
                        </div>

                    </div>

                </div>
                {/* <div className='third-container'>
                    <div className='row pt-5'>
                        <div className='col-5 mt-5'>
                            <h1>Our Services</h1>
                            <p>Build an engaging app. Integrate AI to work more efficiently. Dive into your data to predict demand. Makeen can help you do all this and more with our innovative, client-first services.</p>
                        </div>s
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Home