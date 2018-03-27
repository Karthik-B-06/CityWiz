export class User {
    displayName: string;
    imageUrl: string;
    email: string;

    constructor(displayName: string, imageUrl: string, email: string) {
        this.displayName = displayName;
        this.email = email;
        this.imageUrl = imageUrl;
    }
}