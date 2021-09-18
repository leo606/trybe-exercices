-- SELECT 
--     mo.title, bo.rating
-- FROM
--     Pixar.Movies AS mo
--     INNER JOIN
--     Pixar.BoxOffice AS bo
-- 	ON mo.id = bo.movie_id
-- WHERE bo.rating > 7.5

SELECT title FROM Pixar.Movies
WHERE
	id IN (
		SELECT movie_id FROM Pixar.BoxOffice
        WHERE rating > 7.5
    )