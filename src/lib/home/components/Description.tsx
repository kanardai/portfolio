'use client';
import styled from '@emotion/styled';
import { H1Heading, PDescription } from '../theme';
import GitIcon from './icons/GitIcon';
import WebpageIcon from './icons/WebpageIcon';
import { MainpageDataNames, mainpageData } from '../mainpageData';

type PropsDescription = {
    activeData: MainpageDataNames;
};

export default function Description({ activeData }: PropsDescription) {
    return (
        <DivDescription>
            <SectionDescription>
                <H1Heading data-name='H1Heading'>
                    {mainpageData[activeData].heading}
                </H1Heading>
                <PDescription data-name='PDescription'>
                    {mainpageData[activeData].description}
                </PDescription>
            </SectionDescription>

            <SectionLinks>
                <>
                    <WebpageIcon
                        webpageUrl={mainpageData[activeData].webpagelink}
                    />
                    <GitIcon gitUrl={mainpageData[activeData].gitlink} />
                </>
            </SectionLinks>
        </DivDescription>
    );
}

const DivDescription = styled.div`
    z-index: 9;
    grid-area: 'description';
    height: 270px;
    width: 360px;
    padding-left: 12px;
`;

const SectionDescription = styled.section`
    height: 200px;
`;

const SectionLinks = styled.section`
    display: flex;
    margin-top: 20px;
    width: 100px;
    justify-content: space-between;
`;
