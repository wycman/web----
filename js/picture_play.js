               //实现图片轮播功能的js代码      
                     var curIndex = 0,  
                     imgArr = getElementsByClassName("imgList")[0].getElementsByTagName("li"), //获取图片组
                     imgLen = imgArr.length,
                     infoArr = getElementsByClassName("infoList")[0].getElementsByTagName("li"), 
                     indexArr = getElementsByClassName("indexList")[0].getElementsByTagName("li"); 
             var autoChange = setInterval(function(){ 
                 if(curIndex < imgLen -1){ 
                     curIndex ++; 
                 }else{ 
                     curIndex = 0;
                 }
                 //调用变换处理函数
                 changeTo(curIndex);  
             },2500);
         //调用添加事件处理
             addEvent();   
             //给图片index添加事件处理
           function addEvent(){
             for(var i=0;i<imgLen;i++){ 
                 (function(_i){  
                 //鼠标滑过则清除定时器，并作变换处理
                 indexArr[_i].onmouseover = function(){ 
                     clearTimeout(autoChange);
                     changeTo(_i);
                     curIndex = _i;
                 };
                 //鼠标滑出则重置定时器处理
                 indexArr[_i].onmouseout = function(){ 
                     autoChange = setInterval(function(){ 
                     if(curIndex < imgLen -1){ 
                         curIndex ++;
                    }else{ 
                         curIndex = 0;
                    }
                     changeTo(curIndex);  
                 },2500);
                 };
                  })(i);
             }
         }
             //变换处理函数
             function changeTo(num){ 
                var curImg = getElementsByClassName("imgOn")[0];
                fadeOut(curImg);  //淡出当前 image
                removeClass(curImg,"imgOn");
                addClass(imgArr[num],"imgOn");
                fadeIn(imgArr[num]); //淡入目标 image
                var curInfo = getElementsByClassName("infoOn")[0];
                removeClass(curInfo,"infoOn");
                addClass(infoArr[num],"infoOn");
                var _curIndex = getElementsByClassName("indexOn")[0];
                removeClass(_curIndex,"indexOn");
                addClass(indexArr[num],"indexOn");
            }
        
                //设置透明度
            function setOpacity(elem,level){ 
                if(elem.filters){ 
                    elem.style.filter = "alpha(opacity="+level+")";
                }else{ 
                    elem.style.opacity = level / 100;
                }
            }
        
            //淡入处理函数
            function fadeIn(elem){ 
                setOpacity(elem,0);  
                for(var i = 0;i<=20;i++){  
                    (function(){ 
                        var level = i * 5;   //透明度每次变化值
                        setTimeout(function(){ 
                            setOpacity(elem, level)
                       },i*25); 
                    })(i);          
                }
            }
        
                //淡出处理函数
            function fadeOut(elem){ 
                for(var i = 0;i<=20;i++){  
                    (function(){ 
                        var level = 100 - i * 5;  //透明度每次变化值
                        setTimeout(function(){ 
                            setOpacity(elem, level)
                        },i*25); 
                    })(i);          
                }
            }
        
            //通过class获取节点
            function getElementsByClassName(className){ 
                var classArr = [];
                var tags = document.getElementsByTagName('*');
                for(var item in tags){ 
                    if(tags[item].nodeType == 1){ 
                        if(tags[item].getAttribute('class') == className){ 
                            classArr.push(tags[item]);
                        }
                    }
                }
                return classArr; //返回
            }
       
            // 判断obj是否有此class
            function hasClass(obj,cls){    //class位于单词边界
             return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
              }
              //给 obj添加class
            function addClass(obj,cls){  
                if(!this.hasClass(obj,cls)){ 
                      obj.className += cls;
               }
            }
            //移除obj对应的class
            function removeClass(obj,cls){  
                if(hasClass(obj,cls)){ 
                    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                         obj.className = obj.className.replace(reg,'');
                }
            }      