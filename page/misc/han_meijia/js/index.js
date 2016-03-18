var app = new Vue({
    el:'#site',
    data:{
        indexActive: true,
        masterActive: false,
        productActive: false,
        orderActive: false,
        masters: [
            {
                name: '呆门girl',
                avatar: '../img/masters/master01.jpg',
                level: '特级美甲师',
                desc: '技术很好，很细心~',
                time: 99,
                tag: '技术资深'
            },
            {
                name: '沉嘎嘎',
                avatar: '../img/masters/master02.jpg',
                level: '优秀美甲师',
                desc: 'nice，温柔',
                time: 14,
                tag: '经验资深'
            },
            {
                name: '小米子',
                avatar: '../img/masters/master03.jpg',
                level: '优秀美甲师',
                desc: 'nice，温柔',
                time: 45,
                tag: '经验资深'
            },
            {
                name: '夏天',
                avatar: '../img/masters/master04.jpg',
                level: '优秀美甲师',
                desc: 'nice，温柔',
                time: 26,
                tag: '经验资深'
            },
            {
                name: '污污球',
                avatar: '../img/masters/master05.jpg',
                level: '优秀美甲师',
                desc: 'nice，温柔',
                time: 33,
                tag: '经验资深'
            }
        ],
        choosedMaster: {},
        commentImgs: [
            {
                imgUrl: '../img/comment/1.jpg'
            },
            {
                imgUrl: '../img/comment/2.jpg'
            },
            {
                imgUrl: '../img/comment/3.jpg'
            },
            {
                imgUrl: '../img/comment/4.jpg'
            }
        ],
        products: [
            {
                imgUrl: '../img/products/1.jpg',
                name: '梦幻午茶会',
                price: '￥139',
                howmany: '35'
            },
            {
                imgUrl: '../img/products/2.jpg',
                name: '炫彩紫枫',
                price: '￥189',
                howmany: '86'
            },
            {
                imgUrl: '../img/products/3.jpg',
                name: '情深阿拉斯',
                price: '￥139',
                howmany: '35'
            },
            {
                imgUrl: '../img/products/4.jpg',
                name: '迷情按开机',
                price: '￥189',
                howmany: '86'
            }
        ]
    },
    methods: {
        chooseMaster: function(e){
            var index = $(e.currentTarget).index();
            this.choosedMaster = this.masters[index];
            this.indexActive = false;
            this.masterActive = true;
            $('html,body').animate({scrollTop: '0px'}, 0);
        }
    },
    created: function() {
        document.body.addEventListener('touchstart', function () {});
    }
});
