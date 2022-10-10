var arr=[2,4,6,8,10];
var sum=0;

for(var i=0;i<arr.length;i++)
{
    sum+=arr[i];
}
document.write(arr+"<p>");
arr.push(sum);
document.write(arr); 



