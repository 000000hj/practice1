var selectMenu=document.testForm.major;
function displaySelect(){
    var selectedText=selectMenu.options[selectMenu.selectedIndex].innerText;//선택한 옵션의 이너 텍스트를 가져와 selectedText에 저장
    alert("["+selectedText+"]를 선택했습니다");
}