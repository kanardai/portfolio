import { colorPalette } from '@/app/theme';
import styled from '@emotion/styled';
import Image from 'next/image';

type PropsIcon = {
    imageName: string;
    imageHeight: number;
};

export default function Icon({ imageName, imageHeight }: PropsIcon) {
    const image = require(`../../images/${imageName}.png`);
    return (
        <DivIconWrapper>
            <Image src={image} alt='Techstack Icon' height={imageHeight} unoptimized={true} />
        </DivIconWrapper>
    );
}

const DivIconWrapper = styled.div`
    min-width: 40px;
    height: 40px;
    border: 2px solid ${colorPalette.whiteGrey};
    border-radius: 10px;
    color: ${colorPalette.whiteGrey};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;
