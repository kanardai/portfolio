'use client';
import styled from '@emotion/styled';
import HomeIcon from './components/HomeIcon';
import GitIcon from './components/GitIcon';
import { useState } from 'react';
import { DivNavIcon, zIndex } from './theme';
import MenuIcon from './components/MenuIcon';
import Link from 'next/link';

function NavigationBar() {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <DivNavigation>
            <DivToggle onClick={handleClick} isActive={isActive}>
                <MenuIcon />
            </DivToggle>

            <DivNavIcon isActive={isActive} xAxis={140}>
                <Link href={'https://github.com/kanardai/portfolio/'}>
                    <GitIcon />
                </Link>
            </DivNavIcon>

            <DivNavIcon isActive={isActive} xAxis={70}>
                <Link href='/home'>
                    <HomeIcon />
                </Link>
            </DivNavIcon>
        </DivNavigation>
    );
}

export default NavigationBar;

const DivNavigation = styled.div`
    position: absolute;
    top: 20px;
    left: calc(50%-20px);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 50%;
`;

type PropsToggle = {
    isActive: boolean;
};
const DivToggle = styled.div<PropsToggle>`
    position: absolute;
    border-radius: 50%;
    z-index: ${zIndex.menu};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.8s;
    transform: ${(props) =>
        props.isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
`;
