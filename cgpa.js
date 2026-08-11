function Calculate(){
  let gpa1 = parseFloat(document.getElementById("gpa1").value);
  let gpa2 = parseFloat(document.getElementById("gpa2").value);
  let gpa3 = parseFloat(document.getElementById("gpa3").value); 
  let cgpa = (gpa1 + gpa2 + gpa3)/3;
  let grade;

  if(cgpa>=3.9){
    grade="A+";
  }
  else if(cgpa>=3.8){
    grade="A"
  }

  else if(cgpa>=3.7){
    grade="A-"
  }
  else if(cgpa>=3.5){
    grade="B+"
  }
  else if(cgpa>=3.1){
    grade="B-"
  }
  else if(cgpa>=2.2){
    grade="F"
  }
 document.getElementById("cgpa").innerHTML="CGPA:"+cgpa;
 document.getElementById("grade").innerHTML="GRADE:"+grade;
}