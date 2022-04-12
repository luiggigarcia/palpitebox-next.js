import React, { useState } from 'react';
import Link from 'next/link';
import PageTitle from '../components/PageTitle';

const Survey = () => {
    const [form, setForm] = useState({
        Name: '',
        Email: '',
        Whatsapp: '',
        Feedback: '',
        Note: ''
    });

    const notes = [0, 1, 2, 3, 4, 5];
    const [sucess, setSucess] = useState(false);
    const [dataReturn, setReturn] = useState({});

    const sendForm = async () => {
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            });

            const data = await response.json();
            setSucess(true);
            setReturn(data);
        }
        catch (err) { }
    };

    const onChange = event => {
        const key = event.target.name;
        const value = event.target.value;
        setForm(old => ({
            ...old,
            [key]: value
        }));
    };

    return (
        <div className='flex flex-col items-center mt-8'>
            <PageTitle title='Survey - PalpiteBox' />
            <h1 className='font-semibold text-lg'>Feedback and Suggestions</h1>
            <div className='mt-4'>
                {!sucess &&
                    <form method='post' className='flex flex-col'>
                        <label htmlFor="name">Your name</label>
                        <input className='p-4 bg-gray-200 w-96' type="text" name="Name" id="Name" onChange={onChange} value={form.Name}
                            placeholder='your name' />

                        <label htmlFor="email" className='mt-2'>E-mail</label>
                        <input className='p-4 my-2 bg-gray-200 w-96' type="email" name="Email" id="Email" onChange={onChange} value={form.Email}
                            placeholder='your best email' />

                        <label htmlFor="whats" className='mt-2'>Whatsapp</label>
                        <input className='p-4 my-2 bg-gray-200 w-96' type="tel" name="Whatsapp" id="Whatsapp" onChange={onChange} value={form.Whatsapp}
                            placeholder='phone number' />

                        <label htmlFor="feedback" className='mt-2'>Your feedback or suggestion</label>
                        <input className='p-4 my-2 bg-gray-200 w-96' type="text" name="Feedback" id="Feedback" onChange={onChange} value={form.Feedback}
                            placeholder='give us a feedback, not is mandatory' />

                        <div className='flex content-center gap-4 m-4'>
                            {
                                notes.map(note => {
                                    return (
                                        <label htmlFor="Note" className='mr-2'>
                                            {note} <br />
                                            <input className='p-4 my-2' type="radio" name="Note" id="Note" onChange={onChange} value={note} />
                                        </label>
                                    )
                                })
                            }
                        </div>

                        <button onClick={sendForm} className='bg-green-500 px-6 py-4 rounded hover:bg-emerald-600 shadow-md m-8'>
                            <a className='text-white font-bold'>Send feedback</a>
                        </button>
                    </form>
                }
                {sucess &&
                    <div className='mx-auto mb-6'>
                        <p className='mt-6 mb-6 text-center text-black font-semibold bg-blue-100 border-t border-b border-blue-300 text-blue-700 px-4 py-3'>
                            Thank you for give your opinion/suggestion.
                        </p>
                        {
                            dataReturn.showCoupon &&
                            <div className='text-center border p-4 mb-4'>
                                <p className='text-lg'>Your coupon:</p>
                                <p className='text-lg'><strong>{dataReturn.Coupon}</strong></p>
                            </div>
                        }
                        {
                            dataReturn.showCoupon &&
                            <div className='text-center border p-4 mb-4'>
                                <p className='text-2x1'>{dataReturn.Promo}</p>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Survey;