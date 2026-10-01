
const quranSurahs = [
    { id: "001", name: "الفَاتِحَة", page: 1, verses: 7, type: "مَكِّيَّة" },
    { id: "002", name: "البَقَرَة", page: 2, verses: 286, type: "مَدَنِيَّة" },
    { id: "003", name: "آلِ عِمْرَان", page: 50, verses: 200, type: "مَدَنِيَّة" },
    { id: "004", name: "النِّسَاء", page: 77, verses: 176, type: "مَدَنِيَّة" },
    { id: "005", name: "المَائِدَة", page: 106, verses: 120, type: "مَدَنِيَّة" },
    { id: "006", name: "الأَنْعَام", page: 128, verses: 165, type: "مَكِّيَّة" },
    { id: "007", name: "الأَعْرَاف", page: 151, verses: 206, type: "مَكِّيَّة" },
    { id: "008", name: "الأَنْفَال", page: 177, verses: 75, type: "مَدَنِيَّة" },
    { id: "009", name: "التَّوْبَة", page: 187, verses: 129, type: "مَدَنِيَّة" },
    { id: "010", name: "يُونُس", page: 208, verses: 109, type: "مَكِّيَّة" },
    { id: "011", name: "هُود", page: 221, verses: 123, type: "مَكِّيَّة" },
    { id: "012", name: "يُوسُف", page: 235, verses: 111, type: "مَكِّيَّة" },
    { id: "013", name: "الرَّعْد", page: 249, verses: 43, type: "مَدَنِيَّة" },
    { id: "014", name: "إِبْرَاهِيم", page: 255, verses: 52, type: "مَكِّيَّة" },
    { id: "015", name: "الحِجْر", page: 262, verses: 99, type: "مَكِّيَّة" },
    { id: "016", name: "النَّحْل", page: 267, verses: 128, type: "مَكِّيَّة" },
    { id: "017", name: "الإِسْرَاء", page: 282, verses: 111, type: "مَكِّيَّة" },
    { id: "018", name: "الكَهْف", page: 293, verses: 110, type: "مَكِّيَّة" },
    { id: "019", name: "مَرْيَم", page: 305, verses: 98, type: "مَكِّيَّة" },
    { id: "020", name: "طه", page: 312, verses: 135, type: "مَكِّيَّة" },
    { id: "021", name: "الأَنْبِيَاء", page: 322, verses: 112, type: "مَكِّيَّة" },
    { id: "022", name: "الحَجّ", page: 332, verses: 78, type: "مَدَنِيَّة" },
    { id: "023", name: "المُؤْمِنُون", page: 342, verses: 118, type: "مَكِّيَّة" },
    { id: "024", name: "النُّور", page: 350, verses: 64, type: "مَدَنِيَّة" },
    { id: "025", name: "الفُرْقَان", page: 359, verses: 77, type: "مَكِّيَّة" },
    { id: "026", name: "الشُّعَرَاء", page: 367, verses: 227, type: "مَكِّيَّة" },
    { id: "027", name: "النَّمْل", page: 377, verses: 93, type: "مَكِّيَّة" },
    { id: "028", name: "القَصَص", page: 385, verses: 88, type: "مَكِّيَّة" },
    { id: "029", name: "العَنْكَبُوت", page: 396, verses: 69, type: "مَكِّيَّة" },
    { id: "030", name: "الرُّوم", page: 404, verses: 60, type: "مَكِّيَّة" },
    { id: "031", name: "لُقْمَان", page: 411, verses: 34, type: "مَكِّيَّة" },
    { id: "032", name: "السَّجْدَة", page: 415, verses: 30, type: "مَكِّيَّة" },
    { id: "033", name: "الأَحْزَاب", page: 418, verses: 73, type: "مَدَنِيَّة" },
    { id: "034", name: "سَبَأ", page: 428, verses: 54, type: "مَكِّيَّة" },
    { id: "035", name: "فَاطِر", page: 434, verses: 45, type: "مَكِّيَّة" },
    { id: "036", name: "يس", page: 440, verses: 83, type: "مَكِّيَّة" },
    { id: "037", name: "الصَّافَّات", page: 446, verses: 182, type: "مَكِّيَّة" },
    { id: "038", name: "ص", page: 453, verses: 88, type: "مَكِّيَّة" },
    { id: "039", name: "الزُّمَر", page: 458, verses: 75, type: "مَكِّيَّة" },
    { id: "040", name: "غَافِر", page: 467, verses: 85, type: "مَكِّيَّة" },
    { id: "041", name: "فُصِّلَت", page: 477, verses: 54, type: "مَكِّيَّة" },
    { id: "042", name: "الشُّورَى", page: 483, verses: 53, type: "مَكِّيَّة" },
    { id: "043", name: "الزُّخْرُف", page: 489, verses: 89, type: "مَكِّيَّة" },
    { id: "044", name: "الدُّخَان", page: 496, verses: 59, type: "مَكِّيَّة" },
    { id: "045", name: "الجَاثِيَة", page: 499, verses: 37, type: "مَكِّيَّة" },
    { id: "046", name: "الأَحْقَاف", page: 502, verses: 35, type: "مَكِّيَّة" },
    { id: "047", name: "مُحَمَّد", page: 507, verses: 38, type: "مَدَنِيَّة" },
    { id: "048", name: "الفَتْح", page: 511, verses: 29, type: "مَدَنِيَّة" },
    { id: "049", name: "الحُجُرَات", page: 515, verses: 18, type: "مَدَنِيَّة" },
    { id: "050", name: "ق", page: 518, verses: 45, type: "مَكِّيَّة" },
    { id: "051", name: "الذَّارِيَات", page: 520, verses: 60, type: "مَكِّيَّة" },
    { id: "052", name: "الطُّور", page: 523, verses: 49, type: "مَكِّيَّة" },
    { id: "053", name: "النَّجْم", page: 526, verses: 62, type: "مَكِّيَّة" },
    { id: "054", name: "القَمَر", page: 528, verses: 55, type: "مَكِّيَّة" },
    { id: "055", name: "الرَّحْمَن", page: 531, verses: 78, type: "مَدَنِيَّة" },
    { id: "056", name: "الوَاقِعَة", page: 534, verses: 96, type: "مَكِّيَّة" },
    { id: "057", name: "الحَدِيد", page: 537, verses: 29, type: "مَدَنِيَّة" },
    { id: "058", name: "المُجَادَلَة", page: 542, verses: 22, type: "مَدَنِيَّة" },
    { id: "059", name: "الحَشْر", page: 545, verses: 24, type: "مَدَنِيَّة" },
    { id: "060", name: "المُمْتَحَنَة", page: 549, verses: 13, type: "مَدَنِيَّة" },
    { id: "061", name: "الصَّفّ", page: 551, verses: 14, type: "مَدَنِيَّة" },
    { id: "062", name: "الجُمُعَة", page: 553, verses: 11, type: "مَدَنِيَّة" },
    { id: "063", name: "المُنَافِقُون", page: 554, verses: 11, type: "مَدَنِيَّة" },
    { id: "064", name: "التَّغَابُن", page: 556, verses: 18, type: "مَدَنِيَّة" },
    { id: "065", name: "الطَّلَاق", page: 558, verses: 12, type: "مَدَنِيَّة" },
    { id: "066", name: "التَّحْرِيم", page: 560, verses: 12, type: "مَدَنِيَّة" },
    { id: "067", name: "المُلْك", page: 562, verses: 30, type: "مَكِّيَّة" },
    { id: "068", name: "القَلَم", page: 564, verses: 52, type: "مَكِّيَّة" },
    { id: "069", name: "الحَاقَّة", page: 566, verses: 52, type: "مَكِّيَّة" },
    { id: "070", name: "المَعَارِج", page: 568, verses: 44, type: "مَكِّيَّة" },
    { id: "071", name: "نُوح", page: 570, verses: 28, type: "مَكِّيَّة" },
    { id: "072", name: "الجِنّ", page: 571, verses: 28, type: "مَكِّيَّة" },
    { id: "073", name: "المُزَّمِّل", page: 573, verses: 20, type: "مَكِّيَّة" },
    { id: "074", name: "المُدَّثِّر", page: 575, verses: 56, type: "مَكِّيَّة" },
    { id: "075", name: "القِيَامَة", page: 577, verses: 40, type: "مَكِّيَّة" },
    { id: "076", name: "الإِنْسَان", page: 578, verses: 31, type: "مَدَنِيَّة" },
    { id: "077", name: "المُرْسَلَات", page: 580, verses: 50, type: "مَكِّيَّة" },
    { id: "078", name: "النَّبَأ", page: 582, verses: 40, type: "مَكِّيَّة" },
    { id: "079", name: "النَّازِعَات", page: 583, verses: 46, type: "مَكِّيَّة" },
    { id: "080", name: "عَبَسَ", page: 585, verses: 42, type: "مَكِّيَّة" },
    { id: "081", name: "التَّكْوِير", page: 586, verses: 29, type: "مَكِّيَّة" },
    { id: "082", name: "الانْفِطَار", page: 587, verses: 19, type: "مَكِّيَّة" },
    { id: "083", name: "المُطَفِّفِين", page: 587, verses: 36, type: "مَكِّيَّة" },
    { id: "084", name: "الانْشِقَاق", page: 589, verses: 25, type: "مَكِّيَّة" },
    { id: "085", name: "البُرُوج", page: 590, verses: 22, type: "مَكِّيَّة" },
    { id: "086", name: "الطَّارِق", page: 591, verses: 17, type: "مَكِّيَّة" },
    { id: "087", name: "الأَعْلَى", page: 591, verses: 19, type: "مَكِّيَّة" },
    { id: "088", name: "الغَاشِيَة", page: 592, verses: 26, type: "مَكِّيَّة" },
    { id: "089", name: "الفَجْر", page: 593, verses: 30, type: "مَكِّيَّة" },
    { id: "090", name: "البَلَد", page: 594, verses: 20, type: "مَكِّيَّة" },
    { id: "091", name: "الشَّمْس", page: 595, verses: 15, type: "مَكِّيَّة" },
    { id: "092", name: "اللَّيْل", page: 595, verses: 21, type: "مَكِّيَّة" },
    { id: "093", name: "الضُّحَى", page: 596, verses: 11, type: "مَكِّيَّة" },
    { id: "094", name: "الشَّرْح", page: 596, verses: 8, type: "مَكِّيَّة" },
    { id: "095", name: "التِّين", page: 597, verses: 8, type: "مَكِّيَّة" },
    { id: "096", name: "العَلَق", page: 597, verses: 19, type: "مَكِّيَّة" },
    { id: "097", name: "القَدْر", page: 598, verses: 5, type: "مَكِّيَّة" },
    { id: "098", name: "البَيِّنَة", page: 598, verses: 8, type: "مَدَنِيَّة" },
    { id: "099", name: "الزَّلْزَلَة", page: 599, verses: 8, type: "مَدَنِيَّة" },
    { id: "100", name: "العَادِيَات", page: 599, verses: 11, type: "مَكِّيَّة" },
    { id: "101", name: "القَارِعَة", page: 600, verses: 11, type: "مَكِّيَّة" },
    { id: "102", name: "التَّكَاثُر", page: 600, verses: 8, type: "مَكِّيَّة" },
    { id: "103", name: "العَصْر", page: 601, verses: 3, type: "مَكِّيَّة" },
    { id: "104", name: "الهُمَزَة", page: 601, verses: 9, type: "مَكِّيَّة" },
    { id: "105", name: "الفِيل", page: 601, verses: 5, type: "مَكِّيَّة" },
    { id: "106", name: "قُرَيْش", page: 602, verses: 4, type: "مَكِّيَّة" },
    { id: "107", name: "المَاعُون", page: 602, verses: 7, type: "مَكِّيَّة" },
    { id: "108", name: "الكَوْثَر", page: 602, verses: 3, type: "مَكِّيَّة" },
    { id: "109", name: "الكَافِرُون", page: 603, verses: 6, type: "مَكِّيَّة" },
    { id: "110", name: "النَّصْر", page: 603, verses: 3, type: "مَدَنِيَّة" },
    { id: "111", name: "المَسَد", page: 603, verses: 5, type: "مَكِّيَّة" },
    { id: "112", name: "الإِخْلَاص", page: 604, verses: 4, type: "مَكِّيَّة" },
    { id: "113", name: "الفَلَق", page: 604, verses: 5, type: "مَكِّيَّة" },
    { id: "114", name: "النَّاس", page: 604, verses: 6, type: "مَكِّيَّة" }
];
const names = [
    "ابراهيم الجبرين",
    "ابراهيم العسيري",
    "ابو بكر الشاطري",
    "احمد بن علي العجمي",
    "احمد الحواشي",
    "السيد سعيد",
    "احمد صابر",
    "احمد نعينع",
    "اكرم العلاقمي",
    "الحسيني العزازي",
    "ادريس ابكر",
    "الزين محمد احمد",
    "القارئ ياسين",
    "العشري عمران",
    "العيون الكوشي",
    "العيون الصائغ",
    "جمال شاكر عبد الله",
    "حامد الدغريري",
    "خالد الجليل",
    "خالد القحطاني",
    "خالد عبد الكافي",
    "خالد الوهيبي",
    "خليفة الطنيجي",
    "داود حمزة",
    "رشيد افراد",
    "رشيد بلعاية",
    "زكريا حمامة",
    "عبد الله بخاري",
    "سعد الغامدي",
    "سعود الشريم",
    "سهل ياسين",
    "زكي داغستاني",
    "سامي الحسن",
    "سامي الدوسري",
    "سيد رمضان",
    "شعبان الصياد",
    "شيرزاد عبد الرحمن طاهر",
    "صابر عبد الحكم",
    "صالح الصاهود",
    "صالح ال طالب",
    "صالح الهبدان",
    "صلاح البدير",
    "صلاح الهاشم",
    "ابراهيم الاخضر",
    "صلاح ابو طاهر",
    "مختار الحاج",
    "عادل ريان",
    "عبدالبارئ الثبيتي",
    "عبدالبارئ محمد",
    "عبدالباسط عبدالصمد",
    "عبدالرحمن السديس",
    "عبد العزيز الاحمد",
    "عبد العزيز الزهراني",
    "عبد الله البريمي",
    "عبد الله البعيجان",
    "عبد الله المطرود",
    "عبد الله بصفر",
    "عبد الله خياط",
    "عبد الله عواد الجهني",
]

let mood = ""
let text;
let ArrayOfFirsts = document.querySelectorAll('#first')
let classOfElement;
let allSquares = document.querySelectorAll('square');
let display = 'true';
let SelectAll = document.querySelectorAll('span');
let moshafID
SelectAll.forEach(liIndex => {
    liIndex.onclick = function(){
        this.style.background = "gray";
    }
})


function createLis(liTextContent){
    for(let i = 1; i < names.length+1;i++){
        let div = document.createElement("div")
        div.id = "title"
        div.className = i
        div.textContent = liTextContent[i]
        div.onclick = function(){
            //document.querySelector(".liTextContent").textContent = this.textContent;
            createLiOfSurahs(quranSurahs, div);                    
        }
        document.querySelector(".sonOfList").appendChild(div)
    }
}
createLis(names)

function createLiOfSurahs(ArrayOSurahs, title){
        mood = title.className
        document.querySelector(".son").innerHTML = ""
        let ul = document.createElement("ul")
        document.querySelector(".son").appendChild(ul)
        for(let i = 0; i < 114;i++){
            let li = document.createElement("li")
            li.dir = "rtl"
            li.onclick = function(){API_REQUEST(ArrayOSurahs[i].id)}
            li.innerHTML = `
            <span class="name">${ArrayOSurahs[i].name}</span>
            <span class="type">${ArrayOSurahs[i].type}</span>
            <span class="verses">${ArrayOSurahs[i].verses}</span>
            <span class="id">${ArrayOSurahs[i].id}</span>
            `
            ul.appendChild(li)
        }
}
function search(value){
    for(let i = 0; i < titles.length;i++){
        if(titles[i].innerHTML.includes(value)){
            titles[i].style.display = 'flex';
            titles[i].nextElementSibling.style.display = 'block';    
        }else{
            titles[i].style.display = 'none'
            titles[i].nextElementSibling.style.display = 'none'
        }
    }

}


let innerMood;

let AudioMood
function handleClick(){
    let span = document.createElement("span")
    span.className = "material-icons"
    if(AudioMood === true){
        span.textContent = "play_arrow"
        document.querySelector('audio').pause()
        AudioMood = false;
    }else{
        span.textContent = "pause"
        document.querySelector('audio').play()
        AudioMood = true
    }
    document.querySelector(".playAndPause").innerHTML = ""
    document.querySelector('.playAndPause').appendChild(span)
}


function chageCurrentTime(argument){
    if(argument === "minusTen"){
        document.querySelector('audio').currentTime = document.querySelector('audio').currentTime-10
    }else{
        document.querySelector('audio').currentTime = document.querySelector('audio').currentTime+10
    }
}

function API_REQUEST(id){
AudioMood = true;

fetch(`https://www.mp3quran.net/api/v3/reciters?language=ar&reciter=${mood}`).then(res => res.json()).then(data => {
    if(document.querySelector(".son").querySelector(".divOfPlay")){
        document.querySelector(".son").querySelector(".divOfPlay").remove()
    }
    moshafID = data.reciters[0].moshaf[0].server
    console.log(data)
    console.log(moshafID)
    let divOfPaly = document.createElement("div")
    divOfPaly.innerHTML = `
    <div id='parentOfRange'>
    <button class="close">X</button>
      <p style="color: white; background-color: rgba(225, 225, 230, 0.42); padding: 5px; font-size: 20px; border-radius: 10px;" class="parg">${data.reciters[0].name}</p>
      <input id="range" type="range" value="0" step="0.1">
      <div class="parentOfControls">
      <button class="minusTen" onclick="chageCurrentTime(this.className)">
       <span class="material-icons">fast_rewind</span>
      </button>
        <button onclick='handleClick()' class='playAndPause'><span class="material-icons">pause</span></button>
      <button class="plusTen" onclick="chageCurrentTime(this.className)">
       <span class="material-icons">fast_forward</span>
      </button>
      </div>
     </div>
     <audio style='display='none' controls loop autoplay>
      <source src="${moshafID+`${id}.mp3`}" type='audio/mp3'>
     </audio>
    `;
    divOfPaly.className = "divOfPlay"
     document.querySelector('.son').firstElementChild.before(divOfPaly)
    document.querySelector('audio').addEventListener('timeupdate', function(){
    document.getElementById('range').max = document.querySelector('audio').duration
    document.getElementById('range').value = document.querySelector('audio').currentTime
    if(document.querySelector(".close")){
        document.querySelector(".close").onclick = function(){
            this.parentElement.parentElement.remove()
            document.querySelector('audio').pause()
            AudioMood = false
        }
    }
})
document.getElementById('range').addEventListener('input', function(){
    document.querySelector('audio').currentTime = document.getElementById('range').value
})
})
}








