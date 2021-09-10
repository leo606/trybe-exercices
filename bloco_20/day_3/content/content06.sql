SELECT 
    title, rental_rate, rating
FROM
    sakila.film
WHERE
    rating = 'NC-17'
ORDER BY rental_rate , title
LIMIT 50