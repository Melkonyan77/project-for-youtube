import {MdDashboard} from 'react-icons/md';
import{BiLink} from 'react-icons/bi';
import{HiOutlineMenuAlt1} from 'react-icons/hi';
import{MdOutlineEmojiEvents} from 'react-icons/md';
import{BsFillQuestionCircleFill} from 'react-icons/bs';
import{MdSettings} from 'react-icons/md';
import {RxEnvelopeClosed} from 'react-icons/rx';

export const asideobj = [
    {
        l : Math.random(),
        href : '#',
        text : 'Dashboard',
        icon : <MdDashboard />
    },
    {
        l : Math.random(),
        href : '#',
        text : 'Shortcuts',
        icon : <BiLink />
    },
    {
        l : Math.random(),
        href : '#',
        text : 'Overview',
        icon : <HiOutlineMenuAlt1 />
    },
    {
        l : Math.random(),
        href : '#',
        text : 'Events',
        icon : <MdOutlineEmojiEvents />
    },
    {
        l : Math.random(),
        href : '#',
        text : 'About',
        icon : <BsFillQuestionCircleFill />
    },
    {
        l : Math.random(),
        href : '#',
        text : 'Service',
        icon : <MdSettings />
    },
    {
        l : Math.random(),
        href : '#',
        text : 'Contact',
        icon : <RxEnvelopeClosed /> 
    },
]