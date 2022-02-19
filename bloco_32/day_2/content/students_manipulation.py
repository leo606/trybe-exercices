# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que lê todas essas informações
# e filtre mantendo somente as pessoas que estão reprovadas,
# e escreva seus nomes em outro arquivo. A nota miníma para aprovação é 6.
try:
    students_file = open("./students.txt", mode="r")
    reproveds_file = open("./students_reproved.txt", mode="w")
except OSError:
    print("os error file not found")
else:
    print("read file successful")
    for line in students_file:
        student = line.split(" ")
        if int(student[1]) < 6:
            reproveds_file.write(f"{student[0]}\n")
    students_file.close()
    reproveds_file.close()
