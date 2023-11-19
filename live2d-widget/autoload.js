// live2d_path 参数建议使用绝对路径
//const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
//const live2d_path = "https://fastly.jsdelivr.net/gh/dill503084699/live-widget@latest/";
//const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/";     https://github.com/dill503084699/live-widget

//成功
//const live2d_path = "https://cdn.jsdelivr.net/gh/dill503084699/live2d-widget/";
//const live2d_path = "https://fastly.jsdelivr.net/gh/dill503084699/live2d-widget/";

//不成功
//const live2d_path = "https://fastly.jsdelivr.net/gh/Amayaliu/Live2D";



//const live2d_path = "https://live2d.fghrsh.net/demo/1.4.2/waifu-tips.html";

//https://github.com/Amayaliu/Live2D
//
//const live2d_path ="https://live2d.fghrsh.net/demo/1.4.2/";

const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
//if (screen.width >= 768) {
if (screen.width >= 0) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		// 配置选项的具体用法见 README.md
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/",
//            cdnPath: "https://gcore.jsdelivr.net/npm/yzs-live2d_src@1.1.0/"
		//	cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/"
//            cdnPath: "https://npm.elemecdn.com/akilar-live2dapi@latest/"
//            cdnPath:  "https://fastly.jsdelivr.net/npm/dill-live2dapi@latest/"
//            cdnPath:  "https://gcore.jsdelivr.net/npm/dill-live2dapi@latest/"
//            cdnPath:  "https://gcore.jsdelivr.net/npm/dill-live2dapi@1.1.6/"
//            cdnPath:  "https://gcore.jsdelivr.net/npm/dill-live2dapi@1.2.4/"
//            cdnPath:  "https://gcore.jsdelivr.net/npm/dill-live2dapi@1.2.7999123456789/switch_textures/?id=1-18"   

//諾瓦 已調差不多差sunswim 有消到
            cdnPath:  "https://gcore.jsdelivr.net/npm/dill-live2dapi@1.2.812345678901/" 
//nepnep超次原海王星+ npetune
//            cdnPath:  "https://gcore.jsdelivr.net/npm/dill-live2dapi@1.2.7999123456789/"

//諾瓦爾+ npetune 差一些跟neptune
//            cdnPath:  "https://gcore.jsdelivr.net/npm/dill-live2dapi@1.2.8123/"
//成功
//            cdnPath:  "https://gcore.jsdelivr.net/npm/dill-live2dapi@1.2.7999123456/"
//            cdnPath: "https://gcore.jsdelivr.net/gh/Akilarlxh/live2d_api@latest/"
//            cdnPath:  "https://gcore.jsdelivr.net/npm/dill-live2dapi@latest/"
//			tools: [,"switch-texture"]
//			tools: [, "switch-model", "switch-texture", "photo", "info", "quit"]
		});
	});
}

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
