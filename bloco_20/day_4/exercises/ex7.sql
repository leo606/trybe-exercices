-- Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".

SELECT 
    *
FROM
    Pixar.Movies;
    
SET SQL_SAFE_UPDATES = false;

DELETE FROM Pixar.BoxOffice
	WHERE movie_id in (2, 9);
    
DELETE FROM Pixar.Movies
	WHERE director like 'Andrew Staton';

