import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
  id: { type: String },
  nickname: { type: String, required: true },
  place: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  active: { type: Boolean, required: true },
});

plantSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (_, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const PlantModel = mongoose.model('PlantModel', plantSchema);

export { PlantModel };
