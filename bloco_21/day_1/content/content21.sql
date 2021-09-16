SELECT 
    rating, MIN(replacement_cost)
FROM
    sakila.film
GROUP BY rating;
