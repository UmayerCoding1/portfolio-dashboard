import mongoose, {Schema, model,models} from 'mongoose';

export interface IResume {
    resumeLink: string;
    _id?: mongoose.Types.ObjectId;
}

const resumeSchema = new Schema<IResume>({
    resumeLink: {
        type: String,
        required: true
    }
},{timestamps:true});

export const Resume = models.Resume || model<IResume>('Resume', resumeSchema);