import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('LMS Backend Service is running.');
});

export default app;
