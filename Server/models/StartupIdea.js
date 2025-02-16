// server/models/StartupIdea.js
import mongoose from 'mongoose';

const IdeaSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  idea: String,
  analysis: {
    swot: Map,
    feasibility: Number,
    versionHistory: [{
      timestamp: Date,
      snapshot: Object
    }]
  }
}, { timestamps: true });

export default mongoose.model('StartupIdea', IdeaSchema);
