CREATE DATABASE IF NOT EXISTS toys;

USE toys;

CREATE TABLE employee (
	id INT(11) NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) DEFAULT NULL,
	salary INT(5) DEFAULT NULL,
	PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee ( id, name, salary) 
VALUES 
    (1, 'John', 1000),
	(2, 'Jane', 2000),
	(3, 'Jim', 3000),
	(4, 'Jill', 4000),
	(5, 'Jack', 5000);


--Create a table called departments with the following columns:
CREATE TABLE departments (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

--Insert the following data into the departments table:
INSERT INTO departments (id, name) 
VALUES 
    (1, 'RR.HH'),
    (2, 'Engineering'),
    (3, 'Marketing'),
    (4, 'Sales');

--Add a column called department_id to the employee table
ALTER TABLE employee ADD COLUMN department_id INT(11);

--Add a foreign key constraint to the department_id column in the employee table that references the id column in the departments table
ALTER TABLE employee 
ADD CONSTRAINT fk_department
FOREIGN KEY (department_id) 
REFERENCES departments(id);


DELETE FROM employee;

INSERT INTO employee (id, name, salary, department_id) 
VALUES 
    (1, 'John', 1000, 1),  -- John -> RR.HH
    (2, 'Jane', 2000, 2),  -- Jane -> Engineering
    (3, 'Jim', 3000, 2),   -- Jim -> Engineering
    (4, 'Jill', 4000, 3),  -- Jill -> Marketing
    (5, 'Jack', 5000, 4);  -- Jack -> Sales