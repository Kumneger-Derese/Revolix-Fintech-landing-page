import {stepsData} from "../constant/steps.js";

const Steps = () => {
    return (
        <div id={'how-it-works'} className={'mb-32'}>
            <h1 className={'font-bold w-full md:w-4/5 mx-auto text-4xl sm:text-5xl text-center mb-8'}>
                Boost your earnings with a savings
                account that yields
            </h1>

            <div className={'grid grid-cols-1 text-light sm:grid-cols-2 px-4 gap-4 md:grid-cols-3 place-items-center'}>
                {
                    stepsData.map((step) => (
                        <div key={step.id} className={'flex flex-col gap-y-2'}>
                            <div className={`${step.id === 2 && 'order-1 sm:order-2'} flex flex-col gap-y-3 rounded-2xl p-4`} style={{background: step.bgColor}}>
                                <h2 className={'text-2xl font-semibold'}>{step.title}</h2>
                                <p className={'text-gray-300'}>{step.content}</p>

                                <h1 className={'py-2 text-7xl self-end'}>{step.number}</h1>
                            </div>

                            <img src={step.img} alt={step.title}
                                 className={`w-full rounded-2xl object-cover h-80 items-center justify-center `}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Steps;