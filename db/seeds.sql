INSERT INTO department(name)
VALUES  ("Sales"),
        ("Legal"),
        ("Engineerging"),
        ("Fianace");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lawyer", 190000, 2),
       ("Legal Team Lead", 250000, 2),
       ("Software Engineer", 120000, 3),
       ("Lead Engineer", 150000, 3),
       ("Accountant", 125000, 4),
       ("Account Manager", 160000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Louen", "Leoncoeur", 1, null),
        ("Alberic", "de Bordeleaux", 2, 1),
        ("Karl", "Franz", 3, null),
        ("Balthasar", "Gelt", 4, 3),
        ("Thorek", "Ironbrow", 5, null),
        ("Belegar", "Ironhammer", 6, 5),
        ("Mannfred", "von Carstein", 7, null),
         ("Vlad", "von Carstein", 8, 7);