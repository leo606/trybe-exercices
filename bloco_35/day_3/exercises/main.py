# from merge_sort import merge_sort
from quick_sort import quicksort

if __name__ == "__main__":
    array = [100, 4, 6, 33, 56, 67]
    quicksort(array, 0, len(array) - 1)
    print(array)
