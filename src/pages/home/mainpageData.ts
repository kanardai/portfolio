type MainpageDataTypes = {
    heading: string;
    description: string;
    gitlink?: string;
    webpagelink: string;
};

export enum MainpageDataNames {
    WELCOME = 'welcome',
    BOOTCAMP = 'bootcampPortfolio',
    CARDS = 'expandingCards',
    CAT = 'catInWindow',
   
}

export const mainpageData: Record<MainpageDataNames, MainpageDataTypes> = {
    [MainpageDataNames.WELCOME]: {
        heading: `Welcome.`,
        description: `My name is Aneta, I'm front-end developer based in Czech Republic. This portfolio serves as a sample of small projects that I was tempted to try. At the same time, I always want to learn something new and stay up-to-date in my field. I enjoy playing with  graphics and tweaking the design to the last detail.`,
        gitlink: 'https://github.com/kanardai',
        webpagelink: 'https://www.kanardai.eu',
    },
    [MainpageDataNames.BOOTCAMP]: {
        heading: `Bootcamp Portfolio`,
        description: `During a very challenging bootcamp I created my own first React portfolio. In this bootcamp I learned everything I needed to be a junior developer for commercial work.`,
        gitlink: 'https://github.com/kanardai/smartbrains-ita',
        webpagelink: 'https://www.kanardai.eu/bootcamp',
    },
    [MainpageDataNames.CARDS]: {
        heading: `Expanding Cards`,
        description: `Simple image gallery created by playing with css styles.`,
        gitlink:
            'https://github.com/kanardai/portfolio/tree/master/src/components/expanding-cards',
        webpagelink: '/cards',
    },
    [MainpageDataNames.CAT]: {
        heading: `Cat in window`,
        description: `ONLY CSS kitty animation.`,
        gitlink:
            'https://github.com/kanardai/portfolio/tree/master/src/components/cat-in-window',
        webpagelink: '/cat',
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
