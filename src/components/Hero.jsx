import GridBg from '../assets/grid.png'
import PrimaryButton from "./PrimaryButton.jsx";
import {HiOutlineInformationCircle} from "react-icons/hi2";
import Card from '../assets/card.png'

const Hero = () => {
    return (
        <div className={'px-8 pb-16 relative gap-y-24 flex flex-col sm:flex-row pt-28 bg-secondary text-light '}>
            {/*Bg grid*/}
            <img
                src={GridBg}
                alt={'GridBg'}
                className={'absolute backdrop-opacity-90 opacity-30 inset-0 size-full object-cover'}/>

            {/*Right Section*/}
            <section className={'flex-1/2 flex flex-col gap-y-4 z-10'}>
                <h1 className={'text-5xl sm:text-6xl font-bold '}>
                    Get paid early.<br/> Access your <br/> earnings sooner.
                </h1>
                <p className={'lg:mr-8 sm:mr-4  text-primary/70'}>
                    Supporting small businesses with simple payment solutions
                    powerful integrations, and cash flow management tools.
                </p>

                <PrimaryButton cn={'bg-primary text-dark hover:bg-dark hover:text-primary'}>
                    Get Started
                </PrimaryButton>
            </section>

            {/*Left Section*/}
            <section className={'flex-1/2 relative scale-90 sm:scale-100 flex items-center justify-center z-50'}>
                <img src={Card} alt="card" className={'w-48 border-2 border-light h-64 absolute -top-16 -right-8 shadow-md shadow-primary sm:right-0 lg:right-8 rounded-3xl'} />
                <div
                    className={'bg-light text-dark p-4  text-shadow-secondary w-80 minh-80 flex flex-col gap-y-4 rounded-xl'}>
                    <h1 className={'font-bold text-2xl'}>
                        Transfer Balance
                    </h1>

                    {/*Send*/}
                    <div className={'p-2 border border-slate-300 rounded-xl flex justify-between items-center'}>
                        <div className={'flex flex-col gap-y-1 p-1'}>
                            <h2 className={'font-medium '}>You sent</h2>
                            <p className={'font-bold text-xl'}>&euro; 1,000</p>
                        </div>

                        <div className={'border px-4 py-1 rounded-xl border-slate-300'}>
                            Euro
                        </div>
                    </div>

                    {/*Receive*/}
                    <div className={'p-2 border border-slate-300 rounded-xl flex justify-between items-center'}>
                        <div className={'flex flex-col gap-y-1 p-1'}>
                            <h2 className={'font-medium '}>Recipient gets</h2>
                            <p className={'font-bold text-xl'}>$ 1,136.85</p>
                        </div>

                        <div className={'border px-4 py-1 rounded-xl border-slate-300'}>
                            Dollar
                        </div>
                    </div>


                    {/*Platform  Details*/}
                    <div className={'flex flex-col gap-y-2 mt-4'}>
                        <div className={'flex justify-between'}>
                            <div className={'flex gap-x-2 items-center'}>
                                <p>Platform fee</p> <HiOutlineInformationCircle/>
                            </div>

                            <h1 className={'font-bold'}>$0</h1>
                        </div>

                        <div className={'flex justify-between'}>
                            <p>Estimated arrival</p>
                            <p>Tomorrow</p>
                        </div>
                    </div>

                    <button className={`w-full p-4 rounded-xl hover:bg-slate-950 font-bold bg-dark duration-500 transition-colors 
                     hover:text-primary text-light `}>
                        Send Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Hero;