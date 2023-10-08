import styled from '@emotion/styled';

import { H1Heading } from '../theme';
import ProjectButton from './ProjectButton';
import { MainpageDataNames } from '../mainpageData';

type PropsHandleClick = {
    handleClick: (btnValue: MainpageDataNames) => void;
};

function Projects({ handleClick }: PropsHandleClick) {
    return (
        <DivProjects>
            <H1Heading>Projects</H1Heading>

            <ProjectButton
                name={MainpageDataNames.WELCOME}
                btnValue={MainpageDataNames.WELCOME}
                handleClick={handleClick}
            />
            <ProjectButton
                name={MainpageDataNames.BAM}
                btnValue={MainpageDataNames.BAM}
                handleClick={handleClick}
            />
            <ProjectButton
                name={MainpageDataNames.BOOTCAMP}
                btnValue={MainpageDataNames.BOOTCAMP}
                handleClick={handleClick}
            />
            <ProjectButton
                name={MainpageDataNames.CARDS}
                btnValue={MainpageDataNames.CARDS}
                handleClick={handleClick}
            />
            <ProjectButton
                name={MainpageDataNames.CAT}
                btnValue={MainpageDataNames.CAT}
                handleClick={handleClick}
            />
            <ProjectButton
                name={MainpageDataNames.SQUARE}
                btnValue={MainpageDataNames.SQUARE}
                handleClick={handleClick}
            />
        </DivProjects>
    );
}

export default Projects;

const DivProjects = styled.div`
    grid-area: 'projects';
`;
