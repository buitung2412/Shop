var sl1 = $('#SL1'),sl2 = $('#SL2'),sl3 = $('#SL3'),sl4 = $('#SL4'),sl5 = $('#SL5'),sl6 = $('#SL6'),sl7 = $('#SL7'),sl8 = $('#SL8');
var dg1 = $('#DG1'), dg2 = $('#DG2'), dg3 = $('#DG3'), dg4 = $('#DG4'), dg5 = $('#DG5'), dg6 = $('#DG6'), dg7 = $('#DG7'), dg8 = $('#DG8');
var soluong = 0 ,soluong2 = 0 ,soluong3 = 0 ,soluong4 = 0 ,soluong5 = 0 ,soluong6 = 0 ,soluong7 = 0 ,soluong8 = 0 ;
var sotien = 0 ,sotien2 = 0 ,sotien3 = 0 ,sotien4 = 0 ,sotien5 = 0 ,sotien6 = 0 ,sotien7 = 0 ,sotien8 = 0 ;
var tongtien = $('#tongtien');
var giatri = $('#giatri');
var tong = 0 ;
var giam=$('#giam');
var tongtt = $('#tongtt');
$('#add1').click(function(){
	soluong++;
	sotien = soluong*120000;
	sl1.html(soluong);
	dg1.html(sotien);
	tong += 120000;
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#add2').click(function(){
	soluong2++;
	sotien2 = soluong2*110000;
	sl2.html(soluong2);
	dg2.html(sotien2);
	tong += 110000;
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#add3').click(function(){
	soluong3++;
	sotien3 = soluong3*250000;
	sl3.html(soluong3);
	dg3.html(sotien3);
	tong += 250000;
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#add4').click(function(){
	soluong4++;
	sotien4 = soluong4*199000;
	sl4.html(soluong4);
	dg4.html(sotien4);
	tong += 199000;
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#add5').click(function(){
	soluong5++;
	sotien5 = soluong5*299000;
	sl5.html(soluong5);
	dg5.html(sotien5);
	tong += 299000;
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#add6').click(function(){
	soluong6++;
	sotien6 = soluong6*329000;
	sl6.html(soluong6);
	dg6.html(sotien6);
	tong += 329000;
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#add7').click(function(){
	soluong7++;
	sotien7 = soluong7*39000;
	sl7.html(soluong7);
	dg7.html(sotien7);
	tong += 39000;
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#add8').click(function(){
	soluong8++;
	sotien8 = soluong8*59000;
	sl8.html(soluong8);
	dg8.html(sotien8);
	tong += 59000;
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#sub1').click(function(){
	if(soluong > 0)
	{
		soluong--;
	}
	sotien = soluong*120000;
	sl1.html(soluong);
	dg1.html(sotien);
	if(tong >= 120000 && soluong > 0)
	{
		tong -= 120000;
	}
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#sub2').click(function(){
	if(soluong2 > 0)
	{
		soluong2--;

	}
	sotien2 = soluong2*110000;
	sl2.html(soluong2);
	dg2.html(sotien2);
	if(tong >= 110000 && soluong2 > 0)
	{
		tong -= 110000;
	}
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#sub3').click(function(){
	if(soluong3 > 0)
	{
		soluong3--;

	}
	sotien3 = soluong3*250000;
	sl3.html(soluong3);
	dg3.html(sotien3);
	if(tong >= 250000 && soluong3 > 0)
	{
		tong -= 250000;
	}
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#sub4').click(function(){
	if(soluong4>0)
	{
		soluong4--;
	}
	sotien4 = soluong4*199000;
	sl4.html(soluong4);
	dg4.html(sotien4);
	if(tong >= 199000 && soluong4 > 0)
	{
		tong -= 199000;
	}
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#sub5').click(function(){
	if(soluong5 > 0)
	{
		soluong5--;
		
	}
	sotien5 = soluong5*299000;
	sl5.html(soluong5);
	dg5.html(sotien5);
	if(tong >= 299000 && soluong5> 0)
	{
		tong -= 299000;
	}
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#sub6').click(function(){
	if(soluong6 > 0)
	{
		soluong6--;
		
	}
	sotien6 = soluong6*329000;
	sl6.html(soluong6);
	dg6.html(sotien6);
	if(tong >= 329000 && soluong6 > 0)
	{
		tong -= 329000;
	}
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#sub7').click(function(){
	if(soluong7 > 0)
	{
		soluong7--;
		
	}
	sotien47 = soluong7*39000;
	sl7.html(soluong7);
	dg7.html(sotien7);
	if(tong >= 39000 && soluong7 > 0)
	{
		tong -= 39000;
	}
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
$('#sub8').click(function(){
	if(soluong8>0)
	{
		soluong8--;
		
	}
	sotien8 = soluong8*59000;
	sl8.html(soluong8);
	dg8.html(sotien8);
	if(tong >= 59000 && soluong8 > 0)
	{
		tong -= 59000;
	}
	tongtien.html(tong);
	giatri.html(tong);
	giam.html(5*tong/100);
	tongtt.html(tong-5*tong/100+50000);
});
