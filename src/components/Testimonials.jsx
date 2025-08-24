import {useEffect, useState} from "react";
import {FaQuoteLeft} from "react-icons/fa6";
import PrimaryButton from "./PrimaryButton.jsx";
import {testimonialsData} from "../constant/testimonials.js";
import {HiChevronLeft, HiChevronRight} from "react-icons/hi2";

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const testimonial = testimonialsData[currentIndex]

    const nextTestimonial = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(prevIndex =>
            prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
    }

    const prevTestimonial = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setCurrentIndex(prevIndex =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 500)

        return () => {
            clearTimeout(timer);
        }
    }, [currentIndex])

    return (
        <div id={'testimonials'} className={'mb-32 mx-auto w-full sm:w-5/6'}>
            <h1 className={'font-bold text-4xl mb-8 w-full lg:w-3/6 mx-auto text-center'}>
                Take a good look to our
                successful stories
            </h1>

            <div className={' bg-stone-200'}>

                <section className={`transition-transform duration-500 ease-in-out
             ${isTransitioning ? 'opacity-40' : "opacity-100"} rounded-xl p-4 flex flex-col sm:flex-row gap-8`}>
                    <div className={`flex-1/3 relative`}
                         key={testimonial.id}>
                        <img src={testimonial.img} alt={testimonial.name}
                             className={'rounded-xl max-h-64 object-cover  size-full'}/>

                        <div
                            className={'flex flex-col items-center rounded-t-full  mask-t-to-14 w-full z-20 bg-secondary/80 text-light absolute bottom-0'}>
                            <h2 className={'font-bold'}>{testimonial.name}</h2>
                            <p className={'font-normal'}>{testimonial.position}</p>
                        </div>
                    </div>
                    <div className={'flex-2/3 flex flex-col justify-between'}>
                        <FaQuoteLeft className={'text-secondary mt-6'} size={24}/>
                        <p className={'dark:text-slate-700 font-medium'}>{testimonial.quote}</p>
                        <div className={'bg-slate-400 h-[1px] w-full '}/>
                        <div className={'flex justify-between items-center py-8 md:my-0'}>
                            <PrimaryButton cn={`bg-secondary text-light/90 hover:bg-primary  hover:text-dark
                         duration-500 transition-colors`}>
                                View case Study
                            </PrimaryButton>

                            <div className={'flex gap-x-2 items-center'}>
                                <button onClick={prevTestimonial} className={`rounded-full size-9 flex items-center justify-center transition-colors duration-500 
                              p-1 bg-light text-slate-900 hover:bg-dark hover:text-light border border-slate-900
                              cursor-pointer`}>
                                    <HiChevronLeft size={24} strokeWidth={1.5}/>
                                </button>

                                <button onClick={nextTestimonial} className={`rounded-full size-9 flex items-center justify-center transition-colors duration-500 
                              p-1 bg-light text-slate-900 hover:bg-dark hover:text-light border border-slate-900
                              cursor-pointer`}>
                                    <HiChevronRight size={24} strokeWidth={1.5}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default Testimonials;