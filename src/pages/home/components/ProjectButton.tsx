import styled from '@emotion/styled';
import { colorPalette, fonts } from '@/app/theme';
import { MainpageDataNames, mainpageData } from '../mainpageData';

type PropsProjectButton = {
    name: MainpageDataNames;
    btnValue: MainpageDataNames;
    handleClick: (btnValue: MainpageDataNames) => void;
};

function ProjectButton({ name, btnValue, handleClick }: PropsProjectButton) {
    return (
        <DivWrapperButton onClick={() => handleClick(btnValue)}>
            <DivProjectButton>{mainpageData[name].heading}</DivProjectButton>
        </DivWrapperButton>
    );
}

export default ProjectButton;

const DivWrapperButton = styled.div`
    font-family: ${fonts.basic};
    display: flex;
    flex-direction: column;
    color: ${colorPalette.whiteGrey};
    font-size: ${fonts.sizes.normal};
    cursor: pointer;
`;

const DivProjectButton = styled.div`
    position: relative;
    width: 160px;
    height: 14px;
    margin-bottom: 11px;
    border-right: 4px solid ${colorPalette.whiteGrey};
    transition: 200ms;
    :hover {
        border-width: 25px;
    }
    :active {
        border-width: 4px;
    }
`;
