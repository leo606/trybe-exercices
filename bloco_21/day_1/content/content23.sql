SELECT 
    active, COUNT(active)
FROM
    sakila.customer
GROUP BY active;
