import {footerLinks} from "../constant/footer.js";
import {BiPaperPlane} from "react-icons/bi";
import {FaBluesky, FaLinkedinIn, FaTiktok, FaXTwitter} from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <section className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-16 p-8'}>
                {
                    footerLinks.map(link => (
                        <div key={link.id} className={'flex flex-col gap-3'}>
                            <h1 className={'font-bold mb-2 text-xl text-secondary dark:text-primary'}>{link.title}</h1>
                            <div className={'flex flex-col gap-3'}>
                                {
                                    link.links.map((item, index) => (
                                        <p key={index}>{item}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }

                <div className={'flex flex-col gap-4'}>
                    <h1 className={'font-bold mb-2 text-xl text-secondary dark:text-primary'}>
                        Join Our Newsletter
                    </h1>

                    <div className={'flex items-center dark:text-slate-800 relative '}>
                        <input type="text"
                               placeholder={'Enter email address'}
                               className={'px-4  py-2 placeholder:text-sm w-full rounded-full bg-stone-300'}/>
                        <button
                            className={'absolute flex items-center justify-center  right-1 bg-lime-500 p-1 rounded-full'}>
                            <BiPaperPlane size={26}/>
                        </button>
                    </div>

                    <div className={'flex items-center gap-x-6'}>
                        <p>Follow us on:</p>
                        <div className={'flex items-center gap-x-4'}>
                            <FaXTwitter/>
                            <FaTiktok/>
                            <FaBluesky/>
                            <FaLinkedinIn/>
                        </div>
                    </div>
                </div>
            </section>

            {/*Footer end*/}
            <div
                className={'border-t border-t-gray-300 dark:border-t-gray-500  gap-4 p-4 flex flex-col sm:flex-row items-center justify-between'}>
                <p>&copy; Revolix Inc 2025 | All Rights Reserved</p>

                <div className={'flex flex-row gap-4 items-center'}>
                    <p>Privacy</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;