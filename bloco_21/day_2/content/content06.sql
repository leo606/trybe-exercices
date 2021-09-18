-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount )
-- paga aos funcionários no ano de 2006. Use as tabelas payment e staff .
-- Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.


SELECT s.first_name, s.last_name, ROUND(AVG(p.amount), 2) AS `amount_avg`
FROM sakila.staff s
INNER JOIN sakila.payment p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY p.staff_id;