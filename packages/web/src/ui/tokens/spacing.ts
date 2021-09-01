export const componentSpacing = {
    xxs: '4px',
    xs: '8px',
    s: '12px',
    m: '16px',
    l: '24px',
    xl: '32px',
    xxl: '48px',
    xxxl: '64px',
};

export const layoutSpacing = {
    xs: '32px',
    s: '48px',
    m: '64px',
    l: '96px',
    xl: '160px',
    xxl: '240px',
};

export const spacing = {
    component: {
        ...componentSpacing,
    },
    layout: {
        ...layoutSpacing,
    },
    // We are temporarily accounting for header offset here on desktop until we find a better solution
    // * Idea... create a provider that tracks the height of the header and header UI state
    appHeaderOffset: '91px',
};

export type Spacing = typeof spacing;
export type AvailableSpacing = keyof Spacing;

export type ComponentSpacing = typeof componentSpacing;
export type AvailableComponentSpacing = keyof ComponentSpacing;

export type LayoutSpacing = typeof layoutSpacing;
export type AvailableLayoutSpacing = keyof LayoutSpacing;
