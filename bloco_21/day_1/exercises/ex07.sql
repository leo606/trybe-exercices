-- 7. Escreva uma query que exiba a quantidade de dinheiro
-- necessária para efetuar o pagamento de cada profissão ( JOB_ID ).

SELECT 
    JOB_ID, SUM(SALARY) AS `soma salario de cada job`
FROM
    hr.employees
GROUP BY JOB_ID;
