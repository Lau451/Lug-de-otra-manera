import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct {
    name: String,
    precio: Number,
    enCart: { type: Boolean, default: false },
}

export interface IProductModel extends IProduct, Document {}

const ProductSchema: Schema = new Schema(
    {
        name: { type: String, required: true, unique: true },
        precio: { type: Number, required: true },
        enCart: { type: Boolean, default: false },
    },
);

export default mongoose.model<IProductModel>('Product', ProductSchema);