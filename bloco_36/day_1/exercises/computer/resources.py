import subprocess

cpu_ls = subprocess.check_output("lscpu").decode("UTF-8").split("\n")

infos_requires = [
    "Model name",
    "CPU(s)",
    "CPU MHz",
    "L1d cache",
    "L1i cache",
    "L2 cache",
    "L3 cache",
]

# for info in cpu_ls:
#     try:
#         description, value = info.split(":")
#         if description in infos_requires:
#             print(f"{description}:")
#             print(value.strip())
#             print("\n===========\n")
#     except Exception:
#         continue

mem_free = subprocess.check_output("free").decode("UTF-8").split(' ')

mem_clean = [info for info in mem_free if info]

print(mem_clean)
