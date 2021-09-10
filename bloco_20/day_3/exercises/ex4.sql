-- Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.

SELECT 
    *
FROM
    Fornecedores
WHERE
    name LIKE '%LTDA'
ORDER BY name