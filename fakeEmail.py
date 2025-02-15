import itertools
import csv
import random
import string

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

def generate_random_username(length=8):
    username = ''.join(random.choices(string.ascii_lowercase + string.digits, k=length))
    return username if username[0].isalpha() else 'a' + username[1:]

def save_to_csv(emails, filename="gmail_variants.csv"):
    with open(filename, mode='w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(["Original Username", "Generated Username", "Generated Email", "Password"])
        for email in emails:
            username = email.split('@')[0]
            original_username = username.replace('.', '') if '.' in username else username
            password = "P@ssw0rd123"  # O'zingiz istagan parolni generatsiya qiling
            writer.writerow([original_username, username, email, password])

def main():
    original_email = input("Gmail pochta manzilini kiriting yoki bo'sh qoldiring (random username yaratish uchun): ")
    
    if original_email.strip():
        try:
            variants = generate_gmail_variants(original_email)
            print(f"{len(variants)} ta variant yaratildi.")
        except ValueError as e:
            print(f"Xatolik: {e}")
            return
    else:
        variants = [generate_random_username() + "@gmail.com" for _ in range(10)]  # 10 random usernames yaratish
        print("Random usernamelar yaratildi.")
    
    save_to_csv(variants)
    print("Variantlar 'gmail_variants.csv' fayliga saqlandi.")

if __name__ == "__main__":
    main()
