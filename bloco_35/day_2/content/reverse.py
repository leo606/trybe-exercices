def rev(list):
    index = len(list) - 1
    reverse_list = []

    for _item in list:
        if index >= 0:
            reverse_list.append(list[index])
            index -= 1

    return reverse_list


print(rev([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
