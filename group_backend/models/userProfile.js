const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const userProfileSchema = new Schema(
    {
        bio:{
            type: String
        },
        current_company:{
            type:String
        },
        employment_status: {
            type: Boolean
        },
        avatarURL:{
            type: String
        },
        posts:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Posts'
        }],
        jobs:[{
            type: mongoose.Schema.Types.ObjectId,
            ref:'Jobs'
        }],

        github:{
            type: String
        },
        twitter:{
            type: String
        },
        linkedIn:{
            type: String
        }
    }, {
        timestamps: true
    });

module.exports = model('UserProfile', userProfileSchema);