USE sakila;

CREATE VIEW film_info AS 
SELECT
	act.actor_id,
	CONCAT(act.first_name, '', act.last_name) AS `actor`,
    f.title AS `title`
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fact ON act.actor_id = fact.actor_id
INNER JOIN sakila.film AS f ON fact.film_id = f.film_id
ORDER BY `actor`;
