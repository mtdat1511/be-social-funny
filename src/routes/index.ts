import { Router } from 'express'
import Test from './test'

const router = Router()
router.use('/test', Test)
export default router
