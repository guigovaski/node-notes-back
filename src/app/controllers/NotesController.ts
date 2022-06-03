import { Request, Response } from 'express';
import { NoteService } from '../services/NotesService';

class NotesController {

    async index(req: Request, res: Response) {
        const notes = await NoteService.getAllNotes();
        
        if (notes.length < 1) return res.json({error: 'Não há notas para mostrar'});

        res.json(notes);
    }

    async find(req: Request, res: Response) {
        let { id } = req.params;
        
        const note = await NoteService.findNoteById(id);

        if (!note) return res.json({error: 'Nota não existe'});
    
        res.json(note);
    }

    async store(req: Request, res: Response) {
        let { title, body } = req.body;

        if (!title || !body) return res.json({error: 'Preencha os campos corretamente'});

        try {
            const newNote = await NoteService.createNote(title, body);
            res.json(newNote);
        } catch(error) {
            console.log(error);
            res.json({error});
        }
    }

    async update(req: Request, res: Response) {
        let { id } = req.params;
        let { title, body } = req.body;
        
        const note = await NoteService.findNoteById(id);
        
        if (!note) return res.json({error: 'Nota não existe'});
        
        try {
            if (title) note.title = title;
            if (body) note.body = body;
            if (body || title) note.createdAt = new Date();
            await note.save();
            await note.reload();
            res.json(note);
        } catch(error) {
            console.log(error);
            res.json({error})
        }
    }

    async destroy(req: Request, res: Response) {
        let { id } = req.params;

        const note = await NoteService.findNoteById(id);

        if (!note) return res.json({error: 'Nota não existe'});
    
        await NoteService.deleteNote(id);

        res.json({success: true});
    }

} 

export default new NotesController();
