import { colorPalette, fonts, mediaSize } from '@/app/theme';
import styled from '@emotion/styled';

import Link from 'next/link';

function BtnWelcome() {
    return (
        <DivBorder>
            <LinkWelcome href={'/home'}>welcome</LinkWelcome>
        </DivBorder>
    );
}

export default BtnWelcome;

const LinkWelcome = styled(Link)`
    position: absolute;
    top: 1px;
    left: 1px;
    border-radius: 15px;
    margin: auto;
    padding: 14px 33px;
    color: ${colorPalette.cyanLight};
    font-size: 20px;
    font-family: ${fonts.basic};
    text-decoration: none;
    transition: 0.4s;
    letter-spacing: 2px;
    background-color: ${colorPalette.greyDark};
    font-weight: bolder;

    :hover {
        background: ${colorPalette.cyanLight};
        color: #fff;
        border-radius: 15px;
        box-shadow: 0 0 5px ${colorPalette.cyanLight},
            0 0 15px ${colorPalette.cyanLight},
            0 0 35px ${colorPalette.cyanLight};
    }
    :active {
        transform: scale(0.9);
    }
`;

const DivBorder = styled.div`
    position: absolute;
    display: block;
    top: 300px;
    left: 47px;
    display: block;
    height: 53px;
    width: 161px;
    border-radius: 17px;

    background: linear-gradient(
        to right,
        ${colorPalette.greyDark} 20%,
        ${colorPalette.greyDark} 40%,
        ${colorPalette.cyanLight} 50%,
        ${colorPalette.cyanLight} 55%,
        ${colorPalette.greyDark} 70%,
        ${colorPalette.greyDark} 100%
    );
    :active {
        background: none;
    }
    background-size: 200% auto;
    animation: shine 1.5s linear infinite;

    @keyframes shine {
        to {
            background-position: 200% center;
        }
    }
    @media (${mediaSize.mediaMobile}) {
        transform: scale(0.5) rotate(-90deg);
        top: 423px;
        left: 430px;
    }
`;
