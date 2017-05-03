function total (num, fix){	//保留小数点后2位
	var x= (num.toFixed(fix)*100).toFixed(fix);					
	return x;
}