import mongoose from 'mongoose';

const csvSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    file:{
      type: Array
    },
  }, 
  { timestamps: true,}
)
export default mongoose.model('CSV', csvSchema);
