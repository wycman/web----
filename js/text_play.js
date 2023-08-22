                    //实现文字从右向左滚动特效的js语句    
                        var box = document.getElementById("box");
						var list1 = document.getElementById("list1");
						var list2 = document.getElementById("list2");
						list2.innerHTML = list1.innerHTML;
						function scroll_(){
							if(box.scrollLeft>=list2.offsetWidth){
								box.scrollLeft = 0;
							}else{
								box.scrollLeft++;
							}
						}
						var timer = setInterval(scroll_,10);