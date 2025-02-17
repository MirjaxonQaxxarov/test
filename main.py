import os
import time

REPO_PATH = r"D:\python\test\test"  # Loyihangiz joylashgan papka
COMMIT_MESSAGE = "Auto commit"  # Har bir commit uchun xabar
PUSH_COUNT = 100  # Necha marta push qilmoqchisiz?

os.chdir(REPO_PATH)

for i in range(PUSH_COUNT):
    with open("fake_commit.txt", "a") as f:
        f.write(f"Fake commit {i + 1}\n")

    os.system("git add .")
    os.system(f'git commit -m "{COMMIT_MESSAGE} {i + 1}"')
    os.system("git push origin main")
    
    print(f"Commit {i + 1} pushed.")
    time.sleep(2)  # 2 soniya kutish (taqiqdan qochish uchun)
