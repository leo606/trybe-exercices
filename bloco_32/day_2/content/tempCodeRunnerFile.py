import csv

with open("balneabilidade.csv") as file:
    beach_status_reader_dict = csv.DictReader(
        file, delimiter=",", quotechar='"'
    )
    beach_status_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = beach_status_reader
    for row in beach_status_reader_dict:
        print(row)