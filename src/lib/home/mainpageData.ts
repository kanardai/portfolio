type MainpageDataTypes = {
    heading: string;
    description: string;
    gitlink?: string;
    webpagelink: string;
};

export enum MainpageDataNames {
    WELCOME = 'welcome',
    BOOTCAMP = 'bootcampPortfolio',
    BAM = 'byAllMeans',
    CARDS = 'expandingCards',
    CAT = 'catInWindow',
    SQUARE = 'square',
}

export const mainpageData: Record<MainpageDataNames, MainpageDataTypes> = {
    [MainpageDataNames.WELCOME]: {
        heading: `Welcome.`,
        description: `My name is Aneta, I'm front-end developer based in Czech Republic. This portfolio serves as a sample of small projects that I was tempted to try. At the same time, I always want to learn something new and stay up-to-date in my field. I enjoy playing with  graphics and tweaking the design to the last detail.`,
        gitlink: 'https://github.com/kanardai/portfolio',
        webpagelink: 'https://kanardai.netlify.app',
    },
    [MainpageDataNames.BAM]: {
        heading: `Job Interview Task`,
        description: `This is a simple React app created for a job interview. The task was to create a simple app that will display a list of shoes and their details. The app should be responsive and the data should be fetched from an API. I used React, Typescript, Styled Components and Figma for this project.`,
        gitlink: 'https://github.com/kanardai/by-all-means',
        webpagelink: 'https://bam-kanardai.netlify.app/create',
    },
    [MainpageDataNames.BOOTCAMP]: {
        heading: `Bootcamp Portfolio`,
        description: `During a very challenging bootcamp I created my own first React portfolio. In this bootcamp I learned everything I needed to be a junior developer for commercial work.`,
        gitlink: 'https://github.com/kanardai/smartbrains-bootcamp',
        webpagelink: 'https://github.com/kanardai/smartbrains-bootcamp',
    },
    [MainpageDataNames.CARDS]: {
        heading: `Expanding Cards`,
        description: `Simple image gallery created by playing with css styles.`,
        gitlink:
            'https://github.com/kanardai/portfolio/tree/main/src/lib/expanding-cards',
        webpagelink: '/cards',
    },
    [MainpageDataNames.CAT]: {
        heading: `Cat in window`,
        description: `ONLY CSS kitty animation.`,
        gitlink:
            'https://github.com/kanardai/portfolio/tree/main/src/lib/cat-in-window',
        webpagelink: '/cat',
    },
    [MainpageDataNames.SQUARE]: {
        heading: `Hover the Square`,
        description: `Easy React CSS app. Available only on desktop devices, because of hover effect. `,
        gitlink:
            'https://github.com/kanardai/portfolio/tree/main/src/lib/hover-square',
        webpagelink: '/square',
    },
};

export const iconNames = {
    react: 'react',
    next: 'nextjs',
    typescript: 'typescript',
    css: 'css',
    styled: 'styled',
    photo: 'photo',
    illustrator: 'illustrator',
    figma: 'figma',
};
