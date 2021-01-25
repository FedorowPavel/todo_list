import storageService from '../storage-service.js';
import userList from '../users.js';

export default function registerUser(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    //прописываем в гет ИМЯ инпута
    const email = formData.get('email');
    const password = formData.get('password');

    //шифруем пароль используя метод библиотеки
    const hashedPassword = CryptoJS.SHA3(password);

    const newUser = {
        email: email,
        password: hashedPassword.toString()
    };

    try {
        userList.add(newUser);
        storageService.set('users', JSON.stringify(userList.users))
    } catch (error) {
        alert(error.message);
    }

    event.target.reset();

}