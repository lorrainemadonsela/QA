function login(username, password) {
    const user = login.getUser(username);
    if (user.password === password) {
    account.log('User logged in');
    return 'Success';  
    }
    return 'Failed';
    }

module.exports = {login};