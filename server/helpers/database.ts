import { Mongoose } from 'mongoose';

export const connectMongo = async (mongoose: Mongoose, connectionUri: string): Promise<Mongoose | undefined> => {
    let instance: Mongoose | undefined = undefined;
    try {
        instance = await mongoose.connect(connectionUri, { minPoolSize: 100, maxPoolSize: 1000 });
        console.log('> MongoDB connected.');
    } catch (error) {
        // TODO add health check state updated here telling that mongodb connection error
        console.log(
            'MongoDB connection error. Please make sure MongoDB is running and mongodb env configuration valid. ' +
                error
        );
    }
    return instance;
};

export const disconnectMongo = async (mongoose: Mongoose) => {
    try {
        await mongoose.disconnect();
        console.log('> MongoDB disconnected.');
    } catch (error) {
        console.log('MongoDB disconnection error.');
    }
};
