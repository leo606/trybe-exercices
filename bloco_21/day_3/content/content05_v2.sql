DROP FUNCTION IF EXISTS getFilmNameByInventoryId;

USE sakila;
DELIMITER $$

CREATE FUNCTION getFilmNameByInventoryId(in_id INT)
RETURNS VARCHAR(300) READS SQL DATA
BEGIN
	DECLARE filmName VARCHAR(300);
    DECLARE filmID INT;
    SELECT film_id FROM inventory WHERE inventory_id = in_id INTO filmID;
    SELECT title FROM film
		WHERE film_id = filmID
        INTO filmName;
	RETURN filmName;
END $$
DELIMITER ;

SELECT getFilmNameByInventoryId(6);
