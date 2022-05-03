def odd_numbers():
    a = 0
    yield a

    while a < 100:
        a += 2
        yield a

print(odd_numbers())
print(next(odd_numbers()))