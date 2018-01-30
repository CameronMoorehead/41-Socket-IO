'use strict';

import mongoose, { Schema } from 'mongoose';

const profileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  wins: {
    type: Number,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
});

const Profile = mongoose.model('profile', profileSchema);
