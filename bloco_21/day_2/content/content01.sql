SELECT 
    act.actor_id, act.first_name, fil.film_id
FROM
    sakila.actor act
INNER JOIN sakila.film_actor fil
ON act.actor_id = fil.actor_id
