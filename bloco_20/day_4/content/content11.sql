SELECT 
    *
FROM
    sakila.actor
WHERE
	first_name = 'MATTHEW';

SELECT 
    *
FROM
    sakila.film_actor;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_actor 
WHERE
    actor_id in (8, 103, 181);

DELETE FROM sakila.actor 
WHERE
    first_name = 'MATTHEW'
