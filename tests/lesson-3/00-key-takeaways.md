Git

git restore --staged <file_name>: restore file tu vung staging ve working directory

git restore --staged .: restore tat ca file tu vung staging ve working directory

git reset HEAD~1: reset commit thu nhat theo thu tu tu tren xuong (latest)

git reset HEAD~N: reset n commit theo thu tu tu tren xuong (latest)

    note: commit dau tien ko the reset

git pull origin main: lay code tu server

git branch: xem danh sach nhanh

git branch <ten_branch>: tao nhanh moi

git checkout <ten_branch>: chuyen sang nhanh moi

git checkout -b <ten>: vua tao + chuyen sang nhanh moi

git branch -D <ten_branch>: xoa nhanh

    note: 
    - dung o nhanh khac truoc khi xoa
    - luon pull ve truoc khi tao nhanh

file .gitignore: ignore cac file da dien khoi repo


JS

Object: luu giu lieu dang key: value

    let/const <vaiable_name> = {
        key1: value1,
        key2: value2
        ...
    }

    Khai bao: console.log("name: " + user.name)
              console.log("price = ", product["price"]) 

Array

    let/const <variable_name> = [a, b, c]

    lay phan tu cua mang [0], [1], [2]

    lay do dai mang: length

Function: tai su dung

    function <nameFunction> (a, b) {
        //code
        return 
    }

    a, b: tham so

    return: ket thuc thuc thi ham va tra ve gia tri