const products = [
  { name: 'Classic T-Shirts', sold: 500, stock: 20 },
  { name: 'Jeans', sold: 450, stock: 15 },
  { name: 'Hoodies', sold: 300, stock: 8 },
  { name: 'Sneakers', sold: 200, stock: 10 },
  { name: 'Caps', sold: 100, stock: 5 },
];

const orders = {
  12345: 'Shipped',
  23456: 'Delivered',
  34567: 'In Transit',
};

module.exports = {
  getTopProducts: () => products.sort((a, b) => b.sold - a.sold).slice(0, 5),
  getOrderStatus: (id) => orders[id] || 'Order ID not found',
  getStockCount: (name) => {
    const item = products.find(p => p.name.toLowerCase() === name.toLowerCase());
    return item ? item.stock : 'Product not found';
  },
};