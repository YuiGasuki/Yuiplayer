/**
 *Yuiplayer
 *基于H5的视频播放器
 *@author Yui_ <2528197707@qq.com>
 *@date 2024-08-09 初始版本
 */
 
/**
 *文件头储存UI图标
 */
const YuiplayerPlayImg = `<svg t="1706010361462" viewBox="0 0 1024 1024" version="1.1" p-id="4208" width="24" height="24"><path d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z" fill="#aaaaaa" p-id="4209"></path></svg>`;
const YuiplayerStopImg = `<svg t="1706010319077" viewBox="0 0 1024 1024" version="1.1" p-id="5251" width="24" height="24"><path d="M128 106.858667C128 94.976 137.621333 85.333333 149.12 85.333333h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333H149.12A21.290667 21.290667 0 0 1 128 917.141333V106.88z m640 0c0-11.882667 9.621333-21.525333 21.12-21.525334h85.76c11.648 0 21.12 9.6 21.12 21.525334V917.12c0 11.882667-9.621333 21.525333-21.12 21.525333h-85.76a21.290667 21.290667 0 0 1-21.12-21.525333V106.88z" fill="#aaaaaa" p-id="5252"></path></svg>`
const YuiplayerFullScreen = `<svg t="1706089207439" viewBox="0 0 1024 1024" version="1.1" p-id="4231" width="28" height="28"><path d="M256 170.666667a128 128 0 0 0-128 128v213.333333a42.666667 42.666667 0 1 0 85.333333 0V298.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h213.333333a42.666667 42.666667 0 1 0 0-85.333333H256z m512 682.666666a128 128 0 0 0 128-128v-170.666666a42.666667 42.666667 0 1 0-85.333333 0v170.666666a42.666667 42.666667 0 0 1-42.666667 42.666667h-192a42.666667 42.666667 0 1 0 0 85.333333H768z" fill="#aaaaaa" p-id="4232"></path></svg>`;
const YuiplayerFullBack =`<svg t="1723225147451" viewBox="0 0 1024 1024" version="1.1" p-id="4219" width="32" height="32"><path d="M384 512a128 128 0 0 0 128-128V170.666667a42.666667 42.666667 0 1 0-85.333333 0v213.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 1 0 0 85.333333h213.333333z m277.333333 42.666667a128 128 0 0 0-128 128v170.666666a42.666667 42.666667 0 1 0 85.333334 0v-170.666666a42.666667 42.666667 0 0 1 42.666666-42.666667H853.333333a42.666667 42.666667 0 1 0 0-85.333333h-192z" fill="#aaaaaa" p-id="4220"></path></svg>`;
const YuiplayerMute = `<svg t="1756093655268" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5619" width="200" height="200" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M538.6 924.2c-18.9 0-37.8-4.7-55.3-14.1-1.1-0.6-2.1-1.2-3.2-1.9L267.4 769.4h-73.2C125.7 769.4 70 713.7 70 645.2V375.3c0-68.5 55.7-124.2 124.2-124.2h73.4l212.8-137c1-0.6 2-1.2 3-1.7 36.4-19.6 79.4-18.7 114.9 2.5 37.6 22.5 60.1 62.8 60.1 107.9v577.1c0 45.1-22.5 85.4-60.1 107.9-18.7 10.8-39.2 16.4-59.7 16.4z m-11.8-91.8c11.3 5.5 20.9 1.6 25.7-1.2 10.5-6.2 16.7-18 16.7-31.4V222.6c0-13.4-6.3-25.2-16.7-31.4-4.8-2.8-14.4-6.7-25.8-1.2l-222 143c-7.2 4.6-15.6 7.1-24.1 7.1h-86.5c-19.4 0-35.2 15.8-35.2 35.2v269.9c0 19.4 15.8 35.2 35.2 35.2h86.5c8.6 0 17.1 2.5 24.3 7.2l221.9 144.8zM731.4 647.8c-11.4 0-22.8-4.3-31.5-13-17.4-17.4-17.4-45.6 0-62.9l184.3-184.3c17.4-17.4 45.6-17.4 62.9 0 17.4 17.4 17.4 45.6 0 62.9L762.9 634.8c-8.7 8.7-20.1 13-31.5 13z" fill="#aaaaaa" p-id="5620"></path><path d="M915.7 647.8c-11.4 0-22.8-4.3-31.5-13L699.9 450.5c-17.4-17.4-17.4-45.6 0-62.9 17.4-17.4 45.6-17.4 62.9 0l184.3 184.3c17.4 17.4 17.4 45.6 0 62.9-8.6 8.7-20 13-31.4 13z" fill="#aaaaaa" p-id="5621"></path></svg>`
const YuiplayerVolume = `<svg t="1756093605007" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1482" width="200" height="200" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M545.962667 208.042667a66.679467 66.679467 0 0 0-67.413334 1.877333L232.106667 364.885333H150.186667c-36.522667 0-66.389333 29.696-66.389334 66.389334v239.786666c0 36.522667 29.696 66.389333 66.389334 66.389334h81.92l246.613333 154.965333c10.752 6.826667 23.04 10.069333 35.328 10.069333 11.093333 0 22.186667-2.730667 32.085333-8.362666a66.286933 66.286933 0 0 0 34.304-58.026667v-570.026667a66.781867 66.781867 0 0 0-34.474666-58.026666zM512 832.682667l-251.904-158.378667c-5.461333-3.413333-11.776-5.290667-18.090667-5.290667H152.064V433.152h89.941333c6.485333 0 12.8-1.877333 18.090667-5.290667L512 269.482667v563.2zM806.741333 551.082667c0-76.629333-41.130667-147.797333-107.52-185.856-16.384-9.386667-37.205333-3.754667-46.592 12.629333-9.386667 16.384-3.754667 37.205333 12.629334 46.592a146.432 146.432 0 0 1 0 253.610667c-16.384 9.386667-22.016 30.208-12.629334 46.592a34.1504 34.1504 0 0 0 46.762667 12.458666c66.218667-38.229333 107.349333-109.397333 107.349333-186.026666z" fill="#aaaaaa" p-id="1483"></path><path d="M784.896 239.957333c-16.384-9.386667-37.205333-3.754667-46.592 12.458667s-3.754667 37.205333 12.458667 46.592c89.770667 51.882667 145.578667 148.48 145.578666 252.074667s-55.808 200.192-145.578666 252.074666c-16.384 9.386667-21.845333 30.378667-12.458667 46.592 6.314667 10.922667 17.749333 17.066667 29.525333 17.066667 5.802667 0 11.605333-1.536 17.066667-4.608a360.226133 360.226133 0 0 0 179.712-311.125333c0-128-68.778667-247.125333-179.712-311.125334z" fill="#aaaaaa" p-id="1484"></path></svg>`
const YuiplayerList = `<svg t="1724127457993" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4224" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22"><path d="M0 837.818182c0 25.716364 20.712727 46.545455 46.592 46.545454h651.543273A46.452364 46.452364 0 0 0 744.727273 837.818182c0-25.716364-20.712727-46.545455-46.592-46.545455H46.592A46.452364 46.452364 0 0 0 0 837.818182z m0-325.818182c0 25.716364 20.712727 46.545455 46.545455 46.545455h744.727272c25.716364 0 46.545455-20.666182 46.545455-46.545455 0-25.716364-20.712727-46.545455-46.545455-46.545455H46.545455c-25.716364 0-46.545455 20.666182-46.545455 46.545455zM0 186.181818c0 25.716364 20.922182 46.545455 46.661818 46.545455h930.676364A46.498909 46.498909 0 0 0 1024 186.181818c0-25.716364-20.922182-46.545455-46.661818-46.545454H46.661818A46.498909 46.498909 0 0 0 0 186.181818z" fill="#aaaaaa" p-id="4225"></path></svg>`
const YuiplayerScreenshot = `<svg t="1777640204079" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5623" width="200" height="200" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M981.333333 789.333333h-106.666666V256c0-59.733333-46.933333-106.666667-106.666667-106.666667H234.666667V42.666667c0-25.6-17.066667-42.666667-42.666667-42.666667s-42.666667 17.066667-42.666667 42.666667v106.666666H42.666667c-25.6 0-42.666667 17.066667-42.666667 42.666667s17.066667 42.666667 42.666667 42.666667h106.666666V768c0 59.733333 46.933333 106.666667 106.666667 106.666667h533.333333V981.333333c0 25.6 17.066667 42.666667 42.666667 42.666667s42.666667-17.066667 42.666667-42.666667v-106.666666H981.333333c25.6 0 42.666667-17.066667 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667z m-213.333333-554.666666c12.8 0 21.333333 8.533333 21.333333 21.333333v341.333333l-145.066666-140.8c-17.066667-17.066667-42.666667-17.066667-59.733334 0l-140.8 145.066667L384 541.866667c-17.066667-17.066667-38.4-17.066667-55.466667-4.266667l-89.6 72.533333V234.666667H768z m-512 554.666666c-12.8 0-21.333333-8.533333-21.333333-21.333333v-42.666667l115.2-93.866666 64 64c8.533333 8.533333 17.066667 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8l140.8-145.066667 174.933333 166.4v72.533333H256z" p-id="5624" fill="#aaaaaa"></path><path d="M384 482.133333c51.2 0 93.866667-42.666667 93.866667-93.866666s-42.666667-93.866667-93.866667-93.866667-93.866667 38.4-93.866667 89.6 42.666667 98.133333 93.866667 98.133333z m0-128c17.066667 0 34.133333 12.8 34.133333 34.133334s-17.066667 29.866667-34.133333 29.866666-34.133333-17.066667-34.133333-34.133333 17.066667-29.866667 34.133333-29.866667z" p-id="5625" fill="#aaaaaa"></path></svg>`
 
let YuiplayerData;
function Yuiplayer(Objert){
    console.log("[Yuiplayer]\n %cYuiplayer v3.0%chttps://github.com/YuiGasuki/Yuiplayer","color:white;font-size:12px;padding:5px 7px;border-radius:3px 0px 0px 3px;background:#d84149;margin-bottom:16px", "font-size:12px;padding:5px;border-radius:0px 3px 3px 0px;background-color:white;")
    YuiplayerData = Objert;
    let mainbox = document.getElementById(YuiplayerData.id);
    mainbox.innerHTML = `
    <style>
    #${YuiplayerData.id} {
    --PlayerWidth:${YuiplayerData.width};
    --PlayerMaxWidth:${YuiplayerData.maxWidth};
    --PlayerMaxHeight:${YuiplayerData.maxHeight};
    margin:0px;
    }
    </style>
    <div id="YuiplayerBox" class="YuiplayerBox2">
        <div id="YuipalayerWarnP" >视频倍速中...</div>
        ${Array.isArray(YuiplayerData.url) ? `<div id="YuiplayerVideoListBack" ></div><div id="YuiplayerVideoList" ></div>` : ''}
        <video src="${Array.isArray(YuiplayerData.url) ? YuiplayerData.url[0] : YuiplayerData.url}" id="YuiplayerVideo" class="YuiplayerVideo2"  poster="${Array.isArray(YuiplayerData.poster) ? YuiplayerData.poster[0] : YuiplayerData.poster}" autoplay muted></video>
        <div id="YuiplayerToolBox" class="YuiplayerToolBox2">
            <div id="YuiplayerProgressBox">
                <div id="YuiplayerProgressAlready"></div>
            </div>
            <input type="range" id="YuiplayerProgressRanged" min="0" value="100">
            <div id="YuiplayerPlayButton" >${YuiplayerPlayImg}</div><p id="YuiplayerTimeP" >00:00/00:00</p>
            <div style="display:flex;">
            <div id="YuiplayerVolumeButton" >${YuiplayerMute}</div>
            ${YuiplayerData.screenshot ? `<div id="YuiplayerScreenshotButton" >${YuiplayerScreenshot}</div>` : ''}
            ${Array.isArray(YuiplayerData.url) ? `<div id="YuiplayerPlayList" >${YuiplayerList}</div>` : ''}
            <div id="YuiplayerFullButton" >${YuiplayerFullScreen}</div>
            </div>
        </div>
    </div>
    `;
    let YuiplayerVideo = document.getElementById("YuiplayerVideo");
    let YuiplayerPlayButton = document.getElementById("YuiplayerPlayButton");
    let YuiplayerProgressRanged = document.getElementById("YuiplayerProgressRanged");
    let YuiplayerProgressBox = document.getElementById("YuiplayerProgressBox");
    let YuiplayerTimeP = document.getElementById("YuiplayerTimeP");
    let YuiplayerVolumeButton = document.getElementById('YuiplayerVolumeButton');
    let YuiplayerToolBox = document.getElementById("YuiplayerToolBox");
    let YuiplayerFullButton = document.getElementById("YuiplayerFullButton");
    let YuipalayerWarnP = document.getElementById("YuipalayerWarnP");
    let ifToolBox = true;
    let ifProofreadProgress = false;
    let listVideoNext = 0;
    
    if(Array.isArray(YuiplayerData.url)){
    const channel = new BroadcastChannel('Yuiplayer');
    const YuiplayerVideoList = document.getElementById("YuiplayerVideoList")
    const YuiplayerVideoListBack = document.getElementById("YuiplayerVideoListBack")
    const YuiplayerPlayList = document.getElementById("YuiplayerPlayList")
    
    for(let i =0;i<YuiplayerData.url.length;i++){
    let div = document.createElement("div");
    
    let img = document.createElement("img");
    img.src=YuiplayerData.poster[i];
    div.appendChild(img)
    div.className = "videoListDiv"
    let p = document.createElement("p");
    p.innerText="P"+(i+1);
    if(i===0){
    p.style.color="#FF6699"
    }
    p.className = "videoListP"
    div.onclick = () =>{
    if(listVideoNext!=i){
    
    channel.postMessage(i)
    YuiplayerVideo.src=YuiplayerData.url[i]
    YuiplayerVideo.poster = YuiplayerData.poster[i]
    YuiplayerVideo.currentTime=0;
    listVideoNext=i
    YuiplayerProgressRanged.value=0
    const a=document.getElementsByClassName("videoListP");
    for(let i=0;i<a.length;i++){
    a[i].style.color="#aaaaaa";
    }
    p.style.color="#FF6699"
    }
 }
    div.appendChild(p)
    YuiplayerVideoList.appendChild(div)
    }
    channel.addEventListener('message', (e) => {
    const a=document.getElementsByClassName("videoListP");
    for(let i=0;i<a.length;i++){
    a[i].style.color="#aaaaaa";
    }
    document.getElementsByClassName("videoListP")[e.data-1].style.color="#FF6699"
    listVideoNext=e.data-1
    })
   
    
    YuiplayerVideoListBack.onclick=()=>{
    YuiplayerVideoListBack.style.display="none"
    YuiplayerVideoList.style.display="none"
    }
    YuiplayerPlayList.onclick=()=>{
    YuiplayerVideoListBack.style.display="block"
    YuiplayerVideoList.style.display="block"
    }
    }
    
let YuiplayerKeyAdjustProgress = null
let YuiplayerKeyAdjustProgressTwo = null
    document.onkeydown = function(e) {
let keyNum = window.event ? e.keyCode : e.which;
console.log(keyNum)
if(keyNum===37){
YuiplayerVideo.currentTime-=6
return
}
if(keyNum===39){
YuiplayerVideo.currentTime+=6
return
}
if(keyNum===38){
YuipalayerWarnP.style.opacity = "0.4";
YuiplayerVideo.playbackRate=5;
}
if(keyNum===40){
YuipalayerWarnP.style.opacity = "0.4";
YuipalayerWarnP.innerHTML="视频减速中...";
YuiplayerVideo.playbackRate=0.5;
}
if(keyNum===70){
//if(document.fullscreenElement===null){
YuiplayerFullButton.click()
//}
}
if(keyNum===32){
YuiplayerIfPlayVideo()
}

};
document.onkeyup = function(e) {
let keyNum = window.event ? e.keyCode : e.which;
if(keyNum===38){
YuipalayerWarnP.style.opacity = "0";
YuipalayerWarnP.innerHTML="视频倍速中...";
YuiplayerVideo.playbackRate=1;
}
if(keyNum===40){
YuipalayerWarnP.style.opacity = "0";
YuipalayerWarnP.innerHTML="视频倍速中...";
YuiplayerVideo.playbackRate=1;
}
};
    Yuiplayer.prototype.CurrentTime = () =>{
    return YuiplayerVideo.currentTime
    }
    Yuiplayer.prototype.playNext = (data) =>{
    YuiplayerVideo.src=data.url
    YuiplayerVideo.poster = data.poster
    YuiplayerVideo.currentTime=data.currentTime == undefined ? 0 : data.currentTime;
    YuiplayerProgressRanged.value=0
    }
    
    YuiplayerVideo.addEventListener("ended", function () {
    if(Array.isArray(YuiplayerData.url)&&listVideoNext+1<YuiplayerData.url.length){
    document.getElementsByClassName("videoListDiv")[listVideoNext+1].click()
    }else{
    YuiplayerPlayButton.innerHTML = YuiplayerPlayImg;
            if(!ifToolBox){
                YuiplayerToolBox.style.pointerEvents="auto";
                YuiplayerToolBox.style.opacity="1";
                ifToolBox = true;
            }
         }
    });
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
    let ifVideoOnclick = null;
    let documentBodyStyleFilter = 1;
    YuiplayerVideo.onloadedmetadata = () =>{
        YuiplayerProgressRanged.max = YuiplayerVideo.duration;
        YuiplayerTimeP.innerText = `${formattingTime(YuiplayerVideo.currentTime)}/${formattingTime(YuiplayerVideo.duration)}`;
        
        YuiplayerProgressRanged.addEventListener('change',ProofreadProgressOk);
        YuiplayerProgressRanged.addEventListener('input',ProofreadProgress);
        YuiplayerVideo.addEventListener('timeupdate',ProofreadTime);       
        YuiplayerPlayButton.onclick = () =>{
            YuiplayerIfPlayVideo();
        }
        YuiplayerIfPlayVideo()
        YuiplayerVideo.ondblclick = () =>{
            clearTimeout(ifVideoOnclick);
            YuiplayerIfPlayVideo();
        }
        
        let VideoChmove;
        let TimeStart;
        let MStart,MStartX
        let IfClickLong = null;
        let IfPlaySoon = false;
        let ifdocumentBodyStyleFilter = false;
        YuiplayerVideo.ontouchstart = (e) =>{
            clearTimeout(IfClickLong);
            VideoChmove = e.changedTouches[0].pageX;
            TimeStart = e.changedTouches[0].pageX
            MStart = e.changedTouches[0].pageY
            MStartX=e.changedTouches[0].pageX
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
            if(!IfPlaySoon&&Math.abs(MStartX-e.changedTouches[0].pageX)>=30){
            console.log(this.endTime)
            if(Math.abs(TimeStart - e.changedTouches[0].pageX)>=10){
            YuiplayerVideo.currentTime=this.endTime;
            YuiplayerProgressRanged.value=this.endTime;
                        this.endTime=null;

            }
            }
            this.endTime=null;
            YuipalayerWarnP.style.opacity = "0";
            YuipalayerWarnP.innerHTML="视频倍速中...";
            YuiplayerVideo.playbackRate=1;
            IfPlaySoon = false;
            ifdocumentBodyStyleFilter=false
        }
        YuiplayerVideo.ontouchmove= (e) =>{
            clearTimeout(IfClickLong);
            if(!this.endTime&&!IfPlaySoon){
                this.endTime=YuiplayerVideo.currentTime;
            }
            if(Math.abs(MStart-e.changedTouches[0].pageY)>=30||ifdocumentBodyStyleFilter){
            ifdocumentBodyStyleFilter=true
            let ba = documentBodyStyleFilter+((MStart-e.changedTouches[0].pageY)/10000);
            YuiplayerVideo.style.filter=" brightness("+(ba >= 1 ? 1 : ba <= 0.3 ? 0.3 : ba)+")"
            documentBodyStyleFilter+=ba >= 1 ? 0 : ba <= 0.3 ? 0 : ((MStart-e.changedTouches[0].pageY)/10000)
            
            }else if(Math.abs(MStartX-e.changedTouches[0].pageX)>=30){
            let a = this.endTime;
            let b = e.changedTouches[0].pageX-VideoChmove;
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
                
            


;
                YuiplayerProgressBox.style.setProperty('--YuiplayerProgress',(YuiplayerProgressRanged.value / YuiplayerProgressRanged.max * 100) + "%");
                YuipalayerWarnP.style.opacity = "0.4";
                YuipalayerWarnP.innerText = `${formattingTime(this.endTime)}/${formattingTime(YuiplayerVideo.duration)}`;
                YuiplayerTimeP.innerText = `${formattingTime(this.endTime)}/${formattingTime(YuiplayerVideo.duration)}`;
                VideoChmove=e.changedTouches[0].pageX;       
            }            
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
    let ifYuiplayerVolumeButton = true;
    YuiplayerVolumeButton.onclick =()=>{
    YuiplayerVideo.muted = false;
    if(ifYuiplayerVolumeButton){
    YuiplayerVideo.volume = 1;
    YuiplayerVolumeButton.innerHTML = YuiplayerVolume
    ifYuiplayerVolumeButton=false
    }else{
    YuiplayerVideo.volume = 0
    YuiplayerVolumeButton.innerHTML = YuiplayerMute
    ifYuiplayerVolumeButton=true
    }
    }
    if (YuiplayerData.screenshot){
        document.getElementById('YuiplayerScreenshotButton').onclick=()=>{
                const YuiplayerCanvas = document.createElement('canvas')
                const YuiplayerW = YuiplayerVideo.videoWidth
                const YuiplayerH = YuiplayerVideo.videoHeight
                YuiplayerCanvas.width = YuiplayerW
                YuiplayerCanvas.height = YuiplayerH
                const YuiplayerCtx = YuiplayerCanvas.getContext('2d')
                YuiplayerCtx.drawImage(YuiplayerVideo, 0, 0, YuiplayerW, YuiplayerH)
                YuiplayerCanvas.toBlob((blob) => {
                    const YuiplayerLink = document.createElement('a');
                    YuiplayerLink.href = URL.createObjectURL(blob);
                    YuiplayerLink.download = (((Math.random() * 9000) + 1000).toString(16).slice(5))+'.jpg';
                    YuiplayerLink.click();
                    URL.revokeObjectURL(YuiplayerLink.href);
                }, 'image/jpeg', 1)
            }
    }
    
    window.addEventListener("fullscreenchange",()=>{
if(document.fullscreenElement===null){
            document.body.style.overflow="auto";
            document.documentElement.scrollTop=0;
            document.getElementById('YuiplayerBox').className = "YuiplayerBox2";
            document.getElementById('YuiplayerVideo').className = "YuiplayerVideo2";
            document.getElementById('YuiplayerToolBox').className = "YuiplayerToolBox2";
            
            
            YuiplayerFullButton.innerHTML = YuiplayerFullScreen;
            
        }else{
                        document.body.style.overflow="hidden";
             document.getElementById('YuiplayerBox').className = "YuiplayerBox1";
            document.getElementById('YuiplayerVideo').className = "YuiplayerVideo1";
            document.getElementById('YuiplayerToolBox').className = "YuiplayerToolBox1";
                YuiplayerFullButton.innerHTML = YuiplayerFullBack;
                document.documentElement.scrollTop=0;
        }
    });
    
    YuiplayerFullButton.onclick = () =>{
        if(document.fullscreenElement!=null){
            document.exitFullscreen();
            document.body.style.overflow="auto";
            document.documentElement.scrollTop=0;
            document.getElementById('YuiplayerBox').className = "YuiplayerBox2";
            document.getElementById('YuiplayerVideo').className = "YuiplayerVideo2";
            document.getElementById('YuiplayerToolBox').className = "YuiplayerToolBox2";
            
            
            YuiplayerFullButton.innerHTML = YuiplayerFullScreen;
        }else{
            document.documentElement.requestFullscreen();
            document.body.style.overflow="hidden";
             document.getElementById('YuiplayerBox').className = "YuiplayerBox1";
            document.getElementById('YuiplayerVideo').className = "YuiplayerVideo1";
                        document.getElementById('YuiplayerToolBox').className = "YuiplayerToolBox1";

                YuiplayerFullButton.innerHTML = YuiplayerFullBack;
                document.documentElement.scrollTop=0;
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



