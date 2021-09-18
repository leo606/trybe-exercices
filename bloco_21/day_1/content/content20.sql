SELECT 
    rating, ROUND(AVG(length))
FROM
    sakila.film
GROUP BY rating;
