import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div >
            <div className='md:flex md:justify-between '>
                <div className='flex w-9/12'>
                    <img className='w-14 m-4' src='https://asset.brandfetch.io/idhXjxLF9g/idDdtM-Aux.png' alt='wyncImg' />
                    <p className='mt-6'>
                        <h1 className='text-white font-bold'>Best way to Listen to Music!</h1>
                        <h2 className='text-white'>Don’t forget to install our app</h2>
                    </p>
                </div>
                <div className='flex item-center w-3/12'>
                    <a href='www.linkedin.com/in/mukul-kanojia-290b681ba' target='_blank'> <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '2.5rem' }} className='text-white p-4 ' /> </a>
                    <a href='https://github.com/Mukulkanojia123' target='_blank'> <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2.5rem' }} className='text-white p-4 ' /> </a>
                </div>
            </div>

            <div className='text-white md:flex md:justify-evenly'>
                <div>
                    <h1 className='font-bold p-2'>About us</h1>
                    <ul>
                        <li className='p-1'>Latest Songs</li>
                        <li className='p-1'>New Songs</li>
                        <li className='p-1'>Hollywood Songs</li>
                        <li className='p-1'>Team</li>
                        <li className='p-1'>career</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold p-2'>Terms of Use</h1>
                    <ul>
                        <li className='p-1'>Music Content</li>
                        <li className='p-1'>Billing & Payments</li>
                        <li className='p-1'>Advertising</li>
                        <li className='p-1'>Limitation Of Liability</li>
                        <li className='p-1'>Indemnity</li>
                    </ul>
                </div>
                <div>
                    <h1 className='font-bold p-2'>Contact us</h1>
                    <ul>
                        <li>phn : 011-3782461</li>
                        <li>Mukulkanojia123@gmail.com</li>
                        <li>help and support</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-bold p-2'>Legal</h1>
                    <ul>
                        <li className='p-1'>Terms & Conditions</li>
                        <li className='p-1'>Privacy Policy</li>
                        <li className='p-1'>Cookie Policy</li>
                        <li className='p-1'>Payments Issues</li>

                    </ul>
                </div>
                <div className="text-gray-400 text-lg font-semibold">
                    <img
                        className="w-[300px] text-gray-400"
                        src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png"
                        alt="img"
                    />

                </div>

            </div>
            <div className='flex justify-evenly'>
                <p className='text-white p-5 font-semibold text-2xl'> &copy;Mukulkanojia123</p>
            </div>

        </div>
    );
};

export default Footer;
