DROP DATABASE IF EXISTS employeeDB;
CREATE database employeesDB;

USE employeeDB;

CREATE TABLE departments (
  id INT UNSIGNED AUTO_INCREMENT,
  name VARCHAR(30) UNIQUE NOT NULL,
  PRIMARY KEY (id)
  manager INT UNSIGNED,
  INDEX manager_ind (manager),
);

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT,
  first VARCHAR(30) NOT NULL,
  last VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  INDEX role_ind (role_id),
  manager INT UNSIGNED,
  INDEX manager_ind (manager),
  PRIMARY KEY (id)
);
/* Creating table of roles */
CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL UNSIGNED NOT NULL,
  department INT UNSIGNED NOT NULL,
  PRIMARY KEY (id),
);

SELECT * FROM departments;
select * FROM employee;
SELECT * FROM role;
