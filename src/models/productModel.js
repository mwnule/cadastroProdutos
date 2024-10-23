import { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: 
    },
    amount: {

    },
    value: {

    }
})

export default model ('Product', productSchema)