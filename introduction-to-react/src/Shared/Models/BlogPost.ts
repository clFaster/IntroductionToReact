export type BlogPost = {
    id: number;
    title: string;
    subtitle: string | undefined;
    content: string;
    creationDate: Date;
}