-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário:
-- nome , sobrenome , tempo que trabalha na empresa (em dias) .

SELECT 
    EMPLOYEE_ID, DATEDIFF(NOW(), HIRE_DATE) AS `work_time`
FROM
    hr.employees;
