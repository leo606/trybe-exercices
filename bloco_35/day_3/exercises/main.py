# from merge_sort import merge_sort
from quick_sort import quicksort
from Timer import Timer

if __name__ == "__main__":
    with Timer("quick sort",):
        array = [100, 4, 6, 33, 56, 67]
        quicksort(array, 0, len(array) - 1)
        print(array)
