import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from "./routes/index";
import './db/index';

const app = express();

app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use('/', router)

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server listening on http://localhost:${process.env.PORT || 5000}/`);
})