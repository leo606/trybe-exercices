SELECT first_name, last_name FROM sakila.customer
WHERE first_name LIKE '%TRACY%'

UNION

SELECT first_name, last_name FROM sakila.actor
WHERE first_name LIKE '%JE%'