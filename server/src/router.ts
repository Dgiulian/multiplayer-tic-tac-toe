import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ hello: 'Hello' });
});

router.post('/create', (req: Request, res: Response) => {});

export default router;
