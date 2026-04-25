import mongoose from 'mongoose';

const customOrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  projectType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    default: 'Ideation', // Ideation, Design, Execution, Delivery
  },
  updateText: {
    type: String,
    default: 'Project received. Our artist will contact you soon.',
  },
}, {
  timestamps: true,
});

const CustomOrder = mongoose.model('CustomOrder', customOrderSchema);

export default CustomOrder;
