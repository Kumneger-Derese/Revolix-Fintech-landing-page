import {SiDiscover, SiPaypal, SiStripe, SiVisa} from "react-icons/si";
import Klarna from '../assets/company/klarna.png'
import Stripe from '../assets/company/stripe.png'
import Paypal from '../assets/company/paypal.png'

const Company = () => {
    return (
        <div className={'my-16 flex flex-col items-center justify-center overflow-x-hidden'}>
            <h3 className={'font-black text-center text-xl mb-4'}>Trusted by world leading companies</h3>
            <div className={'flex flex-wrap justify-center  space-x-8 items-center'}>
                <SiVisa size={56} />
                <img src={Stripe} alt="klarna" className={'size-16 dark:invert'} />
                <img src={Klarna} alt="klarna" className={'size-16 dark:invert'} />
                <SiDiscover size={96}/>
                <img src={Paypal} alt="klarna" className={'size-20 dark:invert'} />
            </div>
        </div>
    );
};

export default Company;