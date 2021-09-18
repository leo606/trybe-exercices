SELECT `name`,`location` FROM Pixar.Theater AS th
WHERE EXISTS (
	SELECT * FROM Pixar.Movies AS mo
    WHERE mo.theater_id = th.id
)