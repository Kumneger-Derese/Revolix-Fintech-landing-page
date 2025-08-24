import PrimaryButton from "./PrimaryButton.jsx";
import Grid from '../assets/grid.png'

const Cta = () => {
    return (
        <div
            className={'bg-secondary relative overflow-hidden text-light mb-16 px-8 py-16 sm:p-16 flex flex-col gap-y-4 items-center justify-center'}>
            {/*Grid bg*/}
            <img src={Grid} alt={'bg'} className={'w-full opacity-50 absolute inset-0'}/>

            <div className={'relative'}>
                <h1 className={'text-4xl z-50 text-center sm:text-5xl font-bold '}>
                    Ready to level up your finances? <br/>
                    Join Revolix Today!
                </h1>

                <span
                    className={'absolute rounded-full py-0.5 px-2 text-sm left-8 -top-4 sm:top-0 -rotate-12 text-slate-950 bg-yellow-400'}>Cool</span>
                <span
                    className={'absolute rounded-full py-0.5 px-2 text-sm right-4 top-0 rotate-12 text-slate-950 bg-gray-200'}>Cool</span>
            </div>

            <p className={'text-primary/60 z-50 text-center w-full md:w-4/6'}>
                Revolix is your total financial operating system that works for you, your business
                and streamline overall cash flow management.
            </p>
            <div className={'z-10'}>
                <PrimaryButton cn={`bg-primary text-slate-900 hover:text-primary
                 hover:bg-slate-900  mt-8 sm:mt-0 transition-colors duration-500`}>
                    Get Started
                </PrimaryButton>
            </div>

        </div>
    );
};

export default Cta;