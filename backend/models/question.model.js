import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['input', 'options'],
    required: true,
  },
  options: {
    type: [String],
    required: function () {
      return this.type === 'options';
    },
  },
});

export default mongoose.model('Question', questionSchema);
