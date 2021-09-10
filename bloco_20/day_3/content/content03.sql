SELECT 
    title, description, release_year, replacement_cost, rating
FROM
    sakila.film
WHERE
    (rating = 'G' OR rating = 'PG'
        OR rating = 'PG-13')
        AND replacement_cost >= 18.00
ORDER BY replacement_cost , title
LIMIT 100