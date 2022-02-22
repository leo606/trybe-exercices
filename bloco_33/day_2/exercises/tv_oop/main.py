from schemas.tv import Tv

my_tv = Tv(3)

print(my_tv.channel)
my_tv.change_channel(20)
print(my_tv.channel)
