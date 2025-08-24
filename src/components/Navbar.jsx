import {useTheme} from "../context/ThemeContext.jsx";
import {navLinks} from "../constant/navLinks.js";
import {HiOutlineMoon, HiOutlineSun, HiXMark} from "react-icons/hi2";
import {useState} from "react";
import {RiMenu5Fill} from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {toggleTheme, isDark} = useTheme();

    return (
        <div className={'px-8 bg-secondary text-light flex justify-between items-center pt-4'}>
            <h1 className={'font-black text-3xl text-primary '}>Revolix</h1>

            {/*Desktop Menu*/}
            <ul className={'hidden lg:flex items-center space-x-6'}>
                {
                    navLinks.map((link) => (
                        <button
                            onClick={() => {
                                const element = document.querySelector(link.href);
                                element.scrollIntoView({behavior: "smooth",  block:"center"});
                            }}
                            className={'hover:text-primary font-medium '}  key={link.id}>
                            {link.text}
                        </button>
                    ))
                }
            </ul>

            {/*Desktop Button Group*/}
            <div className={'hidden lg:flex items-center space-x-3'}>
                <button
                    className={'px-4 py-1.5 duration-300 transition-colors rounded-4xl border text-light dark:hover:text-slate-950 border-primary hover:bg-primary hover:border-transparent font-medium'}>Login
                </button>
                <button
                    className={'px-4 py-1.5 duration-300 transition-colors rounded-4xl bg-primary text-slate-950 border border-transparent hover:bg-transparent hover:border hover:border-primary hover:text-light  dark:hover:text-light font-medium'}>Sign
                    up
                </button>
                <button onClick={toggleTheme}
                        className={'size-9 p-1.5 rounded-full duration-300 transition-colors bg-primary flex items-center justify-center'}
                >
                    {
                        isDark ? <HiOutlineSun size={25}/> : <HiOutlineMoon size={25}/>
                    }
                </button>
            </div>


            {/*Mobile Menu trigger*/}
            <div className={'lg:hidden'}>
                <RiMenu5Fill onClick={() => setIsOpen(true)} size={28} strokeWidth={1.1}/>
            </div>

            {/*Mobile Menu*/}
            <div className={`lg:hidden transition-transform duration-500 flex flex-col gap-y-4 transform 
            bg-[#091400] h-full z-[200] fixed right-0 bottom-0 top-0 
            ${isOpen ? 'translate-x-0' : "translate-x-full"} w-1/2`}>
                <div className={'self-end p-4'}>
                    <HiXMark
                        size={28}
                        onClick={() => setIsOpen(false)}
                        className={'text-light my-4 hover:text-red-500'}/>
                </div>

                <ul className={'flex flex-col gap-y-4 items-start p-4'}>
                    {
                        navLinks.map((link) => (
                            <button
                                onClick={() => {
                                    const element = document.querySelector(link.href);
                                    setIsOpen(false);
                                    element.scrollIntoView({behavior: "smooth",  block:"nearest"});
                                }}
                                className={'hover:text-primary font-semibold'}  key={link.id}>
                                {link.text}
                            </button>
                        ))
                    }
                </ul>

                {/*Mobile Button Group*/}
                <div className={'lg:hidden flex flex-col space-y-4 px-4 sm:px-12 mt-4'}>
                    <button
                        className={'px-4 py-1.5 duration-300 transition-colors rounded-4xl border text-light dark:hover:text-slate-950 border-primary hover:bg-primary hover:border-transparent font-medium'}>Login
                    </button>
                    <button
                        className={'px-4 py-1.5 duration-300 transition-colors rounded-4xl bg-primary text-slate-950 border border-transparent hover:bg-transparent hover:border hover:border-primary hover:text-light  dark:hover:text-light font-medium'}>Sign
                        up
                    </button>
                    <button onClick={toggleTheme}
                            className={' py-1.5 px-4 text-slate-950 rounded-full duration-300 transition-colors bg-primary flex items-center justify-center'}
                    >
                        {
                            isDark ? <HiOutlineSun size={25}/> : <HiOutlineMoon size={25}/>
                        }
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Navbar;