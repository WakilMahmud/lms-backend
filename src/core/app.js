import express from 'express';

import globalErrorHandler from './middlewares/globalErrorHandler';
import notFound from './middlewares/notFound';
import router from './routes';

const app = express();

app.use(express.json());

// application routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
    res.send('LMS Backend Service is running.');
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
