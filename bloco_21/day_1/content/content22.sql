SELECT 
    rating, SUM(replacement_cost)
FROM
    sakila.film
GROUP BY rating;
