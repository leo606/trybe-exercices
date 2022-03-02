from schemas.statistics import Statistics

n_list = [99, 99, 1, 2, 7, 2, 99, 3]

print("mean =>", Statistics.mean(n_list))
print("median =>", Statistics.median(n_list))
print("modal =>", Statistics.modal(n_list))
