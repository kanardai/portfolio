import styled from '@emotion/styled';
import { CardType } from './ExpandingCards';
import { colorPalette, fonts, mediaSize } from '@/app/theme';

type PropsCard = {
    cardItem: CardType;
    onMouseOver: (activeCard: string) => void;
};

export const Card = (p: PropsCard) => {
    return (
        <DivPanel
            imgUrl={p.cardItem.imgUrl}
            active={p.cardItem.active}
            onMouseOver={() => p.onMouseOver(p.cardItem.title)}
        >
            <H3Panel active={p.cardItem.active}>{p.cardItem.title}</H3Panel>
        </DivPanel>
    );
};

type PropsPanel = {
    imgUrl: string;
    active: boolean;
};

const DivPanel = styled.div<PropsPanel>`
    background-image: url(${(props) => props.imgUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 40px;
    color: white;
    cursor: pointer;
    flex: ${(props) => (props.active ? '6' : '1')};
    margin: 10px;
    position: relative;
    transition: flex 0.7s ease-in;
    @media (${mediaSize.mediaMobile}) {
        flex: ${(props) => (props.active ? '10' : '1')};
        margin: 8px;
        height: 48vh;
    }
`;

type PropsH3Panel = {
    active: boolean;
};

const H3Panel = styled.h3<PropsH3Panel>`
    color: ${colorPalette.whiteGrey};
    font-family: ${fonts.basic};
    font-size: 24px;
    position: absolute;
    top: 90%;
    left: 30px;
    margin: 0;
    opacity: ${(props) => (props.active ? '1' : '0')};
    transition: opacity 0.3s 0.3s;
    @media (${mediaSize.mediaMobile}) {
        width: 60px;
        top: 85%;
        font-size: 18px;
    }
`;
