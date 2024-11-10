import config from '../config/config'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const user = await this.account.create(ID.unique() ,email, password, name);
            if (user) {
                // call login method
                return this.login({email, password});
            }
            else {
                return user;
            }
        }
        catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch (error) {
            throw error;
        }
    }

    async getcurrentUser() {
        try {
            return await this.account.get();
        }
        catch (error) {
            console.log('Appwrite service :: getcurrentUser :: error', error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        }
        catch (error) {
            console.log('Appwrite service :: logout :: error', error);
        }
    }
}

const authService = new AuthService()

export default authService