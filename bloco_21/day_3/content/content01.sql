USE sakila;
DELIMITER $$

-- DROP PROCEDURE IF EXISTS sakila.tenMostPopularActors;

CREATE PROCEDURE tenMostPopularActors()
BEGIN
	SELECT ac.actor_id, COUNT(fa.actor_id) AS film_count FROM sakila.actor AS ac
    INNER JOIN sakila.film_actor AS fa
    ON fa.actor_id = ac.actor_id
    GROUP BY fa.actor_id
    ORDER BY film_count DESC LIMIT 10;
END $$

DELIMITER ;

-- CALL tenMostPopularActors();