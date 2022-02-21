# Exercício 1: Em um contexto de orientação a objetos, como podemos definir o
# que são mensagens e qual a sua importância?

# R.: Mensagens são informacões passadas por atributos ou métodos


# Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar
# algumas partes de um software de geometria. Como poderíamos modelar um
# objeto retângulo?

# R.: com uma entidade retangulo, teria atributos com os valores de altura
# e largura.

# Nome da abstração:
# retangulo

# Atrubutos/estados:
# largura (valor)
# altura (valor)

# Comportamentos/métodos:
# calcular área (largura * altura)
# calcular perimetro (largura*2 + altura*2)


# Exercício 3: E como poderíamos definir um círculo? Qual seu nome, atributos
# e comportamentos?

# Nome da abstração:
# circulo

# Atrubutos/estados:
# raio (valor)

# Comportamentos/métodos:
# calcular área (3.14 * raio**2)
# calcular perimetro (3.14*2 * raio)
# calcular diametro (raio*2)


# Exercício 4: Vamos mudar um pouco nosso contexto para um sistema de vendas
# de uma cafeteria. Como podemos abstrair um pedido composto por vários itens?
# Qual seu nome, atributos e comportamentos?

# Nome da abstração:
# pedido

# Atrubutos/estados:
# itens (lista)

# Comportamentos/métodos:
# calcular total (soma valores itens)
# finalizar venda (salva venda no DB)


# Exercício 5: Notou que os pilares da orientação a objetos começam a
# manifestar a medida que fizemos nossos exercícios de modelagem?
# Que tal agora então modelarmos uma televisão?

# Nome da abstração:
# televisão

# Atrubutos/estados:
# ligada (bool)
# volume (valor)
# canal (valor)

# Comportamentos/métodos:
# ligar (ligada true)
# desligar (ligada false)
# mudar canal (canal = x)
# aumentar volume (volume += x)
# diminur volume (volume -= x)
