import React, { useState } from 'react';

const Pay = () => {
    const [totalAmount, setTotalAmount] = useState(999);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setTotalAmount(totalAmount + 449);
        } else {
            setTotalAmount(totalAmount - 449);
        }
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <section className="flex flex-col items-center pt-6">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-[700px] xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Payment Details
                        </h1>
                        <form className="space-y-4 md:space-y-6" method="POST">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Jhon"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Email *
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Phone No *
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="1234567890"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <img src="./crm.jpg" alt="" />
                            <p className='text-md  font-bold'>Google Data Extractor (1 YEAR VALIDITY)</p>
                            <div>
                                <p className='text-md  font-semibold'>Amazing Features:</p>
                                <p className='mt-5'>
                                    ✅ Google Data Extractor is a Real-Time Data Extraction Tool.
                                    <br />
                                    ✅This software will help a company or an individual to Scrape the Latest Listed Data on Google Maps.
                                    <br />
                                    ✅Save or Export data to a Microsoft Excel File.
                                    <br />
                                    ✅Google Data Extractor is a versatile, lightweight, powerful Google Maps scraper tool.
                                    <br />
                                    ✅Extracted data is stored in CSV format, which can easily be opened in Excel.
                                    <br />
                                    ✅See the total extracted records and view the results.
                                    <br />
                                    ✅Option to enter multiple search criteria or multiple keywords, Pincode wise and Location at a time.
                                    <br />
                                    ✅Supported countries (150+ countries)
                                    <br />
                                    ✅VALIDITY 1 YEAR
                                    <br />
                                    ✅AT JUST 449/- ONLY
                                    <br />
                                    ✅HURRY UP
                                    <br />
                                    call / whatsapp +91 9501433347</p>

                            </div>
                            <div>


                                <p className='text-md font-bold'>₹449</p>

                                <input
                                    type="checkbox"
                                    id="extraCharge"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="extraCharge" className="ml-2 text-sm  text-gray-900 dark:text-white text-[18px] font-semibold">
                                    Add  order
                                </label>
                                <hr className='mt-5'/>
                                <p className='text-md font-bold  mt-3'>Toatl Amount</p>
                                <p className='font-bold'>₹{totalAmount}</p>
                            </div>


                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Make Payment
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Pay;
