const express = require('express');
const app = express();
const PORT = 3000;

const dataset = require('./data');

app.use(express.json());

app.get('/top-products', (req, res) => {
  const topProducts = dataset.getTopProducts();
  res.json(topProducts);
});

app.get('/order-status/:id', (req, res) => {
  const status = dataset.getOrderStatus(req.params.id);
  res.json({ orderId: req.params.id, status });
});

app.get('/inventory/:productName', (req, res) => {
  const stock = dataset.getStockCount(req.params.productName);
  res.json({ productName: req.params.productName, stock });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});