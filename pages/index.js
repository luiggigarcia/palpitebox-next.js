import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/PageTitle';

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher);
    return (
        <div className='flex flex-col justify-center items-center gap-8'>
            <PageTitle title='Welcome - PalpiteBox' />
            <p className='font-medium mt-6'>Our company values the good relationship customer.<br />
                For this reason, we are always open to hear your opinion</p>
            <button className='bg-green-500 px-6 py-4 rounded hover:bg-emerald-600 shadow-md mb-6'>
                <Link href='/survey'>
                    <a className='text-white font-bold'>Give opinion or suggestion</a>
                </Link>
            </button>
            {data && data.showCoupon &&
                <p className='font-medium mb-6'>{data.message}</p>
            }
        </div >
    );
};

export default Index; 