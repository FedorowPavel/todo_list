import currentUser from '../current-user.js';
import { navigateToUrl } from '../routing.js';
import storageService from '../storage-service.js';
import userList from '../users.js';

export default function loginUser(event) {

    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    //получаем есть ли юзер по этому имейлу 
    const user = userList.getUserByEmail(email);

    if (!user) {
        alert('User does not exist');
        return
    }

    //будем сравниавть введенный пароль с имеющимся
    const hashedPassword = CryptoJS.SHA3(password);

    if (user.password !== hashedPassword.toString()) {
        alert('Invalid Password (does not match)')
        return
    };

    currentUser.login(user);
    storageService.set('currentUser', JSON.stringify(user));

    navigateToUrl('/');

}