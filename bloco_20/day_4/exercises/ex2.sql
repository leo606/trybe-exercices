-- Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8,
-- fez 450 milhões no mercado interno e 370 milhões no mercado internacional.
-- Adicione as informações à tabela BoxOffice .

SELECT 
    *
FROM
    Pixar.BoxOffice;

insert into Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
SELECT
	id, 6.8, 450000000, 370000000
from
	Pixar.Movies
where
	title like 'Procurando Nemo'

-- DELETE from Pixar.BoxOffice where movie_id = 9;
