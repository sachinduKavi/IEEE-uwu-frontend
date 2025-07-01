export interface TeamMember {
    name: string;
    role: string;
    image: string;
}

export interface Team {
    name: string;
    members: TeamMember[];
}

export interface GalleryImage {
    src: string;
    caption: string;
}