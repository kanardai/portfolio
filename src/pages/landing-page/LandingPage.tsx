'use client';
import styled from '@emotion/styled';
import BtnWelcome from '@/pages/landing-page/components/BtnWelcome';

import {
    DivContainer,
    DivHero,
    ImgHeroWrapper,
    colorPalette,
    fonts,
    mediaSize,
} from '@/app/theme';
import heroImg from './images/hero.png';
import imgCache from '@/utils/imgCache';
import Welcome from '@/components/welcome/Welcome';

const images = [
    'https://github.com/kanardai/portfolio/blob/master/public/images/home/hero.png?raw=true',
    'https://github.com/kanardai/portfolio/blob/master/public/images/landing-page/hero.png?raw=true',
];

export default function LandingPage() {
    imgCache(images);

    return (
        <DivContainer>
            <Welcome />
            <DivHero timer={7}>
                <ImgHero
                    src={heroImg}
                    alt='landingImage'
                    loading='eager'
                    priority={true}
                />

                <DivHeader>
                    Frontend ‎
                    <br />
                    developer ‎ ‎
                    <br />
                    portfolio
                </DivHeader>

                <BtnWelcome />
            </DivHero>
        </DivContainer>
    );
}

const ImgHero = styled(ImgHeroWrapper)`
    box-shadow: 0.1vh 0 5vh 0 ${colorPalette.yellow70},
        0px -2vh 7vh ${colorPalette.yellow40},
        -2vh 1vh 3vh ${colorPalette.violet70}, 0 0 7vh ${colorPalette.violet70},
        2.6px 5.3px 7.1px -1.3px black;
    outline: 0.5vh solid ${colorPalette.greyBrownDark};
`;

const DivHeader = styled.div`
    position: absolute;
    left: 45px;
    top: 91px;
    color: ${colorPalette.cyanLight};
    font-family: ${fonts.basic};
    font-weight: bolder;
    text-align: right;
    font-size: 33px;
    line-height: 45px;
    letter-spacing: 1px;
    @media (${mediaSize.mediaMobile}) {
        transform: scale(0.5) rotate(-90deg);
        top: 380px;
        left: 333px;
    }
`;
