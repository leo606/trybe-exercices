from operator import itemgetter


class Statistics:
    @classmethod
    def mean(cls, numbers):
        return sum(numbers) / len(numbers)

    @classmethod
    def median(cls, numbers):
        if len(numbers) % 2 == 0:
            n1 = int(len(numbers) / 2 - 1)
            n2 = int(len(numbers) / 2)
            return (numbers[n1] + numbers[n2]) / 2
        else:
            return numbers[int(len(numbers) / 2)]

    @classmethod
    def modal(cls, numbers):
        modal = {}
        for number in numbers:
            if number in modal.keys():
                modal[number] += 1
            else:
                modal[number] = 1

        tuples = modal.items()
        return sorted(tuples, key=itemgetter(1), reverse=True)[0][0]
