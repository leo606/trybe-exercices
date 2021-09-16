-- 6 Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).

SELECT 
    JOB_ID, COUNT(JOB_ID) AS `total de its`
FROM
    hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';
