import { colorPalette, fonts } from '@/app/theme';
import styled from '@emotion/styled';

export const H1Heading = styled.h1`
    color: ${colorPalette.whiteGrey};
    font-family: ${fonts.basic};
    font-size: 25px;
    padding-bottom: 30px;
    letter-spacing: 2px;
`;

export const PDescription = styled.p`
    font-family: ${fonts.basic};
    font-size: 14px;
    color: ${colorPalette.whiteGrey};
    line-height: 25px;
    text-align: justify;
    padding-right: 20px;
    margin-top: -5px;
`;

export const DivIconWrapper = styled.div`
    width: 40px;
    height: 40px;
    border: 2px solid ${colorPalette.whiteGrey};
    border-radius: 10px;
    color: ${colorPalette.whiteGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        box-shadow: 0 0 10px ${colorPalette.whiteGrey};
    }
    :active {
        box-shadow: 0 0 15px ${colorPalette.whiteGrey};
        transition: 0.1s;
    }
`;
