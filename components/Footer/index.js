import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-600 p-6'>
            <div className='container mx-auto text-center'>
                <p className='text-center text-white font-medium'>
                    Project developed by <strong>Luiggi Paschoalini Garcia</strong> / <a href='https://www.linkedin.com/in/luiggi-garcia/' target='_blank'>Linkedin</a> /
                    <a href='https://github.com/luiggigarcia' target='_blank'>Github</a>
                </p>
                <div className='mt-4'>
                    <img className='inline p-4' src='/logo_semana_fsm.svg' alt='FullStack Master' />
                    <img className='inline p-4' src='/logo_devpleno.svg' alt='DevPleno' />
                </div>
            </div>
        </footer>
    );
};

export default Footer;