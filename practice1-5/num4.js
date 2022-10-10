var itemList=[];
var addBtn=document.querySelector("#add");
addBtn.addEventListener("click",addList);//크릭시 addList를 실행

function addList(){
    var item=document.querySelector('#item').value;//엘레먼트 가져옴
    if(item!=null)//만약 item에 값이 들어오면
    {itemList.push(item);//itemLost베열에 item을 삽입
    document.querySelector("#item").value="";//엘레먼트의 값을 공백으로 초기화
    document.querySelector("#item").focus();
}//엘레먼트의 커서를 다시 활성화

showList();//showList를 실행
}

function showList(){
    var list="</ul>";//ul태그 저장
    for(var i=0;i<itemList.length;i++)//itmeList의 길이만큼 반복
   { list+="<li>"+itemList[i]+"<span class='close' id="+i+">X</span></li>";
}
   list+="</ul>";//</ul>태그 저장
document.querySelector('#itemList').innerHTML=list;

var remove=document.querySelectorAll(".close");//삭제버튼을 변수로 저장 배열형태로.

for(var i=0;i<remove.length;i++)
{
    remove[i].addEventListener("click",removeList);//요소를 클릭하면 삭제실행
}
   
}
function removeList(){ 
   var id= this.getAttribute("id");//클릭한 버튼의 id 값을 가져와 id 변수에 저장
    itemList.splice(id, 1);  // itemList 배열에서 인덱스 값이 id인 요소 1개 삭제
    showList();  // 변경된 itemList 배열을 다시 화면에 표시
}
   



