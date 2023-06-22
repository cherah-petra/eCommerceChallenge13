USE ecommerce_db;

-- Inserting categories
INSERT INTO category (catName) VALUES ('Electronics');
INSERT INTO category (catName) VALUES ('Clothing');
INSERT INTO category (catName) VALUES ('Books');

-- Inserting products
INSERT INTO product (productName, price, stock, category) VALUES ('Laptop', 999.99, 20, 1);
INSERT INTO product (productName, price, stock, category) VALUES ('T-Shirt', 19.99, 50, 2);
INSERT INTO product (productName, price, stock, category) VALUES ('Novel', 9.99, 30, 3);

-- Inserting tags
INSERT INTO tag (tagName) VALUES ('New');
INSERT INTO tag (tagName) VALUES ('Sale');
INSERT INTO tag (tagName) VALUES ('Bestseller');

-- Inserting product tags
INSERT INTO productTag (product, tag) VALUES (1, 1);
INSERT INTO productTag (product, tag) VALUES (1, 2);
INSERT INTO productTag (product, tag) VALUES (2, 2);
INSERT INTO productTag (product, tag) VALUES (3, 3);