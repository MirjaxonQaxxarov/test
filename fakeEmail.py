import itertools
import csv

def generate_gmail_variants(email):
    username, domain = email.split('@')
    if domain.lower() != 'gmail.com':
        raise ValueError("Only Gmail addresses are supported.")
    
    positions = list(range(1, len(username)))  # Possible positions to insert '.'
    variants = set()
    
    for r in range(1, len(positions) + 1):
        for combination in itertools.combinations(positions, r):
            new_username = list(username)
            for pos in combination:
                new_username.insert(pos, '.')
            variants.add("".join(new_username) + "@" + domain)
    
    return list(variants)

def save_to_csv(emails, filename="gmail_variants.csv"):
    with open(filename, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(["Email", "Password"])
        for email in emails:
            password = "P@ssw0rd123"  # O'zingiz istagan parolni generatsiya qiling
            writer.writerow([email, password])

def main():
    original_email = input("Gmail pochta manzilini kiriting: ")
    try:
        variants = generate_gmail_variants(original_email)
        print(f"{len(variants)} ta variant yaratildi.")
        save_to_csv(variants)
        print("Variantlar 'gmail_variants.csv' fayliga saqlandi.")
    except ValueError as e:
        print(f"Xatolik: {e}")

if __name__ == "__main__":
    main()
