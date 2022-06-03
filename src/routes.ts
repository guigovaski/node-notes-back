import { Router } from 'express';

import NotesController from './app/controllers/NotesController';

const router = Router();

router.get('/notes', NotesController.index);
router.post('/notes', NotesController.store);
router.get('/notes/:id', NotesController.find);
router.patch('/notes/:id', NotesController.update);
router.delete('/notes/:id', NotesController.destroy);

export default router;
