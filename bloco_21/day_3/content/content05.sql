DROP FUNCTION IF EXISTS getFilmNameByInventoryId;

USE sakila;
DELIMITER $$

CREATE FUNCTION getFilmNameByInventoryId(in_id INT)
RETURNS VARCHAR(300) READS SQL DATA
BEGIN
	DECLARE filmName VARCHAR(300);
    SELECT f.title FROM film AS f
		INNER JOIN inventory AS i
        ON f.film_id = i.film_id
        WHERE i.inventory_id = in_id
        INTO filmName;
        RETURN filmName;
END $$
DELIMITER ;

SELECT getFilmNameByInventoryId(65);
