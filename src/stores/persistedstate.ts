const KEY_PREFIX = "PINIA_STORE_"
export function persistedPlugin (context: any) {
     console.log('持久化插件调用', context);
     
    /**
     * 插件
     * 在运行的页面中使用过的Pinia的store都会进行触发这个函数
     * 核心功能：
     * （1）存， 页面刷新
     * （2）取， 页面加载
     * 
     * 目前假设都存在localStorage中
    */
   const { store } = context
   const key = KEY_PREFIX + store.$id
   
   //存
   window.addEventListener('beforeunload', () => {
         localStorage.setItem(key, JSON.stringify(store.$state))
   })

   //取
   try {
        const localData = localStorage.getItem(key)
        if (localData) {
            store.$patch(JSON.parse(localData))
        }
   } catch (error) {
        console.log('localStorage error', error);
        
   }

}