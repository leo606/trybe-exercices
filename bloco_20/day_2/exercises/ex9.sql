-- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.

SELECT 
    concat('o projeto ', Name, ' precisou de ', Hours, ' para ser finalizado' )
FROM
    Scientists.Projects