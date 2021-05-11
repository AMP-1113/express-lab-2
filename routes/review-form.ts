import express from 'express';

const routes = express.Router();

routes.get("/", (req, res) => {
    const name = req.query.name;
    const comment = req.query.comment;
    const rating = req.query.rating;
    res.render("review-form", { name, comment, rating });
  });


routes.post("/result", (req, res) => {
    const name: string = req.body.name;
    const comment: string = req.body.comment;
    const rating: number = parseInt(req.body.rating as string);

    res.render("review-form-result", { name, comment, rating });
  });

export default routes;