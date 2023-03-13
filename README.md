# HƯỚNG DẪN SỬ DỤNG
Dự án xây dựng bộ khung dự án React Native tốt nhất, clean code nhất có thể<br>
Bộ khung dự án React Native đầy đủ công cụ.
<br>Author: Dương Anh Sơn (VNTALKING.COM)<br>
Website: [vntalking.com](https://vntalking.com)
****************************************************
### STEP 1. Đổi tên ứng dụng và package.

Sử dụng React Native Rename: https://github.com/junedomingo/react-native-rename
- Cài đặt: 
```sh
$ npm install react-native-rename -g
```
- Tiến hành đổi tên:
```sh
$ npx react-native-rename "Travel App" -b com.junedomingo.travelapp
```

Với phiên bản mới nhất của react-native-rename bắt dự án phải add git.
```git init
git checkout -b rename-app
npx react-native-rename "Travel App" -b "com.junedomingo.travelapp" --skipGitStatusCheck
```

Ngoài ra, bạn có thể tiến hành đổi tên package theo cách thủ công.
https://vntalking.com/react-native-cach-doi-ten-package-name.html

### STEP 2: Cài đặt thư viện
```sh 
$ npm install
```

### STEP 3: Chạy android
```sh
$ npm run android
```
Còn nữa...
