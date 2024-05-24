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
   
   //存 --- 是否需要全局存取要权衡一下
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

// // 读取图片并转换为 Base64
// function readImage(file) {
//      return new Promise((resolve, reject) => {
//        const reader = new FileReader();
//        reader.onloadend = () => resolve(reader.result);
//        reader.onerror = reject;
//        reader.readAsDataURL(file);
//      });
//    }
   
//    // 存储图片
//    async function storeImage(file) {
//      const dataUrl = await readImage(file);
//      localStorage.setItem('myImage', dataUrl);
//    }
   
//    // 获取图片
//    function getImage() {
//      const dataUrl = localStorage.getItem('myImage');
//      if (dataUrl) {
//        const img = new Image();
//        img.src = dataUrl;
//        document.body.appendChild(img);
//      }
// }