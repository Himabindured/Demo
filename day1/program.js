for(let i=1;i<=5;i++){
  for(let j=1;j<=5;j++){
    document.write("*");
  }
  document.writeln("<br>")
}


for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
      document.write("*");
    }
    document.writeln("<br>")
  }

  for(let i=1;i<=5;i++){
for(let j=1;j<=5;j++){
    if(i==j || i+j ==6){
      document.write("*");
    }else{
        document.write("&nbsp")
    }}
    document.writeln("<br>")
  }
