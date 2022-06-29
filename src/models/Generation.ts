import { model, Document, Schema, PaginateModel } from 'mongoose';
import paginate from 'mongoose-paginate-v2';

export interface IGenerationDocument extends Document {
  _id: string;
  date: Date;
  generatePower: number;
}

const generationSchema = new Schema({
  _id: { type: String, required: true },
  date: { type: Date, required: true },
  generatePower: { type: Number, required: true },
});

generationSchema.plugin(paginate);

generationSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const GenerationModel = model<IGenerationDocument, PaginateModel<IGenerationDocument>>(
  'Generation',
  generationSchema,
);

export { GenerationModel };
