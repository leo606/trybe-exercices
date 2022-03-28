class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [[] for _i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for value in self._buckets[address]:
            if value.id_num == id_num:
                return value

    def has(self, id_num):
        address = self.get_address(id_num)
        for value in self._buckets[address]:
            if value.id_num == id_num:
                return True
        return False

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        for value in self._buckets[address]:
            if value.id_num == id_num:
                value.name = new_name
                break


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]

hash_map = HashMap()

for employee in employees:
    hash_map.insert(Employee(*employee))

print(hash_map.get_value(10).name)
hash_map.update_value(10, 'name30')
print(hash_map.get_value(10).name)

print(hash_map.has(14))
print(hash_map.has(15))
