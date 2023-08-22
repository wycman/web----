//留言区js语句
function addElement()   //原理：创建完所有节点然后连到一起，形程table线面的一个树枝
            {
                //创建节点
                var person = document.createTextNode(form1.person.value);  //创建代表评论人的TextNode节点
                var content = document.createTextNode(form1.content.value); //创建代表评论的TextNode的节点
                
                //创建td类型的Element节点
                var td_person = document.createElement("td");
                var td_content = document.createElement("td");
                
                var tr = document.createElement("tr");
                var tbody = document.createElement("tbody");
                
                //形成树枝
                
                //将TextNode节点加入td类型的节点中
                td_person.appendChild(person);
                td_content.appendChild(content);
                
                //将td类型的节点添加到tr节点中
                tr.appendChild(td_person);
                tr.appendChild(td_content);
                
                //将tr类型的节点添加到tbody节点中
                tbody.appendChild(tr);
                
                var tComment = document.getElementById("comment");  //生成一个comment节点
                tComment.appendChild(tbody);
                
                //清空评论人和评论里面的内容
                form1.person.value="";
                form1.content.value="";
            }
            function deleteFirstE()   //删除第一条评论
            {
                var tComment = document.getElementById("comment");  //获取table对象
                if(tComment.rows.length>1)
                {
                    tComment.deleteRow(1);   //删除表格的第二行
                }
            }
            function deleteLastE()   //删除最后一条评论
            {
                var tComment = document.getElementById("comment");
                if(tComment.rows.length>1)
                {
                    tComment.deleteRow(tComment.rows.length-1);  //删除最后一行评论
                }
            }
            function a()
            {
                alert();
            }