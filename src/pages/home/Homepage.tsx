'use client';
import styled from '@emotion/styled';
import {
    DivContainer,
    DivHero,
    ImgHeroWrapper,
    colorPalette,
    mediaSize,
} from '@/app/theme';
import { useState } from 'react';
import { MainpageDataNames } from './mainpageData';
import heroImg from './images/hero.png';
import Separator from './components/Separator';
import Description from './components/Description';
import Projects from './components/Projects';
import Techstack from './components/Techstack';

export default function Homepage() {
    const [activeData, setActiveData] = useState<MainpageDataNames>(
        MainpageDataNames.WELCOME
    );
    const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false);

    function handleClick(btnValue: MainpageDataNames) {
        setTimeout(() => {
            setActiveData(btnValue);
        }, 350);
        setTriggerAnimation(true);
        setTimeout(() => {
            setTriggerAnimation(false);
        }, 1000);
    }

    return (
        <DivContainer>
            <DivHero timer={1.5}>
                <DivMain>
                    <DivMainContainer>
                        <Separator triggerAnimation={triggerAnimation} />
                        <Description activeData={activeData} />
                        <Projects handleClick={handleClick} />
                        <Techstack />
                    </DivMainContainer>
                </DivMain>
                <ImgHero
                    src={heroImg}
                    alt='home image'
                    loading='eager'
                    priority={true}
                />
            </DivHero>
        </DivContainer>
    );
}

const ImgHero = styled(ImgHeroWrapper)`
    box-shadow: 0.1vh 0 1.5vh ${colorPalette.yellow70},
        0px -1vh 2vh ${colorPalette.yellow40},
        -1vh 1vh 1.5vh ${colorPalette.violet70},
        0 0 1.5vh ${colorPalette.violet70}, 2.6px 5.3px 7.1px -1.3px black;
    outline: 1px solid ${colorPalette.greyBrownDark};
`;

const DivMain = styled.div`
    position: absolute;
    top: 11%;
    left: 335px;
    width: 540px;
    z-index: 1;
    @media (${mediaSize.mediaMobile}) {
        transform: scale(0.5) rotate(-90deg);
        left: 205px;
        top: 0px;
    }
`;

const DivMainContainer = styled.div`
    display: grid;
    grid-template-columns: 4% 73% 30%;
    grid-template-rows: auto;
    grid-template-areas:
        'separator description projects'
        'techstack techstack techstack';
`;
