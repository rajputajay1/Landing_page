import React from 'react'
import { useNavigate } from 'react-router-dom'
const Card = () => {
    const navigate = useNavigate()
    const handlePayent = () => {
        navigate('/payment')
        window.scrollTo(0, 0)


    }

    return (
        <div class="flex flex-col justify-center items-center mt-10  ">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden  w-[900px] max-md:w-full">
                <img src="./data.jpg" alt="Mountain" class="w-full  " />
                <div class="p-6">
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">Description</h2>
                    <p class="text-gray-700 leading-tight mb-3">
                        ⭐️⭐️⭐️⭐️⭐️(2798 Reviews)
                    </p>



                    <p className='text-2xl text-[#ff0000] font-bold'>Pan India Latest Updated in 139+ Different Categories! </p>

                    <div className='mt-5'>
                        <p>✅ सभी डेटाबेस को राज्य, शहर, पिनकोड और Category के अनुसार फ़िल्टर किया है ताकि आपको डेटा खोजने में परेशानी न हो।
                            <br />
                            <br />
                            ✅ आप इस डेटाबेस का उपयोग करके अपना व्यवसाय बढ़ा सकते हैं। जैसे व्हाट्सएप, कॉल, एसएमएस, ईमेल और अन्य डिजिटल मार्केटिंग विकल्प।
                            <br />
                            <br />

                            ✅बाजार में इसकी कीमत 9 से 11 हजार होगी? सही? लेकिन आज इसे आप सिर्फ 1717 रुपये में पा सकते हैं.
                            <br />
                            <br />

                            ✅ ऑफर केवल आज तक ही सीमित है, इसलिए तुरंत खरीदारी करने के लिए नीचे Make Payment बटन पर क्लिक करें।
                            <br />
                            <br />

                            ✅ भुगतान के बाद आपको 5 मिनट के अंदर ईमेल पर डेटाबेस मिल जाएगा।
                            <br />
                            <br />

                            ✅आप नीचे डाटाबेस के स्क्रीनशॉट या विडिओ भी देख सकते हो।
                            <br />
                            <br />


                            ✅ इससे पहले कि आपके प्रतिस्पर्धियों इस डेटाबेस को खरीदें, आप एक कदम आगे रहें और अपना व्यवसाय बढ़ाएं, इस डेटाबेस को खरीदें।
                        </p>
                    </div>

                    <p className='text-[20px] text-[#ff0000] font-bold mt-5'>City Wise | PinCode Wise | State Wise | Category Wise</p>
                    <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/Copy-of-WhatsApp-Software--3--2024-12-02-06-04-18-2024-17-02-08-35-53-2024-17-02-10-42-23.webp?w=600" alt="" className='mt-5 w-full' />
                    <div className=''>
                        <p className='text-[20px] font-bold'>✅ Comprehensive Coverage:</p>
                        <p>👥 B2B | B2C | Companies 👔
                            <br />

                            👨‍⚖️ Advocates / Lawyers ⚖️
                            <br />

                            🌐 Website Owners 🌐     <br />
                            🚗 Car Owners 🚗     <br />
                            🌍 NRIs 🌍     <br />
                            🏢 Real Estate Leads 🏠     <br />
                            💼 HNI/High-Income Employees 💰     <br />
                            🏭 Manufacturing Companies 🏭     <br />
                            👕 Garments Exporters 🌍     <br />
                            🏢 Architect | Interior Designers 🏠     <br />
                            ☎️ BPO/ Call Centres 📞     <br />
                            👨‍💼 CEO/ CFO/ CMO/ MD/ IT Head 💼     <br />
                            📝 C.A | Investors 💼     <br />
                            👔 Chairmen 💼     <br />
                            👩‍⚕️ Doctors 🏥     <br />
                            🧪 Chemical/ Pharma Companies 💊     <br />
                            👩‍🔬 Chemists 💊     <br />
                            🏠 Property Buyers 🏢     <br />
                            👨‍🏫 Professors 👩‍🏫 Teachers 👨‍🎓 Students 🎓     <br />
                            🎪 Event Management Organisers 🎉     <br />
                            📦 Exporters Database 🚢     <br />
                            👩‍💼 Females 👩     <br />
                            💆‍♀️ Beauty Parlours / SPA 💅     <br />
                            🕵️‍♂️ Job Seekers 🔎     <br />
                            💳 Credit Card Holders 💳     <br />
                            🌍 State Wise Data 🌍     <br />
                            📸 Photography Studios 📷     <br />
                            👩‍💼 HR | IT Companies 💻     <br />
                            🏨 Hotels/ Restaurants/ Bars 🍽️     <br />
                            🏦 Bank Database 🏦     <br />
                            🏢 Real Estate Agents 🏠     <br />
                            💼 Demat Account Holders 💼     <br />
                            🏫 School / College / Educational Institutes 🏫     <br />
                            🌐 Online User & Shopper Database 🛍️     <br />
                            etc... 💼</p>
                    </div>
                    <p className='mt-5 font-bold text-[20px]'>The Data will be sorted Industry/City wise in Excel .
                    </p>
                    <p className='mt-3 text-md'>This is recent Data of contact information such as Name, Address, Email ID, Phone, City, State, Pincode & more as available.

                    </p>
                    <div className='  flex justify-center  mt-5'>

                        <button className='bg-blue-500 px-28 py-3 text-white font-bold lg:text-[25px] max-md:text-[18px] max-md:py-2 max-md:px-10 hover:bg-black rounded-sm hover:scale-110 transition duration-500' onClick={handlePayent}>Buy Now</button>
                    </div>
                    <p className='text-blue-500 text-[20px] font-bold mt-5'>Click Here to Download Sample File</p>
                    <p className='mt-5 font-bold'>👇👇 Screenshots 👇👇</p>
                    <div className='mt-3'>


                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/ccea3482-675c-4acf-a29a-b3a00b60e71c-2024-26-02-03-59-8.jpeg?w=600" alt="" className='w-full' />
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/Screenshot--421--2023-16-08-06-53-52-2024-06-02-07-42-37-2024-17-02-10-33-7.webp?w=600" alt="" className='w-full' />
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/Screenshot--431--2023-16-08-06-57-10-2024-06-02-07-42-53-2024-17-02-10-33-19.webp?w=600" alt="" className='w-full' />

                    </div>
                    <div className='mt-7 text-[20px] font-bold text-center  text-[#ff0000] '>
                        <p>
                            ✨ High Accuracy, Clean, and Formatted Database with No Duplicate and Repeat Entries.


                        </p>
                        <p className='mt-5 text-center'>
                            🚀 Don't let your competitor buy it first! Act now and grow your business to new heights.
                        </p>
                        <p className='mt-5'>👇👇</p>
                    </div>
                    <div className='mt-4'>
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/Screenshot_2023-10-05-14-34-12-42-2023-05-10-09-19-37-2024-06-02-07-36-36-2024-17-02-10-34-15.webp?w=600" alt="" className='w-full' />
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/IMG_20230726_125650-2023-19-08-03-35-13-2024-06-02-07-25-1-2024-06-02-07-33-29-2024-17-02-10-35-47.webp?w=600" alt="" className='w-full' />
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/Screenshot_2023-09-07-13-59-45-05-2023-08-09-09-47-44-2024-06-02-07-23-24-2024-17-02-10-34-33.webp?w=600" alt="" className='w-full' />
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/Screenshot_2023-09-07-13-59-24-88-2023-08-09-09-47-22-2024-06-02-07-22-57-2024-17-02-10-40-30.webp?w=600" alt="" className='w-full' />
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/Modern-Minimal-Gradient-Background-Technology-Youtube-Channel-Art-2023-08-09-10-08-46-2024-06-02-07-25-27-2024-17-02-10-40-55.webp?w=600" alt="" className='w-full' />
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/IMG_20230727_133802-2023-27-07-08-08-43-2024-06-02-07-37-5-2024-17-02-10-41-13.webp?w=600" alt="" className='w-full' />
                        <p className='mt-5 text-2xl font-bold text-center  text-[#ff0000]'>💫Customer's Reviews 👇</p>
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/763-_20231113_150953_0000-2023-13-11-09-48-14-2023-14-12-12-06-54.webp?w=600" alt="" className='w-full mt-10' />
                        <div className='  flex justify-center  my-10 '>

                            <button className='bg-blue-500 px-28 py-3 text-white font-bold lg:text-[25px] max-md:text-[18px] max-md:py-2 max-md:px-10 hover:bg-black rounded-sm hover:scale-110 transition duration-500' onClick={handlePayent}>Buy Now</button>
                        </div>
                        <img src="https://picasso.cosmofeed.com/media.cosmofeed.com/20231114_132532_0000-2023-14-11-07-57-46-2023-14-12-12-07-22.webp?w=600" alt="" className='w-full' />
                        <p className='mt-3 text-2xl font-bold text-center  text-[#ff0000]'>🚨 Important Notice Regarding Payment Issues</p>
                        <p className='text-center text-2xl mt-4'>🔔</p>
                        <p className='text-md font-bold mt-6 '>Facing payment issues? 😟Don't worry! We're here to help! 🤝 If your payment has failed, contact us on WhatsApp at [ 7069102104 ]. Share your concern, we will assist you ASAP. Thanks for choosing our Super Bundle ! 🙏</p>
                        <p className='text-2xl font-bold italic text-blue-500  text-center mt-5'>𝘾𝙇𝙄𝘾𝙆 𝙃𝙀𝙍𝙀 🔘 𝙏𝙊 𝘾𝙃𝘼𝙏 𝙒𝙄𝙏𝙃 𝙐𝙎</p>

                        <p className='text-[20px] font-bold mt-5  text-center'>⏰Our Sales Offer End Today⏰</p>
                        <p className='text-[20px] font-bold mt-2  text-center text-[#ff0000]'>Buy Now Just Rs.999/-</p>
                        <p className='text-[20px] font-bold mt-2  text-center text-[#ff0000]'>Limited Time Offer Price</p>
                        <div className='  flex justify-center  mt-5'>

                            <button className='bg-blue-500 px-28 py-3 text-white font-bold lg:text-[25px] max-md:text-[18px] max-md:py-2 max-md:px-10 hover:bg-black rounded-sm hover:scale-110 transition duration-500' onClick={handlePayent}>Buy Now</button>
                        </div>

                        <p className='text-md font-bold text-center mt-4'>⏱️Limited Time Offer, Price Will Increase Soon⏱️💸Buy Now , Use, Resell & Earn💸</p>

                    </div>
                    <div className='mt-5 text-center'>
                        <p className='text-[20px] font-bold text-blue-500 '>Contact Marketing  Mingles </p>

                        <div className='flex justify-center flex-col items-center'>


                            <p className='text-sm font-semibold mt-2 mb-2 flex gap-2'> <span><img src="./email.jpg" alt="" className='w-6' /></span>admin@marketingmingles.com</p>
                            <p className='text-sm font-semibold flex gap-2'> <span><img src="./call.png" alt="" className='w-4' /></span>+91-9501433347</p>
                        </div>

                    </div>
                    <div className='mt-5'>
                        <p className='text-[20px] font-bold text-center text-blue-500'>+
                            Terms and conditions</p>
                        <p className='text-sm font-bold mt-2 mb-2'>You agree to share information entered on this page with Marketing  Mingles  (owner of this page) adhering to applicable laws.</p>


                    </div>

                    <img src="https://cosmofeed.com/_next/static/media/SuperProfile-dark.fc38e89a.svg" alt="" className='w-32 mt-8' />
                    <p className='text-sm font-sm'>Want to create your own payment page? Experience hassle-free payouts and premium support.</p>
                    <p className='text-sm font-semibold text-blue-500 underline'> Get started now!</p>
                </div>
            </div>
        </div>
    )
}

export default Card