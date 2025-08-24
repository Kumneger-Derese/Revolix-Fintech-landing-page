import PrimaryButton from "./PrimaryButton.jsx";
import CradFeat1 from '../assets/cardfeat1.png'
import CradFeat2 from '../assets/cardFeat2.png'

const Features = () => {
    return (
        <div id={'features'} className={'mb-32'}>
            <h1 className={'text-center font-bold text-3xl sm:text-4xl mb-8'}>
                Feel the best experience <br/>
                with our features
            </h1>

            {/*Feature Container*/}
            <section className={'flex flex-col lg:flex-row gap-4 rounded-2xl'}>
                {/*Left Feature*/}
                <div
                    className={'flex-1/2 sm:flex-2/3 flex flex-col sm:flex-row gap-y-8 p-8 rounded-2xl border border-primary bg-primary/50'}>
                    <div className={'flex flex-col gap-y-4 flex-1 sm:flex-1/3'}>
                        <h2 className={'font-bold text-xl'}>Withdraw <br/>
                            anytime, With <br/>
                            your Visa
                        </h2>
                        <p className={'text-gray-700 dark:text-gray-300'}>
                            Access your money instantly,
                            whenever or wherever you need
                            it, directly with your Visa card.
                        </p>

                        <PrimaryButton cn={'bg-primary text-dark hover:bg-dark hover:text-primary'}>
                            Try Revolix
                        </PrimaryButton>
                    </div>

                    <div className={'flex-1 sm:flex-2/3 relative flex justify-center items-center'}>
                        <img src={CradFeat1} alt={'img'} className={'w-80 z-50'}/>

                        <img src={CradFeat2} alt={'img'} className={'w-64 rotate-12 absolute -right-12 -top-4 '}/>
                    </div>
                </div>

                {/*Right Feature*/}
                <div
                    className={'flex-1/2 sm:flex-1/3 p-8 flex flex-col gap-4 justify-center bg-lime-300 dark:bg-lime-500 border border-lime-600 rounded-2xl'}>
                    <h1 className={'text-3xl font-bold'}>
                        No Market Swings
                    </h1>

                    <p className={'text-gray-700 dark:text-gray-900'}>
                        Enjoy peace of mind with
                        investments that aren't subject
                        to market fluctuations.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Features;