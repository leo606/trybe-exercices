SELECT `name`,`location` FROM Pixar.Theater AS th
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies AS mo
    WHERE mo.theater_id = th.id
)