import {FaPeopleGroup, FaWallet} from "react-icons/fa6";
import { GoShieldLock } from "react-icons/go";
import { MdOutlineBusinessCenter } from "react-icons/md";

export const offerData = [
    {
        id: 1,
        icon: FaWallet,
        title: 'Free Transfers',
        description: `Experience truly free money transfers, no hidden costs.`,
        color: 'lightgreen'
    }, {
        id: 2,
        icon: FaPeopleGroup,
        title: 'Multiple Accounts',
        description: `Create multiple accounts to easily manage different 
        financial goals.`,
        color: 'yellow'
    }, {
        id: 3,
        icon: MdOutlineBusinessCenter,
        title: 'For Business',
        description: `Simplify operations and manage business finances with ease.`,
        color: 'pink'
    }, {
        id: 4,
        icon: GoShieldLock,
        title: 'Privacy Matters',
        description: `Because your privacy matters, we employ robust security measures.`,
        color: 'lightblue'
    },
]