file = open("./text_file.txt", mode="w")
lines = [
    "line one\n",
    "line two\n",
    "line three\n",
    "line four\n",
    "line five\n",
    "line six\n",
]
file.writelines(lines)
file.close()

file = open("./text_file.txt", mode="r")
for line in file:
    print(line)
file.close()
