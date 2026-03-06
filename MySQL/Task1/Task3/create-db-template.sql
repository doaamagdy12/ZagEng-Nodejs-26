-- Scenario 1 :- E_Commerce Store

CREATE DATABASE ECommerceStore

USE ECommerceStore;


CREATE Table Products(
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) not NULL,
    category VARCHAR(100),
    stock_quantity INT check (stock_quantity >=0)

);

CREATE Table Orders (
    order_id INT PRIMARY key AUTO_INCREMENt,
    order_date DATE NULL,
    status VARCHAR(100)
);

CREATE TABLE Order_Items(
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    PRIMARY KEY (order_id,product_id),
    Foreign Key (order_id) REFERENCES Orders(order_id),
    Foreign Key (product_id) REFERENCES Products(product_id)

);
ALTER TABLE Order_Items
ADD unit_price DECIMAL(10,2) NOT NULL;

ALTER TABLE Products
ADD discount DECIMAL(5,2) DEFAULT 0;

INSERT INTO Products (name, category, stock_quantity ,discount)
VALUES 
('Laptop', 'Electronics', 10, 5.00),
('Phone', 'Electronics', 20, 10.00),
('Book', 'Books', 50, 0.00);

INSERT INTO Orders (order_date , status)
VALUES
('2026-03-01', 'Shipped'),
('2026-03-05', 'Pending');

INSERT INTO Order_Items (order_id , product_id , quantity , unit_price)
VALUES
(1, 1, 2, 1000.00), 
(1, 3, 3, 50.00),  
(2, 2, 1, 500.00);

SELECT 
    o.order_id,
    SUM(oi.quantity * oi.unit_price) AS total
FROM Orders o
INNER JOIN Order_Items oi ON o.order_id = oi.order_id
GROUP BY o.order_id;


-- Scenario 1 :- Hospital Management System
CREATE DATABASE Hospital

USE Hospital;

CREATE TABLE Departments(
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(100) NOT NULL,
    head_doctor_id INT NULL
);

CREATE Table Doctors(
    doctor_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_name VARCHAR(100) NOT NULL,
    specialization VARCHAR(100) NOT null,
    dept_id INT NOT NULL
);

CREATE TABLE Patients(
    patient_id INT PRIMARY KEY AUTO_INCREMENT,
    patient_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    phone_number VARCHAR(15)
);

ALTER TABLE Doctors
ADD FOREIGN KEY (dept_id) REFERENCES Departments(dept_id);

ALTER TABLE Departments
ADD FOREIGN KEY (head_doctor_id) REFERENCES Doctors(doctor_id);

CREATE Table Appointments(
    appointment_id INT PRIMARY KEY AUTO_INCREMENT,
    doctor_id INT NOT NULL,
    patient_id INT NOT NULL,
    appointment_date DATE NOT NULL ,
    diagnosis VARCHAR(100),
    fee DECIMAL(10,2) NOT NULL,
    Foreign Key (doctor_id) REFERENCES Doctors(doctor_id),
    Foreign Key (patient_id) REFERENCES Patients(patient_id)
);

INSERT INTO Departments (dept_name, head_doctor_id)
VALUES
('Cardiology', NULL),
('Neurology', NULL),
('Orthopedics', NULL);

INSERT INTO Doctors (doctor_name, specialization, dept_id)
VALUES
('Dr. Ahmed', 'Cardiologist', 1),
('Dr. Mona', 'Cardiologist', 1),
('Dr. Ali', 'Neurologist', 2),
('Dr. Sara', 'Orthopedic', 3);


INSERT INTO Patients (patient_name, date_of_birth, phone_number)
VALUES
('Ali Hassan', '1985-05-10', '01012345678'),
('Sara Khaled', '1990-08-20', '01123456789'),
('Omar Tamer', '2000-01-15', '01234567890');


INSERT INTO Appointments (doctor_id, patient_id, appointments_date, diagnosis, fee)
VALUES
(1, 1, '2026-03-01', 'Heart Checkup', 500.00),    
(2, 2, '2026-03-02', 'Routine Checkup', 400.00),  
(1, 3, '2026-03-03', 'Follow-up', 600.00),       
(3, 1, '2026-03-04', 'Neurological Test', 700.00),
(4, 2, '2026-03-05', 'Bone Fracture', 800.00);    

SELECT 
    d.dept_id,
    d.dept_name,
    doc.doctor_name AS head_doctor
FROM Departments d
LEFT JOIN Doctors doc ON d.head_doctor_id = doc.doctor_id;

SELECT 
    doc.doctor_id,
    doc.doctor_name,
    SUM(a.fee) AS total_revenue
FROM Doctors doc
LEFT JOIN Appointments a ON doc.doctor_id = a.doctor_id
GROUP BY doc.doctor_id, doc.doctor_name;

SELECT 
    AVG(a.fee) AS avg_fee
FROM Appointments a
INNER JOIN Doctors doc ON a.doctor_id = doc.doctor_id
INNER JOIN Departments d ON doc.dept_id = d.dept_id
WHERE d.dept_name = 'Cardiology';