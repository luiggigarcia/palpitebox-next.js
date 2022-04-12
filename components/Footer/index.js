import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-600 p-6'>
            <div className='container mx-auto'>
                <p className='text-center text-white font-medium'>
                    Project developed by <strong>Luiggi Paschoalini Garcia</strong> / <a href='https://www.linkedin.com/in/luiggi-garcia/' target='_blank'>Linkedin</a> /
                    <a href='https://github.com/luiggigarcia' target='_blank'>Github</a>
                </p>
                <div className='flex justify-center content-center mt-4'>
                    <img src='/logo_semana_fsm.svg' alt='FullStack Master' className='p-4' />
                    <img src='/logo_devpleno.svg' alt='DevPleno' className='p-4' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;