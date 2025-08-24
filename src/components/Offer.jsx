import PrimaryButton from "./PrimaryButton.jsx";
import {offerData} from "../constant/offer.js";

const Offer = () => {
    return (
        <div id={'offer'} className={'px-16 py-24 mb-32 bg-stone-200 dark:bg-slate-700 flex flex-col gap-x-4 gap-y-12 lg:flex-row'}>
            {/*Left section*/}
            <section className={'flex-1/2'}>
                <h1 className={'font-bold text-4xl sm:text-5xl mb-8'}>
                    A journey that expands
                    alongside your growth
                    and resources.
                </h1>

                <p className={'text-gray-700 dark:text-gray-300 mb-4'}>
                    Revolix is your total financial operating system that works
                    for you, your business and streamline overall crash flow
                    management.
                </p>

                <PrimaryButton cn={'bg-primary text-dark hover:bg-dark hover:text-primary'}>
                    Get Started
                </PrimaryButton>
            </section>

            {/*Right section*/}
            <section className={'flex-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center'}>
                {
                    offerData.map(({id, title, description, icon: Icon, color}) => (
                        <div key={id} className={'bg-light rounded-2xl p-4 flex flex-col gap-y-2'}>
                            <Icon size={42} style={{backgroundColor: color}} className={'p-2 rounded-full text-slate-800'}/>
                            <h1 className={'font-bold text-xl dark:text-gray-700'}>{title}</h1>
                            <p className={'text-gray-600'}>{description}</p>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default Offer;