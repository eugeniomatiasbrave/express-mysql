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

