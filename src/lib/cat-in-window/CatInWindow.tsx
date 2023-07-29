import styled from '@emotion/styled';
import { colorPalette } from './theme';
import { DivContainer, mediaSize } from '@/app/theme';
import NavigationBar from '@/components/navbar/NavigationBar';
import Mountain from './components/Mountain';
import Cat from './components/Cat';
import Sky from './components/Sky';


function CatInWindow() {
    return (
        <DivPageContainer>
            <NavigationBar />
            <DivImageContainer>
                <DivWindow>
                    <Mountain />
                    <Cat />
                    <Sky />
                </DivWindow>
            </DivImageContainer>
        </DivPageContainer>
    );
}

export default CatInWindow;

const DivPageContainer = styled(DivContainer)`
    background-image: radial-gradient(
        circle at center,
        ${colorPalette.purpleDark} 60%,
        black 200%
    );
    
`;

const DivImageContainer = styled.div`
    height: 530px;
    width: 350px;
    position: absolute;
    margin: auto;
    @media (${mediaSize.mediaMobile}) {
        transform: scale(0.5) rotate(-90deg);
    }
`;

const DivWindow = styled.div`
    width: 250px;
    height: 390px;
    background-color: ${colorPalette.lightViolet};
    outline: 12px solid ${colorPalette.darkViolet};
    border-left: 5px solid ${colorPalette.lavender};
    border-right: 5px solid ${colorPalette.lavender};
    position: relative;
    top: 20px;
    margin: auto;
    ::before,
    ::after {
        content: ' ';
        position: absolute;
        background: linear-gradient(
            ${colorPalette.lavender} 50%,
            ${colorPalette.darkViolet} 50%
        );
    }

    ::before {
        height: 15px;
        width: 300px;
        left: -30px;
        bottom: -15px;
    }
    ::after {
        height: 15px;
        width: 262px;
        left: -5px;
        top: 200px;
    }
`;
