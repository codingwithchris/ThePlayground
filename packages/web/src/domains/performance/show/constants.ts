export enum SHOW_TYPE {
    LIVE = 'live',
    VIRTUAL = 'virtual',
}

export enum SHOW_EVENT_STATUS {
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
}

export enum SHOW_STATUS {
    ACTIVE = 'active',
    FUTURE = 'future',
    PAST = 'archived',
    COMING_SOON = 'coming-soon',
    DEFAULT = 'unknown',
}

export const SHOW_STATUS_MESSAGE = {
    [SHOW_STATUS.PAST]: 'Archived',
    [SHOW_STATUS.ACTIVE]: 'Now Playing',
    [SHOW_STATUS.COMING_SOON]: 'Coming Soon',
    [SHOW_STATUS.FUTURE]: 'Future Show',
    [SHOW_STATUS.DEFAULT]: 'Status TBD',
};

export enum SHOW_RATING {
    PG = 'pg',
    PG13 = 'pg-13',
    R = 'r',
}

export enum PERFORMANCE_TICKET_TYPE {
    DOOR = 'door',
    EXTERNAL = 'external',
    INTERNAL = 'internal',
}

//  Specific messaging for each available ticket type
export const TICKET_TYPE_MESSAGE = {
    [PERFORMANCE_TICKET_TYPE.DOOR]: 'Tickets at Door',
    [PERFORMANCE_TICKET_TYPE.EXTERNAL]: 'Get Tickets',
    [PERFORMANCE_TICKET_TYPE.INTERNAL]: 'Unavailable',
};

export enum TICKET_AVAILABILITY_MESSAGE {
    UNAVAILABLE = 'Unavailable',
    AVAILABLE_SOON = 'Available Soon',
}

export enum PERFORMANCE_FEATURES {
    PWYW = 'pay-what-you-want',
    TALKBACK = 'talkback',
    PREVIEW = 'dress-preview',
}

export enum PERFORMANCE_STATUS {
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
    SOLD_OUT = 'sold-out',
}
