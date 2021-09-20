USE sakila;
DELIMITER $$

-- DROP PROCEDURE IF EXISTS sakila.;

CREATE PROCEDURE showFilmCategoryByName(IN in_film_name VARCHAR(300))
BEGIN
	SELECT f.film_id, f.title, fc.category_id, cat.`name` FROM film AS f
    INNER JOIN film_category AS fc ON f.film_id = fc.film_id
    INNER JOIN category AS cat ON cat.category_id = fc.category_id
    WHERE f.title LIKE in_film_name;
END $$

DELIMITER ;

-- CALL showFilmCategoryByName('ALTER VICTORY')
