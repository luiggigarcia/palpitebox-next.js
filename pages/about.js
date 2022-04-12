import React from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const About = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-8'>
            <PageTitle title='We - PalpiteBox' />
            <p className='font-medium mt-6 mb-6'>
                Nice to see you here!.<br />
                Meet us doing the survey.
            </p>
        </div >
    );
};

export default About;