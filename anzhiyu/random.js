var posts=["2026/07/17/信息收集/","2026/07/24/XSS的挖掘/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };