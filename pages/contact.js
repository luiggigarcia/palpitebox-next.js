import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const Contact = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-8'>
            <PageTitle title='Contact - PalpiteBox' />
            <p className='font-medium mt-6 mb-6'>
                Visit us by Linkedin or Github on the links bellow.
            </p>
        </div >
    );
};

export default Contact;