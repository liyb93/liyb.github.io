const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,  // 开启吸底模式
    autoplay: false, // 自动播放
    lrcType: 3, // 歌词类型
    order: 'random', // 随机播放
    loop: 'all', // 循环播放
    mutex: true,  // 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    audio: [
    /*
      格式:
      name: 歌名
      artist: 歌手
      url: 链接
      cover: 图片
      lrc: 歌词 (歌词获取: http://music.163.com/api/song/media?id='歌曲id')
    */
      {
        name: 'Confidence',
        artist: 'Gjan',
        url: 'http://music.163.com/song/media/outer/url?id=569105338.mp3',
        cover: 'http://p2.music.126.net/8fsGozqbHZauGcbb16pWqg==/109951163322424135.jpg',
        lrc: '/lrc/Confidence.lrc'
      },
      {
        name: 'None Of My Business',
        artist: 'Cher Lloyd',
        url: 'http://music.163.com/song/media/outer/url?id=1318822532.mp3',
        cover: 'http://p1.music.126.net/E4duznYIK8BWnet73_VceQ==/109951163839871961.jpg',
        lrc: '/lrc/None Of My Business.lrc'
      },
      {
        name: '삐삐',
        artist: 'IU',
        url: 'http://music.163.com/song/media/outer/url?id=1316563427.mp3',
        cover: 'http://p2.music.126.net/gxo54B2ypqq0Y6tmahBnIw==/109951163596240238.jpg',
        lrc: '/lrc/삐삐.lrc'
      },
      {
        name: '无解',
        artist: '陈嘉桦',
        url: 'http://music.163.com/song/media/outer/url?id=29753973.mp3',
        cover: 'http://p2.music.126.net/62_6Er9xef70sIWk66_8pA==/109951163167696534.jpg',
        lrc: '/lrc/无解.lrc'
      },
      {
        name: '绿色',
        artist: '陈雪凝',
        url: 'http://music.163.com/song/media/outer/url?id=1345848098.mp3',
        cover: 'http://p1.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg',
        lrc: '/lrc/绿色.lrc'
      },
      {
        name: '返老还童',
        artist: '胡彦斌 / Jony J',
        url: 'http://music.163.com/song/media/outer/url?id=530986052.mp3',
        cover: 'http://p1.music.126.net/9uUWLnRsv4c0F0wu9dlttA==/109951163118372627.jpg',
        lrc: '/lrc/返老还童.lrc'
      },
      {
        name: '미아',
        artist: 'IU',
        url: 'http://music.163.com/song/media/outer/url?id=5346791.mp3',
        cover: 'http://p2.music.126.net/39HxU9A5APr15VtaCQ6IJg==/3405187512278993.jpg',
        lrc: '/lrc/미아.lrc'
      },
      {
        name: 'Sparks Fly',
        artist: 'Taylor Swift',
        url: 'http://music.163.com/song/media/outer/url?id=1340520626.mp3',
        cover: 'http://p1.music.126.net/nSp0W3dWuUfEY5XETjhsVg==/109951164025974359.jpg',
        lrc: '/lrc/Sparks Fly.lrc'
      }
    ]
});