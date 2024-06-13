export default function loadBMap() {
    return new Promise(function(resolve, reject) {
        if (typeof window.BMap !== 'undefined') {
                resolve(window.BMap)
                return true
        }
        window.onBMapCallback = function() {
                resolve(window.BMap)
        }
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://api.map.baidu.com/api?v=1.0&type=webgl&ak=vSPqE8AZ2GOsVLZoXIp6P4S8zL8fPGV5'
        script.onerror = reject
        document.head.appendChild(script)
    })
}

declare global {
    interface Window {
      BMap: any;
      onBMapCallback: () => void;
    }
}