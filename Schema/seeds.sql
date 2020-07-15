INSERT INTO department (name)
VALUES 
("Human Resources"),
("Software Development"),
("Operations");

INSERT INTO role (title, salary)
VALUES 
("Manager", 80000),
("Supervisor", 60000),
("Developer 1", 500000),
("Developer 2", 1000000);

INSERT INTO employee  (first_name, last_name, role_id, manager_id,department_id)
VALUES  
('John', 'Doe', 1, NULL,1),    
('Ashley', 'Rodriguez', 2, NULL,1),
('Kevin', 'Tupik', 3, NULL,1),
('Kunal', 'Singh', 4, NULL,1);
