-- Monte uma query que exiba o id do ator , nome ,
-- id do filme e título do filme , usando as tabelas actor ,
-- film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .

SELECT act.actor_id, act.first_name, filact.film_id, fil.title
FROM sakila.actor act
INNER JOIN sakila.film_actor AS filact ON filact.actor_id = act.actor_id
INNER JOIN sakila.film AS fil ON filact.film_id = fil.film_id;