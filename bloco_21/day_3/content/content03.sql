USE sakila;
DELIMITER $$

-- DROP PROCEDURE IF EXISTS sakila.showClientActiveByEmail;

CREATE PROCEDURE showClientActiveByEmail(IN in_customer_email VARCHAR(300))
BEGIN
	SELECT IF(`active`, 'active', 'inactive') FROM customer
    WHERE LCASE(customer.email) LIKE LCASE(in_customer_email);
END $$

DELIMITER ;

CALL showClientActiveByEmail('CHRISTIAN.JUNG@sakilacustomer.org')
