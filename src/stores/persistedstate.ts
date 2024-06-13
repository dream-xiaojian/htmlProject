const KEY_PREFIX = "PINIA_STORE_"
import {User} from "./user"
export function persistedPlugin (context: any) {
     console.log('持久化插件调用', context);
     
    /**
     * 插件
     * 在运行的页面中使用过的Pinia的store都会进行触发这个函数
     * 核心功能：
     * （1）存， 页面刷新， 关闭，store的状态都会被存储到localStorage中
     *   注意：router并不会导致store的状态被存储到localStorage中
     * （2）取， persistedPlugin第一次调用, 在一次页面周期中，只会调用一次
     * 
     * 目前假设都存在localStorage中
    */
   const { store } = context
   const key = KEY_PREFIX + store.$id
   
   console.log('key', key);
   
   if (key === "PINIA_STORE_settingsStore") {
     let stateCopy = { ...store.$state };

     console.log('stateCopy', stateCopy);
     
     if (stateCopy.persistance === false) {
          return;
     }
     window.addEventListener('beforeunload', () => {
          
   
          localStorage.setItem(key, JSON.stringify(stateCopy));
      })

      try {
             const localData = localStorage.getItem(key);
             if (localData) {
               let parsedData = JSON.parse(localData);
               store.$patch(parsedData);
              }
           }
     catch (error) {
          console.log('localStorage error', error);
     }
   }
   else {
   //存 --- 是否需要全局存取要权衡一下
   window.addEventListener('beforeunload', () => {
          let stateCopy = { ...store.$state };

               stateCopy.userTable = stateCopy.userTable.map((user: any) => {
                    let userCopy = { ...user };
                    if (userCopy.beProudLike) {
                         userCopy.beProudLike = Array.from(userCopy.beProudLike.entries());
                    }
                    if (userCopy.beProudCon) {
                         userCopy.beProudCon = Array.from(userCopy.beProudCon.entries());
                    }
                    return userCopy;
               });
          
          localStorage.setItem(key, JSON.stringify(stateCopy));
   });

   //取
   try {
          const localData = localStorage.getItem(key);
          if (localData) {
               let parsedData = JSON.parse(localData);
               
                    parsedData.userTable = parsedData.userTable.map((user: User) => {
                         if (user.beProudLike) {
                           user.beProudLike = new Map(user.beProudLike);
                         }
                         if (user.beProudCon) {
                           user.beProudCon = new Map(user.beProudCon);
                         }
                         return user;
                    });
               
               store.$patch(parsedData);
          }
     }
   catch (error) {
        console.log('localStorage error', error);
   }
   }
}
