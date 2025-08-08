import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('LMS Backend is running.');
});

export default app;
