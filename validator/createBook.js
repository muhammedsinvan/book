
import { body } from "express-validator";

const validate =[
    
            body('book', 'Please fill the field').notEmpty(),
            body('author', 'Please fill the field').notEmpty().matches(/^[A-Za-z\s]+$/).withMessage('Name must be alphabetic.'),
]

export {validate};