import { model, Document, Schema, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IPlantDocument extends Document {
  _id: string;
  nickname: string;
  place: string;
  brand: string;
  model: string;
  active: boolean;
}

const plantSchema = new Schema({
  _id: { type: String, required: true },
  nickname: { type: String, required: true },
  place: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  active: { type: Boolean, required: true },
});

plantSchema.plugin(paginate);

plantSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const PlantModel = model<IPlantDocument, PaginateModel<IPlantDocument>>('Plant', plantSchema);

export { PlantModel };
