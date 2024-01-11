export type Project = {
    id: string;
    title: string;
    description: string;
    tags: ETags[];
    imageNames: string[];
    isLocked: boolean;
    isHidden: boolean;
    links: string[];
    date: Date;
}

export type Tag = {
    name: ETags;
    isActive: boolean;
}

export enum ETags {
    UIUX = 'UI/UX',
    Development = 'Development',
    Branding = 'Branding',
}