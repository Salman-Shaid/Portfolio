import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import the EmailJS library
import toast, { Toaster } from 'react-hot-toast'; // Import React Hot Toast
import sendMessageAnimation from '../../../assets/loittie/sms.json';
import contactAnimation from '../../../assets/loittie/contact.json';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Lottie from 'react-lottie';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Contact = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: contactAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const defaultOptionsSendMessage = {
        loop: true,
        autoplay: true,
        animationData: sendMessageAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure formData is passed correctly
        const dataToSend = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        try {
            const result = await emailjs.send(
                'service_gnc4fka', // Service ID
                'template_bue6zji', // Template ID
                dataToSend, // Data to send in the email
                'lGuwc5iNeAWBb2ewC' // User ID
            );

            console.log(result); // Log result for debugging
            if (result.status === 200) {
                toast.success('Your message has been sent successfully!', {
                    position: 'top-center',
                    duration: 4000,
                });
                setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
            } else {
                toast.error('Failed to send message. Please try again later.', {
                    position: 'top-center',
                    duration: 4000,
                });
            }
        } catch (error) {
            console.error('Error sending message:', error); // Log error for debugging
            toast.error('Error sending message. Please try again later.', {
                position: 'top-center',
                duration: 4000,
            });
        }
    };

    return (
        <div id="contact" className=" container mx-auto bg-[#252734] mt-30 pt-10 px-4 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mt-10 mb-20 text-gray-100">Contact with Me</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="bg-[#252734] text-white p-6 shadow-lg rounded-lg md:rounded-l-2xl border-r-1 border-gray-700">
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="mb-4">Feel free to reach out for any inquiries or collaborations.</p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FaEnvelope size={24} />
                            <span>salmanshaid9@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaPhone size={24} />
                            <span>+880 1761619796</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMapMarkerAlt size={24} />
                            <span>Dhaka, Bangladesh</span>
                        </div>
                    </div>


                    {/* Social Media Links */}
                    <div className="flex gap-4 mt-6">
                        <a href="https://www.linkedin.com/in/salman-shaid-93001734b/" className="hover:text-blue-600 transition duration-300">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://github.com/Salman-Shaid?tab=repositories" className="hover:text-gray-500 transition duration-300">
                            <FaGithub size={32} />
                        </a>
                        <a href="https://www.facebook.com/Salman.Shaid.Sani" className="hover:text-blue-500 transition duration-300">
                            <FaFacebook size={32} />
                        </a>
                        <a href="https://x.com/Salmanshaid6" className="hover:text-black transition duration-300">
                            <FaSquareXTwitter size={32} />
                        </a>
                    </div>

                    {/* Lottie Animation */}
                    <div className="md:w-full mt-6">
                        <Lottie options={defaultOptions} height={300} width={300} />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-[#252734] px-6 py-8 text-white rounded-lg md:rounded-r-2xl">
                    <div className='flex items-center mb-6'>
                        <h2 className="text-2xl font-semibold">Send a Message</h2>
                        <Lottie options={defaultOptionsSendMessage} height={60} width={100} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-300">Name</label>
                            <input
                                type="text"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
                                placeholder="Your Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300">Email</label>
                            <input
                                type="email"
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
                                placeholder="Your Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300">Message</label>
                            <textarea
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
                                rows="4"
                                placeholder="Your Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Toaster for React Hot Toast */}
            <Toaster />
        </div>
    );
};

export default Contact;
