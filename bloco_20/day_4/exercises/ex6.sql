-- Exclua da tabela Movies o filme "WALL-E".

SET SQL_SAFE_UPDATES = false;

select * from Pixar.Movies;

DELETE FROM Pixar.BoxOffice 
WHERE
    movie_id = 11;

DELETE FROM Pixar.Movies
	WHERE title like 'WALL-E';