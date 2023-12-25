export type Project = {
    id: string;
    title: string;
    description: string;
    tags: ETags[];
    imagesUrls: string[];
    isLocked: boolean;
    isHidden: boolean;
    createdOn: Date;
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