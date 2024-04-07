def is_prime(num):
    if not isinstance(num, int) or num <= 1:
        return False
    if num == 2:
        return True
    if num < 0:
        return is_prime(-num)
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

print(is_prime(7))
print(is_prime(10))