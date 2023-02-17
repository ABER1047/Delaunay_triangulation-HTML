document.querySelector(".button1").addEventListener("click",function() //canvas clearing button
{
document.querySelector(".button1").style.background = "#AD8264";
document.querySelector(".button2").style.background = "#E0C9A8";
document.querySelector(".button3").style.background = "#E0C9A8";
document.querySelector(".button4").style.background = "#E0C9A8";
clear_canvas();
})

document.querySelector(".button2").addEventListener("click",function() //redrawing lines
{
document.querySelector(".button1").style.background = "#E0C9A8";
document.querySelector(".button2").style.background = "#AD8264";
document.querySelector(".button3").style.background = "#E0C9A8";
document.querySelector(".button4").style.background = "#E0C9A8";
user_event3();
setTimeout(draw_event,1,1);
})

document.querySelector(".button3").addEventListener("click",function()
{
document.querySelector(".button1").style.background = "#E0C9A8"
document.querySelector(".button2").style.background = "#E0C9A8"
document.querySelector(".button3").style.background = "#AD8264"
document.querySelector(".button4").style.background = "#E0C9A8"

    for(var rad_c = 0; rad_c <= n_circle; rad_c++)
    {
    console.log("cir_col["+rad_c+"] : "+cir_col[rad_c]);
    }
})

document.querySelector(".button4").addEventListener("click",function()
{
document.querySelector(".button1").style.background = "#E0C9A8"
document.querySelector(".button2").style.background = "#E0C9A8"
document.querySelector(".button3").style.background = "#E0C9A8"
document.querySelector(".button4").style.background = "#AD8264"
})


//set canvas size
var view_width = 0;
var view_height = 0;
$(window).resize(function()
{
user_event1();
view_width = window.outerWidth;
view_height = window.outerHeight;

document.documentElement.style.setProperty("--c_w",view_width+"px");
document.documentElement.style.setProperty("--c_h",view_height+"px");

console.log("view_width : "+view_width);
console.log("view_height : "+view_height);

resize_canvas()
})

window.onload = function()
{
resize_canvas();
}

function resize_canvas()
{
var target = document.getElementById("main_canvas");
var ctx = target.getContext("2d");

//resizing canvas
target.width = window.innerWidth;
target.height = window.innerHeight;
} 

//define sqrt()
function sqrt(number)
{
var cal_sqrt = Math.sqrt(number);
return cal_sqrt;
}

//define floor()
function floor(number)
{
var cal_floor = Math.floor(number);
return cal_floor;
}

//define power()
function power(base,exponent)
{
var cal_power = Math.pow(base,exponent);
return cal_power;
}


//define values
var n_point_num = 0;
//for point
var xx = newarray(256), yy = newarray(256);
var cir_xx_s = [], cir_yy_s = [], cir_rad_s = [], cir_col = [];
var line_xx1 = [], line_yy1 = [], line_xx2 = [], line_yy2 = [], n_line = 0;
var n_circle = 0;
var r_point_length = 0;
var total_circle = 0;

function user_event1()
{
total_circle = 0;
n_line = 0;
n_circle = 0;
r_point_length = 0;

total_circle = 0;
//for circle
for(var m = 0; m <= 32000; m++) 
{
cir_xx_s[m] = -4; cir_yy_s[m] = -4; cir_rad_s[m] = -4; cir_col[m] = -4;

//for line
line_xx1[m] = -4; line_yy1[m] = -4; line_xx2[m] = -4; line_yy2[m] = -4;
}

for(var m = 0; m <= 10; m++) 
{
console.log("test1 - line_xx1 define / "+line_xx1[m]);
}

console.log("user_event1 activated / "+cir_xx_s[0]);
}


//set new array
function newarray(size) 
{
var x = [];
    for(var m = 0; m <= size; m++) 
    {
    x[m] = -4;
    }
return x;
}



function draw_event(argument0) //draw_event(target) 
{
var k = 0, l = 0;
var target = document.getElementById("main_canvas");
var ctx = target.getContext("2d");
console.log("view_width : "+view_width+" view_height : "+view_height);

    if (argument0 == 1)
    {
        for(k = 0; k < n_line*3+2; k++)
        {
        ctx.strokeStyle = "white"
        ctx.moveTo(line_xx1[k],line_yy1[k]);
        ctx.lineTo(line_xx2[k],line_yy2[k]);
        
            if (line_xx1[k] > 0 && line_xx2[k] > 0)
            {
            console.log("test1-line_xx1[k] : "+k);
            }
        //console.log("line_xx["+k+"] : "+line_xx1[k]);
        }
    ctx.stroke();

        for(n = 0; n <= 0; n++) //total_circle
        {
        //console.log("cir_rad_s["+n+"] : "+cir_rad_s[n]);
            if (cir_rad_s[n] > 0)
            {
            ctx.beginPath();
            ctx.arc(cir_xx_s[n],cir_yy_s[n],cir_rad_s[n]/2,0,2*Math.PI);
            }
        }
    ctx.stroke();
    }
    else
    {
        for(l = 0; l <= n_point_num; l++)
        {
        ctx.strokeStyle = "#b98364"
        ctx.beginPath();
        ctx.arc(xx[l],yy[l],3,0,2*Math.PI);
        }
        
    ctx.stroke();
    }
}



//clearing canvas
function clear_canvas()
{
var target = document.getElementById("main_canvas");
var ctx = target.getContext("2d");
ctx.clearRect(0, 0, target.width, target.width);
user_event1();
}




//get mouse position
var mouse_x = -4, mouse_y = -4;

function get_mouse_pos(event)
{
mouse_x = event.clientX;
mouse_y = event.clientY;

    if (mouse_y > 64)
    { 
    console.log("mouse_x : "+mouse_x);
    console.log("mouse_y : "+mouse_y);
    user_event1();
    setTimeout(user_event0,10,0);
    n_point_num ++;

    setTimeout(user_event3,15,0);
    setTimeout(draw_event,20,1);
    }
}


//check mouse click
document.addEventListener("click", get_mouse_pos);


function user_event0()
{
xx[n_point_num] = mouse_x;
yy[n_point_num] = mouse_y;
console.log("mouse_x : "+xx[n_point_num]);
console.log("mouse_y : "+yy[n_point_num]);

console.log("test1 - n_point_num : "+n_point_num);
}

function user_event3()
{
console.log("user_event3 activated / n_point_num : "+n_point_num);
var total_cal_num = 0;

    for(var j = 0; j <= n_point_num; j++)
    {
        for(var jj = 0; jj <= n_point_num; jj++)
        {
            for(var jjj = 0; jjj <= n_point_num; jjj++)
            {
                if (jjj != jj && jjj != j)
                {
                //check script folder for check algorithm
                get_triangle(j,jj,jjj,1);
                n_circle ++;
                }
            }
        }
    }
total_circle = total_cal_num
}


function get_triangle(argument0,argument1,argument2,argument3) //get_triangle(t1,t2,t3,method)
{
console.log("get_triangle activated");
var t1 = argument0;
var t2 = argument1;
var t3 = argument2;

//inclinations
var inclination_n1 = floor((yy[t1] - yy[t2]) / (xx[t1] - xx[t2])*10);
var inclination_n2 = floor((yy[t2] - yy[t3]) / (xx[t2] - xx[t3])*10);
var inclination_n3 = floor((yy[t1] - yy[t3]) / (xx[t1] - xx[t3])*10);
    
    
    //check whether are three points on same straight line by checking inclination
    if (inclination_n1 != inclination_n2 && inclination_n2 != inclination_n3 && inclination_n1 != inclination_n3)
    {
        //check whether are there more than three points
        if (xx[t1] != -4 && xx[t2] != -4 && xx[t3] != -4)
        {
        //length from (x2,y2) to (x1,y1) <line AB>
        var length_1 = sqrt(power(xx[t2] - xx[t1],2) + power(yy[t2] - yy[t1],2));

        //length from (x1,y1) to (x3,y3) <line AC>
        var length_2 = sqrt(power(xx[t1] - xx[t3],2) + power(yy[t1] - yy[t3],2));

        //length from (x3,y3) to (x2,y2) <line CB>
        var length_3 = sqrt(power(xx[t3] - xx[t2],2) + power(yy[t3] - yy[t2],2));



        //angles from triangles (cosine formula)
        var numerator1 = (power(length_2,2) + power(length_1,2) - power(length_3,2));
        var denominator1 = (2*length_2*length_1);
        var cosA = numerator1/denominator1;
    
            if (argument3 == 0) //method 1 (using trigonometric function to get circumcenter)
            {
            var numerator2 = (power(length_3,2) + power(length_1,2) - power(length_2,2));
            var denominator2 = (2*length_3*length_1);
            var cosB = numerator2/denominator2;


            var numerator3 = (power(length_3,2) + power(length_2,2) - power(length_1,2));
            var denominator3 = (2*length_3*length_2);
            var cosC = numerator3/denominator3;


            var sinA = sqrt(1 - power(cosA,2));
            var sinB = sqrt(1 - power(cosB,2));
            var sinC = sqrt(1 - power(cosC,2));
        

            //formula
            var sin2A = (sinA*cosA)*2; // = sinA*cosA + cosA*sinA
            var sin2B = (sinB*cosB)*2; // = sinB*cosB + cosB*sinB
            var sin2C = (sinC*cosC)*2; // = sinC*cosC + cosC*sinC

            //circumcenter position
            var cir_xx = (xx[t1]*sin2A + xx[t2]*sin2B + xx[t3]*sin2C) / (sin2A + sin2B + sin2C);
            var cir_yy = (yy[t1]*sin2A + yy[t2]*sin2B + yy[t3]*sin2C) / (sin2A + sin2B + sin2C);
            }
            else
            {
            //these value is for to get radius of circle
            var sinA = sqrt(1 - power(cosA,2));
        
        
            var length_1_midpoint_xx = (xx[t1] + xx[t2])/2; //mid point of line AB
            var length_1_midpoint_yy = (yy[t1] + yy[t2])/2;
    
            var length_2_midpoint_xx = (xx[t1] + xx[t3])/2; //mid point of line AC
            var length_2_midpoint_yy = (yy[t1] + yy[t3])/2;
        
    
            //inclination of line
            var inclination_m1 = -(xx[t1] - xx[t2])/(yy[t1] - yy[t2]);
            var inclination_m2 = -(xx[t1] - xx[t3])/(yy[t1] - yy[t3]);
    
            //z = m1*α1 + m2*α2 + β1 - β2 (substitution)
            var substitution_z = -(inclination_m1*length_1_midpoint_xx) + inclination_m2*length_2_midpoint_xx + length_1_midpoint_yy - length_2_midpoint_yy;
        
            //circumcenter position
            var cir_xx = -substitution_z/(inclination_m1 - inclination_m2);
            var cir_yy = inclination_m1*(cir_xx - length_1_midpoint_xx) + length_1_midpoint_yy;
            }


        //radius (2R)
        var rad_cir = floor((length_3/sinA)*100);
        console.log("test1-rad_cir : "+rad_cir);
        var check_only_three_points_in = 0;
        //check whether the points are in the circumcircle
        for(var i = 0; i < n_point_num; i++)
        {
            //stop repeating when it dont need to do this   OR   when there're points more than 3
            //if (xx[i] == -4)
            //{
            //break;
            //}
        

        //distance from certain point to circumcenter
        //console.log("test1-cal1 : "+cir_xx);
        //console.log("test1-cal2 : "+cir_yy);
        
        //console.log("test1-cal3 : "+xx[i]);
        //console.log("test1-cal4 : "+yy[i]);
        
        //console.log("test1-cal5 : "+power(cir_xx - xx[i],2));
        //console.log("test1-cal6 : "+power(cir_yy - yy[i],2));

        r_point_length = floor((sqrt(power(cir_xx - xx[i],2) + power(cir_yy - yy[i],2)))*100);
        //console.log("test1-r_point_length : "+r_point_length);
        console.log("test1-r_point_length : "+r_point_length + " / "+rad_cir);
            if (r_point_length <= rad_cir/2)
            {
            check_only_three_points_in ++;
            }
        
            if (check_only_three_points_in > 3)
            {
            cir_col[n_circle] = "gray";
            break;
            }
            else
            {
            cir_col[n_circle] = "blue";
            }
        }

        cir_xx_s[n_circle] = cir_xx;
        cir_yy_s[n_circle] = cir_yy;
        cir_rad_s[n_circle] = rad_cir;
    
        console.log("test1-check_only_three_points_in : "+check_only_three_points_in +" / "+n_line);
            //line
            if (check_only_three_points_in <= 3)
            {
            var _cal_n = floor(n_line*3);
            line_xx1[_cal_n] = xx[t1];
            line_yy1[_cal_n] = yy[t1];

            line_xx2[_cal_n] = xx[t2];
            line_yy2[_cal_n] = yy[t2];
                
                
            line_xx1[_cal_n+1] = xx[t2];
            line_yy1[_cal_n+1] = yy[t2];

            line_xx2[_cal_n+1] = xx[t3];
            line_yy2[_cal_n+1] = yy[t3];
                
                
            line_xx1[_cal_n+2] = xx[t3];
            line_yy1[_cal_n+2] = yy[t3];

            line_xx2[_cal_n+2] = xx[t1];
            line_yy2[_cal_n+2] = yy[t1];
        
            n_line ++;
            }
    
        //return check_only_three_points_in;
        }
    }
}