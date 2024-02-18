import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  imagePath: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: [{
    type: Schema.Types.ObjectId,
    ref: 'Ingredient',
  }],
  category: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
}));
