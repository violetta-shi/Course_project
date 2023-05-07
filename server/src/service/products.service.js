const { pool, transactional} = require('../persistence/mysql');
const { v4: uuidv4 } = require('uuid');

const findAllByCategoryId = async (categoryId) => {
    const [products, ] = await pool.query(`
        SELECT id, grouping_key, image_url, name, image_url, size, price, weight
        FROM product
        WHERE category_id = ?`, [categoryId]);
    return products;
};

const getProductStatistics = async (start, end) => {
    const [orderCountStatistic, ] = await pool.query(`
        SELECT DATE_FORMAT(o.created_at, '%Y-%m') AS date, COUNT(*) AS count
        FROM \`order\` o
        WHERE o.created_at >= ? AND o.created_at < ?
        GROUP BY DATE_FORMAT(o.created_at, '%Y-%m')
        ORDER BY date`, [start, end]);
    const [revenueStatistic, ] = await pool.query(`
        SELECT DATE_FORMAT(o.created_at, '%Y-%m') AS date, SUM(o.total_price) AS revenue
        FROM \`order\` o
        WHERE o.created_at >= ? AND o.created_at < ?
        GROUP BY DATE_FORMAT(o.created_at, '%Y-%m')
        ORDER BY date`, [start, end]);
    const [topProductStatistic, ] = await pool.query(`
        SELECT p.name AS name, COUNT(*) AS count
        FROM order_item oi
                 INNER JOIN product p on oi.product_id = p.id
        GROUP BY oi.product_id
        ORDER BY count DESC, oi.product_id DESC
        LIMIT 10`);
    const [paymentMethodStatistic, ] = await pool.query(`
        SELECT o.payment_method AS payment_method, COUNT(*) AS count
        FROM \`order\` o
        WHERE o.created_at >= ? AND o.created_at < ?
        GROUP BY o.payment_method`, [start, end]);
    return {
        orderCountStatistic,
        revenueStatistic,
        topProductStatistic,
        paymentMethodStatistic,
    }
};

const createProduct = async (product) => transactional(async (connection) => {
    const grouping_key = uuidv4();
    const args = product.variants.map(({ size, price, weight }) =>
        [grouping_key, product.category_id, product.name, product.image_url, size, price, weight]);
    await connection.query(
        `INSERT INTO product (grouping_key, category_id, name, image_url, size, price, weight) VALUES ?`,
        [args]
    );
});

module.exports = {
    findAllByCategoryId,
    getProductStatistics,
    createProduct,
};
