-- Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.

SELECT 
    *
FROM
    PecasFornecedores.Fornecimentos
WHERE
    Preco > 15 AND Preco < 40
ORDER BY Preco