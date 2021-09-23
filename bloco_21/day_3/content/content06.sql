DROP FUNCTION IF EXISTS getFilmsQtyByCategory;

USE sakila;
DELIMITER $$

CREATE FUNCTION getFilmsQtyByCategory(in_cat VARCHAR(30))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE filmsQty INT;
    DECLARE catID INT;
    SELECT category_id FROM category WHERE `name` = in_cat INTO catID;
	SELECT COUNT(*) FROM film_category WHERE category_id = catID INTO filmsQty;
	RETURN filmsQty;
END $$
DELIMITER ;

SELECT getFilmsQtyByCategory('Children');
