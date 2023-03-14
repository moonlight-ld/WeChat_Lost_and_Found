// pages/lostandfound/lostandfound.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs1: [
      {
        text: '首页',
      },
      {
        text: '发布',
      },
      {
        text: '我的',
      },
      
    ],
    selectArray: [{
      "id": "10",
      "text": "失物"
  }, {
      "id": "11",
      "text": "拾物"
  }], 
  selectArray1: [{
    "id": "20",
    "text": "卡"
}, {
    "id": "21",
    "text": "钥匙"
}, {
  "id": "22",
  "text": "钱包"
}, {
  "id": "23",
  "text": "其他"
}],


     postList:[
       {
         avatar:"/images/photo_3.jpg",
        author:"yxc",
         content:"和预想的一样，今天火箭正式宣布和卡梅隆-安东尼“分手”，作为首位报道火箭和安东尼分道扬镳的记者蒂姆-麦克马洪在接受腾讯-ESPN 记者Coral采访时表示：火箭从长远考虑，不得不和甜瓜提前结束这次合作",
        contentImg: ["/images/photo_1.jpg", "/images/photo_1.jpg", "/images/photo_1.jpg", "/images/photo_1.jpg",],
        date:"2018-11-17",
        commentImg:"wx_app_comment.jpg",
        commentSize:99,
         postId:1
      }
    //   {
    //     avatar: "/images/photo_3.jpg",
    //     author: "yxc",
    //     content: "和预想的一样，今天火箭正式宣布和卡梅隆-安东尼“分手”，作为首位报道火箭和安东尼分道扬镳的记者蒂姆-麦克马洪在接受腾讯-ESPN 记者Coral采访时表示：火箭从长远考虑，不得不和甜瓜提前结束这次合作",
    //     contentImg: ["/images/photo_1.jpg"],
    //     date: "2018-11-17",
    //     commentImg: "wx_app_comment.jpg",
    //     commentSize: 99,
    //     postId: 2
    //   },
    //   {
    //     avatar: "/images/photo_3.jpg",
    //     author: "yxc",
    //     content: "和预想的一样，今天火箭正式宣布和卡梅隆-安东尼“分手”，作为首位报道火箭和安东尼分道扬镳的记者蒂姆-麦克马洪在接受腾讯-ESPN 记者Coral采访时表示：火箭从长远考虑，不得不和甜瓜提前结束这次合作",
    //     contentImg: [],
    //     date: "2018-11-17",
    //     commentImg: "wx_app_comment.jpg",
    //     commentSize: 99,
    //     postId: 3
    //   },
    //   {
    //     avatar: "/images/photo_3.jpg",
    //     author: "yxc",
    //     content: "和预想的一样，今天火箭正式宣布和卡梅隆-安东尼“分手”，作为首位报道火箭和安东尼分道扬镳的记者蒂姆-麦克马洪在接受腾讯-ESPN 记者Coral采访时表示：火箭从长远考虑，不得不和甜瓜提前结束这次合作",
    //     contentImg: ["/images/photo_1.jpg", "/images/photo_1.jpg", "/images/photo_1.jpg", "/images/photo_1.jpg",],
    //     date: "2018-11-17",
    //     commentImg: "wx_app_comment.jpg",
    //     commentSize: 99,
    //     postId: 4
    //   },
    ],
    
    
    imgArr:[{
      "text": "失/拾"
  }
      
    ],
    queryResult: [],
    tempImagePath:"",
    page:1,
    pageSize:3,
    hasMoreData:true
  },


  handleChange(e) {
    const index = e.detail.value;
    console.log(e);
    console.log("value: "+e.detail.value);
    switch(index){
      case 0:
           wx.navigateTo({
             url: '/pages/lostandfound/lostandfound',
           })
          break;
      case 1:
        wx.switchTab({
          url: '/pages/send/send',
        })
          break;
      case 2:
        wx.switchTab({
          url: '/pages/userMsg/userMsg',
        })
          break;
    }
  },
  handleSelected() {
    this.setData({
      index: 2,
    });
  },
  handleClick(e) {
    const { index, title } = e.detail;
    console.log('点击了tab:' + index, title);
  },

//图片预览
  previewImg:function(e){
  //  console.log("e:" + e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
  //  console.log("index:"+index);
  //  console.log("fileId:"+this.data.queryResult[index].imgsFileId);

    var imgArr=this.data.queryResult[index].imgsFileId;
  //  console.log("opinid:"+imgArr)
    var imgs=this.data.imgArr;
    imgs.push(imgArr);

    wx.previewImage({
      current: imgArr,     //当前图片地址
      urls: imgs,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    });
  },
/*
  //上传数据到云端数据库
  onAdd: function () {
    const db = wx.cloud.database()
    db.collection('postList').add({
      data: {
        postId: 2,
        author: "james",
        content: "湖人总冠军",
        date: "2018-11-28",
        commentSize: 99
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          counterId: res._id,
          count: 1
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },

  //查询数据
  onQuery: function () {
    var pageNum = this.data.page;
    if(pageNum==1){
      this.queryPageOne();
    }else{
      this.queryByPage();
    }
  },
*/
/**
 * 第一页查询
 */
 /*queryPageOne:function(){
   const db = wx.cloud.database();
   var that = this;
   //页码
   var pageNum = that.data.page;
   //一页的记录数1gf
   var pageSize = that.data.pageSize;
   //queryREsult
   var res = that.data.queryResult;
   // 查询当前用户所有的 counters
   db.collection('postList').limit(pageSize).orderBy('date', 'desc').get({
     success: res => {

       //追加数据
       // this.data.queryResult.unshift(res.data);
       this.setData({
         // queryResult: JSON.stringify(res.data, null, 2)
         queryResult: this.data.queryResult.concat(res.data),
         page: pageNum + 1
       })
       console.log('[数据库] [查询记录] 成功: ', res.data);

       //下载图片内容
       this.downloadImageContent();
     },*/
     /*fail: err => {
       wx.showToast({
         icon: 'none',
         title: '查询记录失败'
       })
       console.error('[数据库] [查询记录] 失败：', err)
     }*/
  /* })
 },*/
/**
 * 分页查询 不是第一页使用这个方法
 */
 /* queryByPage:function(){
    const db = wx.cloud.database();
    var that = this;
    //页码
    var pageNum = that.data.page;
    //一页的记录数1gf
    var pageSize = that.data.pageSize;
    //queryREsult
    var res = that.data.queryResult;
    // 查询当前用户所有的 counters
    db.collection('postList').skip((pageNum - 1) * pageSize).limit(pageSize).orderBy('date', 'desc').get({
      success: res => {

        //追加数据
        // this.data.queryResult.unshift(res.data);
        this.setData({
          // queryResult: JSON.stringify(res.data, null, 2)
          queryResult: this.data.queryResult.concat(res.data),
          page: pageNum + 1
        })
        console.log('[数据库] [查询记录] 成功: ', res.data);

        //下载图片内容
        this.downloadImageContent();
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '查询记录失败'
        })
        console.error('[数据库] [查询记录] 失败：', err)
      }
    })
  },

//下载图片内容
downloadImageContent(){
   var postList=this.data.queryResult;
   for(var i=0;i<postList.length;i++){
     console.log("test fileId "+i+postList[i].imgsFileId);

     wx.cloud.downloadFile({
       fileID: postList[i].imgsFileId,
       success:res =>{
         console.log("临时路径："+res.tempFilePath);

         var tempPath ='postList['+i+'].imgsFileId';
         this.setData({
           [tempPath]: res.tempFilePath
         })
       }
   })
   }


},
   
  //下载云数据库的图片
  downImage:function(fileId){
    wx.cloud.downloadFile({
      fileID: 'cloud://d-24c49d.642d-d-24c49d/my-image.jpg', // 文件 ID
      success: res => {
        // 返回临时文件路径
        console.log(res.tempFilePath);
        this.setData({
          tempImagePath:res.tempFilePath
        })
      },
      fail: console.error
    })
  },*/


  //授权登陆
  login:function(){
    wx.getSetting({
      success: (response) => {
        console.log(response)
        if (!response.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success: () => {
              console.log('yes')
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
   wx.hideTabBar({
     
   });
   
    //查询数据
   // onQuery();
    this.onQuery();
  //  this.downImage();
    



    // 查看是否授权,授权登陆
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
         var app=getApp();
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo);
              app.globalData.userInfo=res.userInfo;

              //测试是否给全局变量userInfo赋值
              console.log("全局变量userInfo :"+app.globalData.userInfo);
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 跳转到文章评论页面
   */
  onTapToComment(event) {
    //获取postId
    var postId = event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: 'comment/comment?id=' + postId,
    })
  },

  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function () {

     //获取最新记录
     this.setData({
       page:1,
       queryResult:[]
     });
     console.log("更新后的page:"+this.data.page)
    this.queryPageOne();
     wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.onQuery();

  },
})