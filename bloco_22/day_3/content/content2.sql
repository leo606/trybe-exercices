SELECT * FROM sakila.actor;

CREATE VIEW sakila.topTen AS
	SELECT * FROM sakila.actor
	WHERE actor_id < 11;