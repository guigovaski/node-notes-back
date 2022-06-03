import { Note } from '../models/Note';

export const NoteService = {
    
    async getAllNotes() {
        return await Note.findAll();
    },

    async findNoteById(id: string) {
        return await Note.findByPk(parseInt(id)); 
    },

    async createNote(title: string, body: string) {
        return await Note.create({
            title,
            body,
            createdAt: new Date()
        });
    },

    async updateNote(id: number, data: { title: string, body: string }) {
        return await Note.update(
            { title: data.title, body: data.body },
            { where: {id} }
        )
    },

    async deleteNote(id: string) {
        return await Note.destroy({ where: {id: parseInt(id)} });
    }   

}
