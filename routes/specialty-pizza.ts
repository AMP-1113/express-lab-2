import express from 'express';

const routes = express.Router();

// GET /specialty-pizza/?name=anchovylover&price=15
routes.get("/pizzapick", (req, res) => {
    const name = req.query.name;
    const price = req.query.price;
    res.render("specialty-pizza", { name, price });
  });
  
  export default routes;