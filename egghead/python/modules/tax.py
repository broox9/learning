tax_rate = 0.07
def total_with_tax(n = 0):
    """
    returns the number multiplied by the tax rate
    """
    return n * tax_rate + n

def tax_amount(n):
    return n * tax_rate

# for running in a command line
if __name__ == "__main__":
    import sys
    print(total_with_tax(float(sys.argv[1])))# grab the first argument
