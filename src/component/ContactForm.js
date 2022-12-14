import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_serviceId, process.env.REACT_APP_templateId,  form.current, process.env.REACT_APP_publicKey)
            .then((result) => {
                alert('Success your email send. Thanks!')
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className='pb-14 pt-8 mx-3'>
            <div className='border rounded-3xl lg:w-1/2 mx-auto p-6'>
                <h3 className='text-center text-4xl font-thin text-white underline'>Contact me</h3>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Name</span>
                    </label>
                    <input type="text" name="user_name" placeholder="enter your full name" className="input input-bordered rounded-none" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Email</span>
                    </label>
                    <input type="email" name="user_email" placeholder="enter your email" className="input input-bordered rounded-none" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Subject</span>
                    </label>
                    <input type="text" name="subject" placeholder="enter your subject" className="input input-bordered rounded-none" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white font-semibold">Message</span>
                    </label>
                    <textarea type="text" name="message" placeholder="enter your message" className="input input-bordered pt-2 rounded-none h-20" required />
                </div>
                <div className='text-center mt-4'>
                <input type="submit" value="Send Email" className='btn btn-primary' />
                </div>
            </form>
        </div>
        </div>
    );
};

export default ContactForm;