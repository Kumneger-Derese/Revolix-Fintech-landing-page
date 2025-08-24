import React from 'react';
import PrimaryButton from "./PrimaryButton.jsx";
import List from "./List.jsx";
import {pricingData} from "../constant/pricing.js";

const Pricing = () => {
    return (
        <div id={'pricing'} className={'flex flex-col gap-y-8 mb-32 lg:px-12'}>
            <h1 className={'font-bold text-4xl mb-8 mx-auto'}>
                Only pay for what you use
            </h1>

            {/*Solo*/}
            <section className={'flex flex-col rounded-xl sm:flex-row gap-4 bg-secondary w-full'}>
                <div
                    className={'flex-1 sm:flex-1/3 bg-primary dark:text-slate-950 gap-y-2 p-8 flex flex-col items-center justify-center rounded-xl'}>
                    <h2 className={'font-bold'}>Premium Solo</h2>
                    <h1 className={'text-7xl font-bold'}>$39</h1>
                    <p className={'text-sm'}>billed yearly</p>
                    <PrimaryButton cn={'text-dark bg-gray-200 hover:text-gray-200 hover:bg-dark transition-colors duration-500'}>
                        Get Started
                    </PrimaryButton>
                </div>

                {/*Right Solo*/}
                <div className={'text-light p-8 flex-1 sm:flex-2/3'}>
                    <p className={'text-primary/70'}>
                        Access to these features when you sign up with Revolix
                        Premium Solo package for your personal finances.
                    </p>
                    <div className={'flex flex-col gap-y-4 mt-4'}>
                        {
                            pricingData.premiumSolo.map((solo) => (
                                <List bg={'bg-primary'} color={'text-secondary'} key={solo.id} content={solo.content}/>
                            ))
                        }
                    </div>
                </div>
            </section>

            {/*Biz*/}
            <section className={'flex flex-col rounded-xl border border-pink-400 sm:flex-row gap-4 bg-pink-200 text-pink-950 w-full'}>
                {/*Right Solo*/}
                <div className={'order-2 sm:order-1 p-8 flex-1 sm:flex-2/3'}>
                    <p className={'text-slate-950'}>
                        Access to these features when you sign up with Revolix
                        Premium Biz package for your business.
                    </p>
                    <div className={'flex flex-col gap-y-4 mt-4'}>
                        {
                            pricingData.premiumBiz.map((solo) => (
                                <List bg={'bg-pink-950'} color={'text-pink-100'} key={solo.id} content={solo.content}/>
                            ))
                        }
                    </div>
                </div>

                <div className={'order-1 sm:order-2 flex-1 sm:flex-1/3 bg-pink-950 text-pink-100 gap-y-2 p-8 flex flex-col items-center justify-center rounded-xl'}>
                    <h2 className={'font-bold'}>Premium Biz</h2>
                    <h1 className={'text-7xl font-bold'}>$39</h1>
                    <p className={'text-sm'}>billed yearly</p>
                    <PrimaryButton cn={'text-dark bg-gray-200 hover:text-gray-200 hover:bg-pink-800 transition-colors duration-500'}>
                        Get Started
                    </PrimaryButton>
                </div>
            </section>
        </div>
    );
};

export default Pricing;