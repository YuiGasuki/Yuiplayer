/**
 *Yuiplayer
 *基于H5的视频播放器
 *@author Yui_ <13413925094@139.com>
 *@date 2024-08-09 初始版本
 */
 
/**
 *文件头储存UI图标
 */
let YuiplayerPlayImg = `<svg t="1706010361462" viewBox="0 0 1024 1024" version="1.1" p-id="4208" width="24" height="24"><path d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z" fill="#aaaaaa" p-id="4209"></path></svg>`;
let YuiplayerStopImg = `<svg t="1706010319077" viewBox="0 0 1024 1024" version="1.1" p-id="5251" width="24" height="24"><path d="M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z" fill="#aaaaaa" p-id="5252"></path></svg>`
let YuiplayerFullScreen = `<svg t="1706089207439" viewBox="0 0 1024 1024" version="1.1" p-id="4231" width="28" height="28"><path d="M256 170.666667a128 128 0 0 0-128 128v213.333333a42.666667 42.666667 0 1 0 85.333333 0V298.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h213.333333a42.666667 42.666667 0 1 0 0-85.333333H256z m512 682.666666a128 128 0 0 0 128-128v-170.666666a42.666667 42.666667 0 1 0-85.333333 0v170.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-192a42.666667 42.666667 0 1 0 0 85.333333H768z" fill="#aaaaaa" p-id="4232"></path></svg>`;
let YuiplayerFullBack =`<svg t="1723225147451" viewBox="0 0 1024 1024" version="1.1" p-id="4219" width="32" height="32"><path d="M384 512a128 128 0 0 0 128-128V170.666667a42.666667 42.666667 0 1 0-85.333333 0v213.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 1 0 0 85.333333h213.333333z m277.333333 42.666667a128 128 0 0 0-128 128v170.666666a42.666667 42.666667 0 1 0 85.333334 0v-170.666666a42.666667 42.666667 0 0 1 42.666666-42.666667H853.333333a42.666667 42.666667 0 1 0 0-85.333333h-192z" fill="#aaaaaa" p-id="4220"></path></svg>`;
 
 
let YuiplayerData;
function Yuiplayer(Objert){
    YuiplayerData = Objert;
    let mainbox = document.getElementById(YuiplayerData.id);
    mainbox.innerHTML = `
    <style>
    #${YuiplayerData.id} {
    --PlayerWidth:${YuiplayerData.width};
    }
    .fullScreen {
    margin:-8px 0px 0px -8px;    
    height:100vh;
    width:100vw;
    position:fixed;
    top:8px;
    left:8px;
    z-index: 999999;
}
.fullScreenV {
    height:100vh;
    width:100vw;
    object-fit:contain;
    background:black;
    }

    </style>
    <div id="YuiplayerBox" >
        <div id="YuipalayerWarnP" >视频倍数中...</div>
        <video src="${YuiplayerData.url}" id="YuiplayerVideo" poster="${YuiplayerData.poster}" ></video>
        <div id="YuiplayerToolBox" >
            <div id="YuiplayerProgressBox">
                <div id="YuiplayerProgressAlready"></div>
            </div>
            <input type="range" id="YuiplayerProgressRanged" min="0" value="100">
            <div id="YuiplayerPlayButton" >${YuiplayerPlayImg}</div><p id="YuiplayerTimeP" >00:00/00:00</p>
            <div id="YuiplayerFullButton" >${YuiplayerFullScreen}</div>
        </div>
    </div>
    `;
    let YuiplayerVideo = document.getElementById("YuiplayerVideo");
    let YuiplayerPlayButton = document.getElementById("YuiplayerPlayButton");
    let YuiplayerProgressRanged = document.getElementById("YuiplayerProgressRanged");
    let YuiplayerProgressBox = document.getElementById("YuiplayerProgressBox");
    let YuiplayerTimeP = document.getElementById("YuiplayerTimeP");
    let YuiplayerToolBox = document.getElementById("YuiplayerToolBox");
    let YuiplayerFullButton = document.getElementById("YuiplayerFullButton");
    let YuipalayerWarnP = document.getElementById("YuipalayerWarnP");
    let ifToolBox = true;
    let ifProofreadProgress = false;
    const ProofreadProgress = () =>{
        ifProofreadProgress = true;
        YuiplayerTimeP.innerText = `${formattingTime(YuiplayerProgressRanged.value)}/${formattingTime(YuiplayerVideo.duration)}`;
        YuiplayerProgressBox.style.setProperty('--YuiplayerProgress',(YuiplayerProgressRanged.value / YuiplayerProgressRanged.max * 100) + "%");
    }
    const ProofreadProgressOk = () =>{
        YuiplayerVideo.currentTime = YuiplayerProgressRanged.value;
        ifProofreadProgress = false;
    }
    const ProofreadTime = () =>{
        if(ifProofreadProgress){
            return
        }
        YuiplayerTimeP.innerText = `${formattingTime(YuiplayerVideo.currentTime)}/${formattingTime(YuiplayerVideo.duration)}`;
        YuiplayerProgressRanged.value = YuiplayerVideo.currentTime;
        YuiplayerProgressBox.style.setProperty('--YuiplayerProgress',(YuiplayerVideo.currentTime / YuiplayerVideo.duration * 100) + "%");
    }
    
    YuiplayerVideo.onended = () =>{
        YuiplayerIfEndVideo()
    }
    document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
  YuiplayerIfEndVideo()
  }
});
    function YuiplayerIfPlayVideo(){
        if(YuiplayerVideo.paused){
            YuiplayerVideo.play();
            YuiplayerPlayButton.innerHTML = YuiplayerStopImg;
        }else{
            YuiplayerVideo.pause();
            YuiplayerPlayButton.innerHTML = YuiplayerPlayImg;
            if(!ifToolBox){
                YuiplayerToolBox.style.pointerEvents="auto";
                YuiplayerToolBox.style.opacity="1";
                ifToolBox = true;
            }
        }
    }
    
    function YuiplayerIfEndVideo(){
        if(!YuiplayerVideo.paused){
            YuiplayerVideo.pause();
        }
        YuiplayerPlayButton.innerHTML = YuiplayerPlayImg;
        if(!ifToolBox){
            YuiplayerToolBox.style.pointerEvents="auto";
            YuiplayerToolBox.style.opacity="1";
            ifToolBox = true;
        }
    }
    
    
    let ifVideoOnclick = null;
    YuiplayerVideo.onloadedmetadata = () =>{
        YuiplayerProgressRanged.max = YuiplayerVideo.duration;
        YuiplayerTimeP.innerText = `${formattingTime(YuiplayerVideo.currentTime)}/${formattingTime(YuiplayerVideo.duration)}`;
        YuiplayerProgressRanged.addEventListener('change',ProofreadProgressOk);
        YuiplayerProgressRanged.addEventListener('input',ProofreadProgress);
        YuiplayerVideo.addEventListener('timeupdate',ProofreadTime);       
        YuiplayerPlayButton.onclick = () =>{
            YuiplayerIfPlayVideo();
        }
        YuiplayerVideo.ondblclick = () =>{
            clearTimeout(ifVideoOnclick);
            YuiplayerIfPlayVideo();
        }
        
        let VideoChmove;
        let FVideoChmove;
        let IfClickLong = null;
        let IfPlaySoon = false;
        YuiplayerVideo.ontouchstart = (e) =>{
            clearTimeout(IfClickLong);
            VideoChmove = e.changedTouches[0].pageX; 
            FVideoChmove = e.changedTouches[0].pageX; 
            if(YuiplayerVideo.paused){
                return
            }
            IfClickLong = setTimeout(function () {
                YuipalayerWarnP.style.opacity = "0.4";
                YuiplayerVideo.playbackRate=5;
                IfPlaySoon = true;
            },500);
        }
        YuiplayerVideo.ontouchend = (e) =>{
            clearTimeout(IfClickLong);
            if(!IfPlaySoon&&Math.abs(FVideoChmove-VideoChmove)>=20){
          //  if(FVideoChmove-)
            console.log(this.endTime)
            YuiplayerVideo.currentTime=this.endTime;
            }
            YuipalayerWarnP.style.opacity = "0";
            YuipalayerWarnP.innerHTML="视频倍数中...";
            YuiplayerVideo.playbackRate=1;
            IfPlaySoon = false;
        }
        YuiplayerVideo.ontouchmove= (e) =>{
            clearTimeout(IfClickLong);
            if(Math.abs(FVideoChmove-e.touches[0].clientX)<=20){
                this.endTime=YuiplayerVideo.currentTime;      
                return
            }
            if(!this.endTime&&!IfPlaySoon){
                this.endTime=YuiplayerVideo.currentTime;
            }
            let a = this.endTime;
            let b = e.touches[0].clientX-VideoChmove;
            let c = YuiplayerProgressRanged.max / 100;
            let d = a / YuiplayerProgressRanged.max * 100;
            let g = d+(b/100);
            if(g<=0){
                g = 0;
            }else if(g>=100){
                g = 100;
            }
            
            if(VideoChmove&&!IfPlaySoon){

            YuiplayerProgressRanged.value=g*c;
            this.endTime=g*c;
                
            

                YuiplayerToolBox.style.pointerEvents="auto";
                YuiplayerToolBox.style.opacity="1";
                ifToolBox = true;
                YuiplayerProgressBox.style.setProperty('--YuiplayerProgress',(YuiplayerProgressRanged.value / YuiplayerProgressRanged.max * 100) + "%");
                YuipalayerWarnP.style.opacity = "0.4";
                YuipalayerWarnP.innerText = `${formattingTime(this.endTime)}/${formattingTime(YuiplayerVideo.duration)}`;
                YuiplayerTimeP.innerText = `${formattingTime(this.endTime)}/${formattingTime(YuiplayerVideo.duration)}`;
                VideoChmove=e.touches[0].clientX;       
            }            
        }
    }
    YuiplayerVideo.onclick = () =>{
        clearTimeout(ifVideoOnclick);
        ifVideoOnclick=setTimeout(function () {
            YuiplayerToolBox.style.transition = "opacity 0.2s";
            if(ifToolBox&&!YuiplayerVideo.paused){
                YuiplayerToolBox.style.pointerEvents="none";
                YuiplayerToolBox.style.opacity="0";
                ifToolBox = false;
            }else{
                YuiplayerToolBox.style.pointerEvents="auto";
                YuiplayerToolBox.style.opacity="1";
                ifToolBox = true;
            }
        },200);
    }
    
    
    
    window.addEventListener("orientationchange",()=>{
        if (window.orientation == 180 || window.orientation == 0) { 
            document.body.style.overflow="auto";
            document.documentElement.scrollTop=0;
            YuiplayerFullButton.innerHTML = YuiplayerFullScreen;
        }else if (window.orientation == 90 || window.orientation == -90 ){
            document.body.style.overflow="hidden";
                YuiplayerFullButton.innerHTML = YuiplayerFullBack;
                document.documentElement.scrollTop=0;
        }
    });
    
    YuiplayerFullButton.onclick = () =>{
        if(document.fullscreenElement!=null){
            document.exitFullscreen();
            document.getElementById("YuiplayerBox").className = "";
            YuiplayerVideo.className = "";
        }else{
            document.documentElement.requestFullscreen();
            document.getElementById("YuiplayerBox").className = "fullScreen";
            YuiplayerVideo.className = "fullScreenV";
        }
    }
    
    
}


const formattingTime = (Number) =>{
    if(isNaN(Number)){
    return "00:00"
    }
    let s = 0;
    let m = 0;
    if(Number>=60){
        m = parseInt(Number / 60);
        s = Math.round(Number - (60 * m));
        
        if(m<=9){
        m = "0"+m;
        }
        if(s<=9){
        s = "0"+s;
        }
        return m+":"+s
    }else{
        s = Math.round(Number)
        if(s<=9){
        s = "0"+s;
        }
        return "00:"+s
    }
}


