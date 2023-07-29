'use client';
import styled from '@emotion/styled';
import BtnWelcome from '@/lib/landing-page/components/BtnWelcome';

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
    'https://kanardai-portfolio.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.57d34816.png&w=1920&q=75',
    'https://kanardai-portfolio.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.601383ef.png&w=1920&q=75',
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
