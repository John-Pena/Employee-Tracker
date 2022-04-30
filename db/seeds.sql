INSERT INTO department
(name)
VALUES
('finance')
('science')

INSERT INTO role
(title, salary, department_id)
VALUES
('managers', 30000, 2),
('scientist', 20000, 2);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Margarita', 'Lechuga', 1, 1),
('John', 'Pena', 2, 1);