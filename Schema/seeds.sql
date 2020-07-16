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
('Ashley', 'Rodriguez', 2, 1,1),
('Kevin', 'Tupik', 3, 1,1),
('Kunal', 'Singh', 4, 1,1),
('Ace', 'Venture', 1, NULL,2),    
('Julia', 'Roberts', 2, 5,2),
('Matt', 'Bomer', 3, 5,2),
('Matt', 'Smith', 4, 5,2),
('David', 'Tennant', 1, NULL,3),    
('Harry', 'Potter', 2, 9,3),
('Barney', 'Stinson', 3, 9, 3),
('Robin', 'Scherbausky', 4, 9,3);
