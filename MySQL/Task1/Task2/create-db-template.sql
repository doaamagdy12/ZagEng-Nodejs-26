
-- Scenario 1:
CREATE DATABASE shop;

USE shop;

CREATE TABLE products(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, category, price, stock_quantity)
VALUES 
('iPhone 14', 'Electronics', 35000.00, 15),
('Samsung TV 55 Inch', 'Electronics', 18000.00, 8),
('HP Laptop', 'Electronics', 25000.00, 10),
('Office Chair', 'Furniture', 3000.00, 20),
('AirPods Pro', 'Electronics', 7500.00, 25);

CREATE TABLE sales (
    sale_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    quantity_sold INT NOT NULL,
    sale_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- Task 1 in Scenario 1:
SELECT name , price 
FROM products
WHERE category = 'Electronics'
ORDER BY price DESC
LIMIT 3;

-- Task 2 Scenario 1:
SELECT category,
    COUNT(*) AS total_products,
    AVG(price) AS Average_price,
    SUM(price* stock_quantity ) AS total_stock_v
FROM products
GROUP BY category
HAVING COUNT(*)>2;


-- Task 3 Scenario 1:c
SELECT 
    UPPER(name) AS name_upper,
    LEFT(name,10) AS shortName,
    DATEDIFF(NOW(),date_added) AS date
FROM products;

-- Task 4 Scenario 1:
ALTER TABLE products
ADD COLUMN discount_rate DECIMAL(5,2) DEFAULT 0;

UPDATE products
SET discount_rate = 0.10
WHERE  category ='Electronics';

SELECT * FROM products;

DELETE FROM products
WHERE stock_quantity = 0;

-- Scenario 2
CREATE DATABASE Hospital;

USE Hospital;

CREATE TABLE doctors(
    id INT PRIMARY key AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    specialization  VARCHAR(50) NOT NULL,
    hire_date DATE NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    consultations_count INT DEFAULT 0
);

CREATE TABLE patients(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age int NOT NULL,
    gender CHAR(1) NOT NULL,
    admission_date DATE NOT NULL,
    room_type VARCHAR(50),
    bill_amount INT DEFAULT 0,
    status VARCHAR(15)
);

INSERT INTO doctors (name, specialization, hire_date, salary, consultations_count)
VALUES
('Dr. Ahmed Ali', 'Cardiology', '2015-03-10', 20000.00, 150),
('Dr. Sara Khaled', 'Neurology', '2018-07-01', 18000.00, 120),
('Dr. Omar Hassan', 'Orthopedics', '2020-01-15', 15000.00, 90),
('Dr. Mona Samir', 'Pediatrics', '2016-11-20', 17000.00, 130),
('Dr. Tamer Fathi', 'General Surgery', '2014-05-25', 22000.00, 200);

INSERT INTO patients (name, age, gender, admission_date, room_type, bill_amount, status)
VALUES
('Ali Mahmoud', 45, 'M', '2026-02-20', 'Single', 5000.00, 'Discharged'),
('Sara Ibrahim', 30, 'F', '2026-02-25', 'Double', 3000.00, 'Admitted'),
('Omar Youssef', 60, 'M', '2026-03-01', 'VIP', 15000.00, 'Admitted'),
('Mona Adel', 25, 'F', '2026-03-02', 'Single', 4500.00, 'Admitted'),
('Tamer Saad', 50, 'M', '2026-01-15', 'Double', 7000.00, 'Discharged');


-- Task 1 Scenario 2:
SELECT name , specialization , salary
FROM doctors
WHERE hire_date > '2022-01-01'
ORDER BY salary DESC
LIMIT 5;

-- Task 2 Scenario 2:
SELECT
    room_type,
    COUNT(*) AS numOfPatients,
    max(bill_amount) AS max_bill,
    MIN(bill_amount) AS min_bill,
    SUM(bill_amount) AS total
FROM patients
GROUP BY room_type
HAVING SUM(bill_amount) >5000;

-- Task 3 Scenario 2:
SELECT 
    name AS p_Name,
    LENGTH(name) as nL,
    DATEDIFF(CURDATE(),admission_date) as Datee
FROM patients;

SELECT
    lower(specialization) as specialization
FROM doctors;

-- Task 4 Scenario 2:
ALTER TABLE doctors
ADD COLUMN email VARCHAR(20);

UPDATE doctors
SET salary = salary* 1.10
WHERE specialization ='Orthopedics';

DELETE FROM patients
WHERE status ='Discharged';

ALTER Table patients 
MODIFY COLUMN bill_amount DECIMAL(10,2);

-- و شكرا