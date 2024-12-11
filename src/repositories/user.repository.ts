import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model";


export class UserRepository {

    private collection: CollectionReference;
    constructor(){
        this.collection = getFirestore().collection("users");
    }

    async getAll(): Promise<User[]> {
        const snapshot = await this.collection.get();
        const users = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        }) as User[];
        return users;
        
    }

    async getById(id: string): Promise<User | null> {
        const doc = await this.collection.doc(id).get();
        if (doc.exists) {
            return {
                id: doc.id,
                ...doc.data()
            } as User;
        } else {
                return null;
        }
    }

    async save(use: User): Promise<void> {
        await this.collection.add(use);
    }

    async update(user: User) {
        let docRef = this.collection.doc(user.id);
        await docRef.set({
            nome: user.nome,
            email: user.email    
        });     
    }

    async delete(id: string) {
        await this.collection.doc(id).delete();
    }   
}