export class User {
    username: string;
    email: string;
    image: string;
    id: string;
    construtor(id: string, username:string, email: string, image: string) {
        this.username = username;
        this.email = email;
        this.image = image;
        this.id = id;
    }
}