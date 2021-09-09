import { Router } from 'express'

import { createNewBootcamp, deleteBootcampById, updateBootcampById, getAllBootcamps } from '../controllers/bootcampControllers.js'

const router = Router()

router.route('/')
    .get(getAllBootcamps)
    .post(createNewBootcamp)

router.route('/:id')
    .put(updateBootcampById)
    .delete(deleteBootcampById)

export default router