student_array=[];
function submit()
{
    var n1=document.getElementById("student1").value;
    var n2=document.getElementById("student2").value;
    var n3=document.getElementById("student3").value;
    var n4=document.getElementById("student4").value;
    student_array.push(n1);
    student_array.push(n2);
    student_array.push(n3);
    student_array.push(n4);
    console.log(student_array);
    document.getElementById("displayName").innerHTML=student_array;
    document.getElementById("submitButton").style.display="none";
    document.getElementById("sortButton").style.display="inline-block";


}

function sorting()
{
    student_array.sort();
    console.log(student_array);
    document.getElementById("displayName").innerHTML=student_array;
}