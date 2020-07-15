INSERT INTO department (name)
VALUES ("Human Resources");

INSERT INTO department (name)
VALUES ("Software Development");

INSERT INTO department (name)
VALUES ("Operations");

INSERT INTO role (title, salary)
VALUES ("Manager", 80000);

INSERT INTO role (title, salary)
VALUES ("Supervisor", 60000);

INSERT INTO role (title, salary)
VALUES ("Developer 1", 500000);

INSERT INTO role (title, salary)
VALUES ("Developer 2", 1000000);

INSERT INTO employee  (first_name, last_name, role_id, manager_id,department_id)
VALUES  
('John', 'Doe', 1, NULL,1),    
('Ashley', 'Rodriguez', 2, NULL,1),
('Kevin', 'Tupik', 3, NULL,1),
('Kunal', 'Singh', 4, NULL,1);
