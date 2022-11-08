import mongoose, { Document, Schema } from 'mongoose';

export interface ICart {
    name: String,
    precio: Number,
    Cantidad: Number
}

export interface ICartModel extends ICart, Document {}

const CartSchema: Schema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        cantidad: { type: Number, required: true },
        precio: { type: Number, required: true },
    },
);

export default mongoose.model<ICartModel>('Cart', CartSchema);