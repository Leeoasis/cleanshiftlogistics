import React from 'react';
import TeamImage from '../assets/images/shift1.jpg';
import MissionImage from '../assets/images/mission.jpeg';
import ValuesImage from '../assets/images/values.jpeg';

const AboutPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <section 
                className="relative py-20 bg-cover bg-center text-white"
                style={{ backgroundImage: 'url("https://www.shutterstock.com/image-illustration/contact-us-message-landing-page-260nw-765294988.jpg")' }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative container mx-auto px-4 flex flex-col items-center text-center">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                        About Cleanshift Logistics
                    </h1>
                    <p className="text-xl mb-8">
                        Your Trusted Partner in Furniture Removal and Cleaning Solutions
                    </p>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                At Cleanshift Logistics, our mission is to provide seamless and efficient furniture removal and cleaning services. We strive to exceed customer expectations through exceptional service, reliability, and attention to detail.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                We are committed to making your moving experience stress-free by handling everything from packing to cleaning, ensuring a smooth transition to your new space.
                            </p>
                        </div>
                        <div className="lg:w-1/2">
                            <img src={MissionImage} alt="Our Mission" className="w-full h-80 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <img src={TeamImage} alt="Our Team" className="w-full h-80 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" />
                        </div>
                        <div className="lg:w-1/2 lg:pl-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Our team is made up of dedicated professionals with years of experience in the logistics and cleaning industry. We are passionate about what we do and take pride in delivering high-quality services to our clients.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Each team member is trained to handle your belongings with care and ensure that your space is left clean and organized. We work together to provide a service that is efficient, reliable, and tailored to meet your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                At Cleanshift Logistics, we believe in operating with integrity, professionalism, and a commitment to excellence. Our core values guide everything we do and help us to build lasting relationships with our clients.
                            </p>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                                <li><span className="font-semibold">Customer Focus:</span> We put our customers first and strive to provide services that exceed their expectations.</li>
                                <li><span className="font-semibold">Integrity:</span> We operate with honesty and transparency in all our dealings.</li>
                                <li><span className="font-semibold">Quality:</span> We are committed to delivering high-quality services through continuous improvement and innovation.</li>
                                <li><span className="font-semibold">Teamwork:</span> We work collaboratively to achieve our goals and support each other in our roles.</li>
                                <li><span className="font-semibold">Sustainability:</span> We are dedicated to using eco-friendly practices and products to minimize our impact on the environment.</li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <img src={ValuesImage} alt="Our Values" className="w-full h-80 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
