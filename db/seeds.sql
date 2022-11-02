INSERT INTO department(id, name)
VALUES  (1, "Sales"),
        (2, "Legal"),
        (3, "Engineerging"),
        (4, "Fianace");

INSERT INTO role (id, title, salary, department_id)
VALUES (11, "Sales Lead", 100000, 1),
       (12, "Salesperson", 80000, 1),
       (13, "Lawyer", 190000, 2),
       (14, "Legal Team Lead", 250000, 2),
       (15, "Software Engineer", 120000, 3),
       (16, "Lead Engineer", 150000, 3),
       (17, "Accountant", 125000, 4),
       (18, "Account Manager", 160000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (111,"Louen", "Leoncoeur", 11, null),
        (112, "Alberic", "de Bordeleaux", 12, 20),
        (113, "Karl", "Franz", 13, null),
        (114, "Balthasar", "Gelt", 14, 22),
        (115, "Thorek", "Ironbrow", 15, 23),
        (116, "Belegar", "Ironhammer", 16, null),
        (117, "Mannfred", "von Carstein", 17, 24);