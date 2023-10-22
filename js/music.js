const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
	autoplay: true, //自动播放
    audio: [
	{
        name: "浴室",
        artist: 'deca joins',
        // url: 'https://m704.music.126.net/20211212133437/6298f876daf4b3a20b984659f71f8968/jdyyaac/000c/560b/5153/7f43625368aa52c4fbb0f968fa2007d2.m4a?authSecret=0000017dad0be60506550aa4681408a0',
        url: 'https://fxsong.kugou.com/fxmusic/pcad/lrcV1?jsonCallBack&songName=%E9%BB%91%E6%A1%83A%20(%E7%BD%91%E5%8F%8B%E6%94%B9%E7%BC%96)&callback=jsonphttpsfxsongkugoucomfxmusicpcadlrcV1jsonCallBacksongNameE9BB91E6A183A20E7BD91E58F8BE694B9E7BC96callback',
        cover: 'https://p1.music.126.net/byjfkEIOWI_RmxSKEWTPyw==/18910500486297525.jpg?param=200y200',	
        // name: '',
        // artist: '',
        // url: '',
        // cover: '',
    }, 
	]
});
