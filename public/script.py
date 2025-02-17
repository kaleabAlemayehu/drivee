from os import listdir, rename
from os.path import isfile, join

onlyfiles = [f for f in listdir("./") if isfile(join("./", f))]
j = 0
for i,f in enumerate(onlyfiles) :
    if not("comment" in f or "script" in f) :
        rename(f,"city"+str(j)+".jpg")
        print(j,f)
        j+=1
    else:
        print("other")
        print(f)
