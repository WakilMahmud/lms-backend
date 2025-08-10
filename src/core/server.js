import mongoose from 'mongoose';
import config from '../config/index.js';
import app from './app.js';

let server;

async function main() {
    try {
        await mongoose.connect(config.DATABASE_URL);

        server = app.listen(config.PORT, () => {
            console.log(`LMS Backend App is running on port ${config.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

main();

process.on('unhandledRejection', (err) => {
    console.log(`😈 unahandledRejection is detected , shutting down ...`, err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    process.exit(1);
});

process.on('uncaughtException', () => {
    console.log(`😈 uncaughtException is detected , shutting down ...`);
    process.exit(1);
});
