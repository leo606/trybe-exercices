with open("./words.txt", mode="r") as file:
    array = file.read().split("\n")
    print(array)