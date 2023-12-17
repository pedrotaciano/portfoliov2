export interface Project {
    id: string;
    title: string;
    tags: string[];
    isLocked: boolean;
    isHidden: boolean;
    createdOn: Date;
}