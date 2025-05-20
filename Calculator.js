function solve(val)
{
    var v = document.getElementById('cloud');
    v.value += val;
}
function Result()
{
    var v1=document.getElementById('cloud').value;
    var v2=eval(v1);
    document.getElementById('cloud').value=v2
}
function remove()
{
    var input = document.getElementById('cloud');
    input.value=' ';

}
function back()
 {
    var back = document.getElementById('cloud');
    back.value=back.value.slice(0,-1)
    
}