var cubpt ={a:0,b:0,s:0};
var cubAry = [];
cubAry.push(cubpt);
console.log(new Date().toLocaleTimeString());
for (i=1;i<=1000;i++){
    for (j=i;j<=1000;j++){ var cubSum = i*i*i + j*j*j;
        for(k=0;k<cubAry.length;k++){
            
            if (cubAry[k].s == cubSum && cubAry[k].a != i && cubAry[k].b != i) {
                console.log(cubAry[k].a +","+ cubAry[k].b +","+ i + "," + j+ "," + cubSum)}};
				
            cubAry.push({a:i,b:j,s:cubSum});
			}};
console.log(new Date().toLocaleTimeString());			