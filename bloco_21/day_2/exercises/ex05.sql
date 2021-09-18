SELECT 
    th.`name`, th.`location`, mo.title, mo.director
FROM
    Pixar.Theater AS th
        RIGHT JOIN
    Pixar.Movies AS mo ON mo.theater_id = th.id
ORDER BY th.`name`