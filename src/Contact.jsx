import React from 'react';
import emailIcon from './assets/email-icon.png';
import PhoneIcon from './assets/phone-icon.png';

const Contact = () => {
    return (
        <section id="contact">
            <div className="my-20">
                <div className='section-container'>
                    <h3 className='underline'>Contact</h3>
                </div>
                <div className="max-w-8xl flex flex-col items-center flex-wrap justify-between md:justify-center space-y-16 md:flex-row md:space-y-0 md:space-x-12">
                    <div className="flex flex-col items-center space-y-5 md:ml-[48px]">
                        <div className="flex flex-row items-center rounded-2xl m-12 group">
                            <img src={emailIcon} alt="" className="h-[40px] w-100 duration-200 group-hover:-translate-y-1.5 transition-all" />
                            <h5 className='ml-4'>rprasanth285@gmail.com</h5>
                        </div>
                        {/* <div className="flex flex-row items-center rounded-2xl m-12 group">
                            <img src={PhoneIcon} alt="" className="h-[40px] w-100 duration-200 group-hover:-translate-y-1.5 transition-al" />
                            <h5 className='ml-4'>+1(437)-858-5887</h5>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;