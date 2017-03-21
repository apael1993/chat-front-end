/**
 * Created by Anushavan on 3/20/17.
 */


export class User {
    
    private username: string;
    private password: string;
    private email: string;


    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
    
    public getUsername(): string {
        return this.username;
    }
    
    public getPassword(): string {
        return this.password;
    }
    
    public setEmail(email: string) {
        this.email = email;
    }
    
    public getEmail(): string {
        return this.email;
    }
}