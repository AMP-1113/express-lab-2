import express from 'express';
import path from 'path';
import homeRoutes  from './routes/home';
import specialtyPizzaRoutes from './routes/specialty-pizza';
import reviewForm from './routes/review-form';
import customForm from './routes/custom-pizza';

const app = express();

// Settings for web pages
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", homeRoutes);
app.use("/specialty-pizza", specialtyPizzaRoutes);
app.use("/review-form", reviewForm);
app.use("/custom-pizza", customForm);

const port = 3000;
app.listen(port, () => console.log(`Listening on port: ${port}.`));