var app = new Vue({
    el:'#site',
    data:{
        indexActive: true,
        masterActive: false,
        productActive: false,
        orderActive: false,
        nameMsg: '',
        telMsg: '',
        addressMsg: '',
        dateMsg: '',
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
                howmany: 35,
                spend_time: 120,
                keep_time: 30,
                free_service: '免费修手及甲油胶卸甲'
            },
            {
                imgUrl: '../img/products/2.jpg',
                name: '炫彩紫枫',
                price: '￥189',
                howmany: 35,
                spend_time: 120,
                keep_time: 30,
                free_service: '免费修手及甲油胶卸甲'
            },
            {
                imgUrl: '../img/products/3.jpg',
                name: '情深阿拉斯',
                price: '￥139',
                howmany: 35,
                spend_time: 120,
                keep_time: 30,
                free_service: '免费修手及甲油胶卸甲'
            },
            {
                imgUrl: '../img/products/4.jpg',
                name: '迷情按开机',
                price: '￥189',
                howmany: 35,
                spend_time: 120,
                keep_time: 30,
                free_service: '免费修手及甲油胶卸甲'
            }
        ],
        choosedProduct: {}
    },
    methods: {
        chooseMaster: function(e){
            var index = $(e.currentTarget).index();
            this.choosedMaster = this.masters[index];
            this.indexActive = false;
            this.masterActive = true;
            $('html,body').animate({scrollTop: '0px'}, 0);
        },
        returnList: function(){
            this.indexActive = true;
            this.masterActive = false;
            $('html,body').animate({scrollTop: '0px'}, 0);
        },
        chooseProduct: function(e){
            var index = $(e.currentTarget).index();
            this.choosedProduct = this.products[index];
            this.masterActive = false;
            this.productActive = true;
            $('html,body').animate({scrollTop: '0px'}, 0);
        },
        returnMaster: function(){
            this.productActive = false;
            this.masterActive = true;
            $('html,body').animate({scrollTop: '0px'}, 0);
        },
        orderHandel: function(){
            this.productActive = false;
            this.orderActive = true;
            $('html,body').animate({scrollTop: '0px'}, 0);
        },
        returnProduct: function(){
            this.orderActive = false;
            this.productActive = true;
            $('html,body').animate({scrollTop: '0px'}, 0);
        },
        subHandel: function(){
            if(this.nameMsg === ''){
                window.alert('请填写姓名~');
                return;
            }
            if(this.telMsg === ''){
                window.alert('请填写联系方式~');
                return;
            }
            if(this.addressMsg === ''){
                window.alert('请填写地址~');
                return;
            }
            if(this.dateMsg === ''){
                window.alert('请填写预约时间~');
                return;
            }
            window.alert('您的订单提交成功~');
            this.orderActive = false;
            this.indexActive = true;
            $('html,body').animate({scrollTop: '0px'}, 0);
        }
    },
    created: function() {
        document.body.addEventListener('touchstart', function () {});
    }
});
