(SELECT first_name, last_name, 'C' FROM sakila.customer LIMIT 60)
UNION
(SELECT first_name, last_name, 'A' FROM sakila.actor LIMIT 60)
ORDER BY first_name LIMIT 15 OFFSET 60
