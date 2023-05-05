const { pool } = require('../persistence/mysql');

const findAll = async () => {
    const [categories, ] = await pool.query(`
        SELECT id, name, image_url, COALESCE(p_count.product_count, 0) AS product_count
        FROM category c
        LEFT OUTER JOIN (SELECT category_id, COUNT(DISTINCT grouping_key) AS product_count
                         FROM product 
                         GROUP BY category_id) AS p_count ON c.id = p_count.category_id 
        `);
    return categories;
};

const createCategory = async (category) => transactional(async (connection) => {
    const args = [category.name, category.image_url]
    await connection.query(
        `INSERT INTO product (name, image_url) VALUES ?`,
        [args]
    );
});

module.exports = {
    findAll,
    createCategory
};
