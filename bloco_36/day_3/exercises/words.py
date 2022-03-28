# Você receberá uma lista de palavras e uma string .
# Escreva uma função que decida quais palavras podem
# ser formadas com os caracteres da string
# (cada caractere só pode ser utilizado uma vez).
# Retorne à soma do comprimento das palavras escolhidas.
# Exemplo 1:
# words = ["cat", "bt", "hat", "tree"], chars = "atach"
# # saída: 6
# """Explicação: As palavras que podem ser formadas com os caracteres da string
#                são "cat" (tamanho 3) e "hat" (tamanho 3)."""

# Exemplo 2:
# words = ["hello", "world", "students"], chars = "welldonehoneyr"
# # saída: 10
# """Explicação: As palavras que podem ser formadas com os caracteres da string
#                são "hello" (tamanho 5) e "world" (tamanho 5)."""


def words_match(words, chars):
    seen_in_chars = {}
    length_sum = 0
    for char in chars:
        if char not in seen_in_chars:
            seen_in_chars[char] = 1
        else:
            seen_in_chars[char] += 1

    for word in words:
        word_letters_count = {}
        for letter in word:
            if letter not in seen_in_chars:
                break

            if letter not in word_letters_count:
                word_letters_count[letter] = 1
            else:
                word_letters_count[letter] += 1
                if word_letters_count[letter] > seen_in_chars[letter]:
                    break
        else:
            length_sum += len(word)
    return length_sum


words = ["cat", "bt", "hat", "tree", "caaat"]
chars = "atach"
print(f"Resposta final: {words_match(words, chars)}")
print()
words = ["hello", "world", "students"]
chars = "welldonehoneyr"
print(f"Resposta final: {words_match(words, chars)}")
