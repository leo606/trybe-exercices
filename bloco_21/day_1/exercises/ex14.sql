-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário:
-- id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).

SELECT 
    EMPLOYEE_ID, FIRST_NAME, YEAR(HIRE_DATE) AS `hire_year`
FROM
    hr.employees;
