import styled from '@emotion/styled';
import { useState } from 'react';
import { Card } from './Card';
import { imgUrls, cardTitles } from './CardData';
import { DivContainer, mediaSize } from '@/app/theme';
import NavigationBar from '../../components/navbar/NavigationBar';

export type CardType = {
    imgUrl: string;
    title: string;
    active: boolean;
};

const cardListDefault: CardType[] = cardTitles.map((title, index) => {
    return {
        imgUrl: imgUrls[index],
        title: cardTitles[index],
        active: false,
    };
});

export const ExpandingCards = () => {
    const [cardList, setCardList] = useState(cardListDefault);

    const activeHandler = (activeCard: string) => {
        const activeCardIndex = cardList.findIndex(
            (cardItem) => cardItem.title === activeCard
        );

        const newStateCardList = cardList.map((obj, index) => {
            if (index === activeCardIndex) {
                return { ...obj, active: true };
            }
            return { ...obj, active: false };
        });
        setCardList(newStateCardList);
    };

    return (
        <DivContainer>
            <NavigationBar />
            <DivGallery>
                {cardList.map((cardItem, index) => (
                    <Card
                        cardItem={cardItem}
                        key={index}
                        onMouseOver={activeHandler}
                    />
                ))}
            </DivGallery>
        </DivContainer>
    );
};

const DivGallery = styled.div`
    display: flex;
    width: 90vw;
    @media (${mediaSize.mediaMobile}) {
        transform: rotate(-90deg);
    }
`;
