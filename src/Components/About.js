// import React, { useState } from 'react'

export default function About(prop) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'Black'
    // })

    // const [BtnText, SetBtnText] = useState('Enable Dark mode') 

    let myStyle={
        color:prop.mode==='dark'?'white':'black',
        backgroundColor:prop.mode==='dark'?'black':'white',
        // border:'2px solid',
        // borderColor:prop.mode==='dark'?'white':'black'
    }

    // const toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setmyStyle({
    //             color: 'Black',
    //             backgroundColor: 'white',


    //         })
    //         SetBtnText('Enable Dark mode')
    //     } else {
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'

    //         })
    //         SetBtnText('Enable light mode')


    //     }
    // }


    return (
        <div className='container my-4  rounded-1 ' style={myStyle}>
            <h2   style={ { color:prop.mode==='dark'?'white':'black',}}  >Aobut Us</h2>
            <div className="accordion pt    -5" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong  style={myStyle}>  Analyse your test</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div style={myStyle} className="accordion-body">
                            <strong >This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div style={myStyle} className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>  Browser Compatibility</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={toggleStyle} className="my-3 btn btn-dark">{BtnText}</button> */}
        </div>
    )
}
