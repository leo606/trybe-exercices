-- 10 Escreva um query que exiba média salarial e o número de
-- funcionários de todos os departamentos com mais de dez funcionários.
-- Dica: agrupe pelo department_id .

SELECT 
    DEPARTMENT_ID,
    COUNT(DEPARTMENT_ID) AS `workers_qty`,
    ROUND(AVG(SALARY), 2)
FROM
    hr.employees
GROUP BY DEPARTMENT_ID
HAVING `workers_qty` > 10;
