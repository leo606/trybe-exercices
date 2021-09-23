USE sakila;
DELIMITER $$

CREATE FUNCTION paymentQtyByID(in_id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE paymentsQty INT;
	SELECT COUNT(*) FROM payment
    WHERE customer_id = in_id INTO paymentsQty;
    RETURN paymentsQty;
END $$
DELIMITER ;


SELECT paymentQtyByID(549);