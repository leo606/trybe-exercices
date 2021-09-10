SELECT 
    count(*)
FROM
    sakila.payment
WHERE
    payment_date BETWEEN '2005-05-01' AND '2005-09-01';