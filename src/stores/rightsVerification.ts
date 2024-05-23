// 用户是否登入的权限校验

export function verifyUser() {
    const cookies = document.cookie.split('; ');
    const userCookie = cookies.find(cookie => cookie.startsWith('user='));
    const token = userCookie ? userCookie.split('=')[1] : null;

    if (!token) { 
        throw new Error('用户未登录');
    }

    return JSON.parse(token);
}

