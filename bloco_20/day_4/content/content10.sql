select * from sakila.actor;
select * from sakila.film_actor;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor 
WHERE
    first_name = 'KARL'
