const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	// {
    //     name: '',
    //     artist: '',
    //     url: '',
    //     cover: '',
    // }, 
    {
        name: "想い出は远くの日々",
        artist: "天門",
        url: 'https://m10.music.126.net/20231024091921/c0536b580e4640851b595ae042c98147/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3883640466/858b/a918/1895/eb1b5e2e15c99f9f171b0dc2f8bd7c04.m4a',
        cover: 'https://p2.music.126.net/O9vr2_lr6vRbQ68VWJF44w==/109951164950199108.jpg'
    },
    {
        name: '空と海と詩',
        artist: '天門',
        url: '/public/musc/mp3/天門-想い出は远くの日々.mp3',
        cover: 'https://p1.music.126.net/8YoHguW4VM84BbjHUgpipw==/109951168282411219.jpg',
    }, 
    {
        name: '我在那一角患过风伤',
        artist: '群星',
        url: 'http://m7.music.126.net/20231023103542/1fbae30e83651f3318a7d0bcd53734bd/ymusic/c3f2/36ca/d5bd/c4198d47e056eb835059971c53146d1c.mp3',
        cover: 'https://p1.music.126.net/3MrR9xSZt3Hal_2AIW2dXA==/1349100767337953.jpg',
    }, 
    {
        name: 'River Flows In You',
        artist: '愚人幽篁里',
        url: 'http://m7.music.126.net/20231023104843/768310a992dc95eda91c7985ccbecdb8/ymusic/e1da/991d/5549/01568c9550095b10e6059b40ecbd3040.mp3',
        cover: 'https://p2.music.126.net/K27jzoK0qyyv6--Ig0zEWw==/109951163681686469.jpg',
    }, 
    {
        name: 'ふたたび',
        artist: 'V.A.',
        url: 'http://m7.music.126.net/20231023125441/f25af3a12e96f3c2e07969b45e8d8f1a/ymusic/b1a8/2456/88bb/d93367365f5db311501084ab82ce89a3.mp3',
        cover: 'https://p2.music.126.net/ZtCC_U8SuMxYNlR6wlenEg==/109951166778363494.jpg',
    },
    {
        name: 'All Smiles',
        artist: 'Isaac Shepard',
        url: 'http://m801.music.126.net/20231023131448/ced6f1989491af1593410f7be05ef026/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8692960221/21b9/59f0/fd9a/7ed2a2b588cad91cb63de22f24fad855.mp3',
        cover: 'https://p1.music.126.net/lLY_8zpFaTgTqMvOiiZ-hA==/109951163935987753.jpg',
    },
    {
        name: '溯 (Reverse)',
        artist: 'CORSAK胡梦周',
        url: 'http://m801.music.126.net/20231023132020/dde0a70941436cc23b20cb000753e7bc/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1535106983/adee/12c5/2b68/c26e47eeda2bb1c85ed14f3950664f14.mp3',
        cover: 'https://p1.music.126.net/NTilljwKT_Hs9sLhBP1KKQ==/109951163416029067.jpg',
    },
    {
        name: '黑桃A',
        artist: '小鱼儿',
        url: 'https://cn-hbsjz-cm-02-07.bilivideo.com/upgcxcode/08/48/814394808/814394808_nb3-1-30280.m4s?e=ig8euxZM2rNcNbdlhoNvNC8BqJIzNbfqXBvEqxTEto8BTrNvN0GvT90W5JZMkX_YN0MvXg8gNEV4NC8xNEV4N03eN0B5tZlqNxTEto8BTrNvNeZVuJ10Kj_g2UB02J0mN0B5tZlqNCNEto8BTrNvNC7MTX502C8f2jmMQJ6mqF2fka1mqx6gqj0eN0B599M=&uipk=5&nbs=1&deadline=1698043562&gen=playurlv2&os=bcache&oi=3748183105&trid=00003a846d400cdc478e9d740e9cd5d38befu&mid=635694548&platform=pc&upsig=2118fb54128efde057f59e93993c415a&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&cdnid=11150&bvc=vod&nettype=0&orderid=0,3&buvid=5C5FC21D-B638-CCB5-E180-D912D57E0ED574691infoc&build=0&f=u_0_0&agrr=0&bw=24239&logo=80000000',
        cover: 'https://p1.music.126.net/NTilljwKT_Hs9sLhBP1KKQ==/109951163416029067.jpg',
    },
	]
});
