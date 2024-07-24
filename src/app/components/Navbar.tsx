"use client";
import { useState } from "react";
import Logo from './Logo';
import { LuLink } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { useRouter } from 'next/navigation';

interface TabState {
    name: string;
    clicked: boolean;
    icon: React.ReactNode;
    navigation: string;
}

const Navbar = () => {
    const [tabs, setTabs] = useState<TabState[]>([
        {
            name: "Links",
            icon: <LuLink />,
            clicked: true,
            navigation: "/",
        },
        {
            name: "Profile Details",
            icon: <CgProfile />,
            clicked: false,
            navigation: "/profile",
        },
    ]);

    const router = useRouter();

    const handleTabClick = (name: string, navigation: string) => {
        setTabs((prevState) =>
            prevState.map((state) => ({
                ...state,
                clicked: state.name === name,
            }))
        );
        router.push(navigation);
    };

    return (
        <div className='flex justify-between items-center bg-white rounded-[12px] p-4'>
            <Logo />
            <div className='flex gap-4 items-center'>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-2 py-3 px-7 font-semibold text-lg cursor-pointer ${tab.clicked ? 'tabs-active' : 'tabs-default hover:tabs-hover'}`}
                        onClick={() => handleTabClick(tab.name, tab.navigation)}
                    >
                        <span className={`text-2xl ${tab.clicked ? 'fill-dev-purple' : 'hover:fill-dev-purple'}`}>{tab.icon}</span>
                        <span>{tab.name}</span>
                    </div>
                ))}
            </div>
            <div className='button-secondary-default hover:button-secondary-active py-3 px-7 font-semibold text-lg cursor-pointer'>Preview</div>
        </div>
    );
}

export default Navbar;
