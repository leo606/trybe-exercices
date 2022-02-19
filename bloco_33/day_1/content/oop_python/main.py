class User:
    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password


some_user = User("fulano de tal", "fulano@detal.com", "fulano123")

print(some_user.email)
print(some_user.password)
print(some_user.name)
