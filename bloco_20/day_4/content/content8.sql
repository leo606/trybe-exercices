-- Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos
-- e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.


SELECT 
    *
FROM
    sakila.film
WHERE
    length > 100
        AND rating IN ('G' , 'PG', 'PG-13')
        AND replacement_cost > 2;
        
UPDATE sakila.film
SET rental_rate = 25
WHERE
	length > 100
        AND rating IN ('G' , 'PG', 'PG-13')
        AND replacement_cost > 2;