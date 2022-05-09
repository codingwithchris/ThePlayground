export enum SPONSOR_TYPE {
    PERSON = 'person',
    COMPANY = 'company',
}

export enum SPONSORSHIP_LEVEL {
    BE_BOLD = 'beBold',
    BE_GRITTY = 'beGritty',
    BE_AUDACIOUS = 'beAudacious',
    BE_GUTSY = 'beGutsy',
}

export enum SPONSORSHIP_SCOPE {
    SEASON = 'season',
    SHOW = 'show',
}

export const SPONSORSHIP_LEVEL_DISPLAY = {
    [SPONSORSHIP_LEVEL.BE_BOLD]: '#BeBold',
    [SPONSORSHIP_LEVEL.BE_GRITTY]: '#BeGritty',
    [SPONSORSHIP_LEVEL.BE_AUDACIOUS]: '#BeAudacious',
    [SPONSORSHIP_LEVEL.BE_GUTSY]: '#BeGutsy',
};
