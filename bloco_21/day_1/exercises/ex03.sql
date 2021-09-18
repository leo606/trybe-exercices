-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID ,
-- ordenando pela média salarial em ordem decrescente.

SELECT 
    JOB_ID, ROUND(AVG(SALARY), 2) AS `avg`
FROM
    hr.employees
GROUP BY JOB_ID
ORDER BY `avg` DESC;
