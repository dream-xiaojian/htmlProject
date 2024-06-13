// 用户是否登入的权限校验
import {navigation} from "@/router/index"
export function verifyUser() {
    const cookies = document.cookie.split('; ');
    const userCookie = cookies.find(cookie => cookie.startsWith('user='));
    const token = userCookie ? userCookie.split('=')[1] : null;

    if (!token) { 
        return { id: -1 }
    }

    return JSON.parse(token);
}

