import { Router } from 'express'
import { Request, Response } from 'express'
import axios from 'axios'

const router = Router()

router.get('/lorem', async (req: Request, res: Response) => {
  const { data } = await axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=json')
  res.json(data)
})

export default router
