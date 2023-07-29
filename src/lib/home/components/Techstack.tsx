import styled from '@emotion/styled';
import { H1Heading } from '../theme';
import { iconNames } from '../mainpageData';
import Icon from '../../../lib/home/components/icons/Icon';
import GitIcon from '../../../lib/home/components/icons/GitIcon';

export default function Techstack() {
    return (
        <DivTechstack>
            <H1Heading>Techstack</H1Heading>
            <DivIcons data-name='DivIcons'>
                <Icon imageName={iconNames.react} imageHeight={40} />
                <Icon imageName={iconNames.next} imageHeight={30} />
                <Icon imageName={iconNames.typescript} imageHeight={28} />
                <Icon imageName={iconNames.css} imageHeight={34} />
                <Icon imageName={iconNames.styled} imageHeight={40} />
                <Icon imageName={iconNames.figma} imageHeight={28} />
                <Icon imageName={iconNames.photo} imageHeight={44} />
                <Icon imageName={iconNames.illustrator} imageHeight={56} />
            </DivIcons>
        </DivTechstack>
    );
}

const DivTechstack = styled.div`
    grid-area: 'techstack';
    margin-top: 40px;
`;

const DivIcons = styled.div`
    display: flex;
`;
