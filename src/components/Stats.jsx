import {statsData} from "../constant/stats.js";
import UiFace1 from '../assets/uiface1.jpg'
import UiFace2 from '../assets/uiface2.jpg'
import UiFace3 from '../assets/uiface3.jpg'


const Stats = () => {
    return (
        <div className={'px-12 py-20 mb-32 bg-secondary dark:bg-secondary  flex flex-col justify-center '}>
            {/*Start of header*/}
            <div className={'flex flex-col mb-8 text-center justify-center'}>
                <h1 className={'font-bold text-3xl sm:text-4xl text-light '}>
                    Less stress more
                </h1>

                <div className={'flex justify-center items-center flex-wrap'}>
                    <h1 className={'font-bold text-3xl sm:text-4xl text-light '}>
                        success
                    </h1>

                    {/*image stack*/}
                    <div className={'flex mx-2 items-baseline -space-x-2 '}>
                        <div className={'size-10'}>
                            <img src={UiFace1} alt={'uiImages'} className={'rounded-full border-2 border-light w-full'}/>
                        </div>

                        <div className={'size-10'}>
                            <img src={UiFace3} alt={'uiImages'} className={'rounded-full border-2 border-light w-full'}/>
                        </div>

                        <div className={'size-10'}>
                            <img src={UiFace2} alt={'uiImages'} className={'rounded-full border-2 border-light w-full'}/>
                        </div>
                    </div>
                    <h1 className={'font-bold text-3xl sm:text-4xl  text-light '}>
                        with Revolix
                    </h1>
                </div>

            </div>
            {/*End of header*/}

            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'}>
                {
                    statsData.map((stat) => (
                        <div key={stat.id}
                             className={'flex flex-col gap-y-3 bg-light  dark:text-slate-950 rounded-2xl p-8 items-center justify-center'}>
                            <h1 className={'text-6xl font-bold'}>{stat.percent}</h1>
                            <p>{stat.details}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Stats;