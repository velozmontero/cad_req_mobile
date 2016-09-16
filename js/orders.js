var orderStyle= document.getElementById("order-style");
var styleColor= document.getElementById("order-color");
var sizexs= document.getElementById("size-xs");
var sizes= document.getElementById("size-s");
var sizem= document.getElementById("size-m");
var sizel= document.getElementById("size-l");
var sizexl= document.getElementById("size-xl");
var sizexxl= document.getElementById("size-xxl");
var sizexxx= document.getElementById("size-1x");
var sizexxxx= document.getElementById("size-2x");
var sizexxxxx= document.getElementById("size-3x");

var rPrice= document.getElementById("r-price");
var xPrice= document.getElementById("x-price");
var description= document.getElementById("description");



var oDate= document.getElementById("odate");
var sDate= document.getElementById("sdate");
var cDate= document.getElementById("cdate");

var globalArr= [];

var oNum1= Math.floor (Math.random()*9 + 1);
var oNum2= Math.floor (Math.random()*9 + 1);
var oNum3= Math.floor (Math.random()*9 + 1);
var oNum4= Math.floor (Math.random()*9 + 1);
var oNum5= Math.floor (Math.random()*9 + 1);
var oNum6= Math.floor (Math.random()*9 + 1);
var globalTotal = 0;


var stsn= document.getElementById("store-name");
var phone= document.getElementById("phone");

var storeAdd= document.getElementById("store-address");
var addCity= document.getElementById("address-city");
var state= document.getElementById("state-1");
var aZipCode= document.getElementById("address-zip-code");

var email= document.getElementById("email");

var sameAS= document.getElementById("same-as");

var shipAdd= document.getElementById('ship-address');
var shipCity= document.getElementById('ship-city');
var shipState= document.getElementById('state-2');
var shipZipCode= document.getElementById('ship-zip-code');
var shipInstr= document.getElementById('shipping-instructions');

var buyer= document.getElementById("buyer");
var rep= document.getElementById("rep");
var terms= document.getElementById("terms");


//Random order number generator start //----------------------

$('#order-number').html("PO#: "+oNum1+oNum2+oNum3+oNum4+oNum5+oNum6);

//Random order number generator end //----------------------/



//Insert dates on order start //------------------------

$('#odate').change(function(){
    $('#order-date').html("Order date: "+ oDate.value);
});

$('#sdate').change(function(){
    $('#ship-date').html("Ship start: "+ sDate.value);
});

$('#cdate').change(function(){
    $('#cancel-date').html("Cancel date: "+ cDate.value);
});

//Insert dates on order start //------------------------/



//on click process start //---------------------------------------------------

$('#add-style').on('click', function(){ 
    
    //regular sizes info start //------------------------
    
    var arrRegPcs= [parseInt(sizexs.value) , parseInt(sizes.value) , parseInt(sizem.value) , parseInt(sizel.value) , parseInt(sizexl.value) , parseInt(sizexxl.value)];
    console.log(arrRegPcs);
    
    var totalRegPcs= 0;
    arrRegPcs.forEach(function(elem, index, arrRegPcs) {
       if (elem && typeof elem === "number"){
           totalRegPcs += elem;
       }    
    });
    console.log(totalRegPcs);
    
    //----------------------------------------
    
    isNaN(rPrice.value);
    var regTotalCost = rPrice.value * totalRegPcs ; 
    console.log(regTotalCost);
    
   //regular sizes info end //------------------------/ 
    
    
    
    //Plus sizes info start //------------------------
    
    var arrXPlusPcs= [parseInt(sizexxx.value) , parseInt(sizexxxx.value) , parseInt(sizexxxxx.value)];
    console.log(arrXPlusPcs);
    
    var totalXPlusPcs= 0;
    arrXPlusPcs.forEach(function(elem, index, arrXPlusPcs) {
       if (elem && typeof elem === "number"){
           totalXPlusPcs += elem;
       }    
    });
    console.log(totalXPlusPcs);
    
    //----------------------------------------
    isNaN(xPrice.value);
    var xTotalCost= xPrice.value * totalXPlusPcs;
    console.log(xTotalCost);
    
    //Plus sizes info end //------------------------/
    
    
    
    //Total data combined start//------------------------
    
    var addRandP= totalRegPcs + totalXPlusPcs;
    console.log(addRandP);
    
    var totalAmount= regTotalCost + xTotalCost;
    console.log(totalAmount); 
    
     //Total data combined start//------------------------/
    
    
    
    //push info to global array start//------------------------
    
    globalArr.push({
        style: orderStyle.value,
        color: styleColor.value,
        xs: sizexs.value,
        s: sizes.value,
        m: sizem.value,
        l: sizel.value,
        xl: sizexl.value,
        xxl: sizexxl.value,
        xxx: sizexxx.value,
        xxxx: sizexxxx.value,
        xxxxx: sizexxxxx.value,
        rPrice: rPrice.value,
        xPrice: xPrice.value,
        description: description.value,
        
        totalRegPcs: totalRegPcs,
        totalXPlusPcs: totalXPlusPcs,
        totalRegPcsCost: regTotalCost,
        totalXPlusPcsCost: xTotalCost,
        
        totalPcsCombined: addRandP,
        TotalPriceCombined: totalAmount 
    });
    
    //push info to global array end//------------------------/
    
    $('#order-ow').find('tbody:last-child').append(
        '<tr style="width: 100%;"><td>'+ orderStyle.value +
        '</td><td>'+ styleColor.value +
        
        '</td><td class="hide-on-med-and-down">'+ description.value +
        
        '</td><td>'+ sizexs.value +
        '</td><td>'+ sizes.value +
        '</td><td>'+ sizem.value +
        '</td><td>'+ sizel.value +
        '</td><td>'+ sizexl.value +
        '</td><td>'+ sizexxl.value +
        
        '</td><td class="hide-on-med-and-down">'+ totalRegPcs +
        '</td><td class="hide-on-med-and-down">'+ '$ '+rPrice.value +
        
        '</td><td>'+ sizexxx.value +
        '</td><td>'+ sizexxxx.value +
        '</td><td>'+ sizexxxxx.value +
        
        '</td><td class="hide-on-med-and-down">'+ totalXPlusPcs +
        '</td><td class="hide-on-med-and-down">'+ '$ '+xPrice.value +
        
        '</td><td class="hide-on-med-and-down stp style-total-pcs">'+ addRandP +
        '</td><td class="hide-on-med-and-down sta style-total-amount">'+ '$ '+totalAmount + '<td class="xxx hidden no-print" >X</td></td></tr>');
        
});



//Total values start//------------------

function calculatePcs(){
    oTotalPcs = 0;
    
    $(".style-total-pcs").each(function() {
        var value= $(this).text();
        if(!isNaN(value) && value.length !=0) {
            oTotalPcs+= parseInt(value);
        }
        
        
    });
    var globalPcs = document.getElementById("tpcs");
    globalPcs.innerHTML = parseInt(oTotalPcs);
    var orderGlobalPcs = document.getElementById("tpcs-1");
    orderGlobalPcs.innerHTML = parseInt(oTotalPcs);
    return oTotalPcs;  
}

function calculateMoney(){
    oTotalMoney = 0;
    
    $(".style-total-amount").each(function() {
        var allValue= $(this).text();
        var value= allValue.substring(2);
        if(!isNaN(value) && value.length !=0) {
            oTotalMoney+= parseFloat(value);
        }  
    });
    
    var globalmoney = document.getElementById("tmoney");
    globalmoney.innerHTML = "$ "+oTotalMoney.toFixed(2);
    
    
    var orderGlobalMoney= document.getElementById("tmoney-1");
    orderGlobalMoney.innerHTML = globalmoney.innerHTML; 
    
    return oTotalPcs.toFixed(2); 
}


$('#add-style').on('click', function(){
    $('#table-body').html("");
    
    calculatePcs();
    
    calculateMoney();
    
    $('#table-body').html($('#order-ow-tbody').html());
});

//Total values end //------------------/    



// Delete row start //------------------------------------------------------------------------------------------------------------------------    

$(document).ready(function() {
    $('#order-ow tbody').on( 'click', 'tr', function () {
            
        if ($(this).hasClass('selected')) {
            $(this).find('.xxx').addClass('hidden');
            $(this).removeClass('selected');
        }
        else {
            $('tr.selected').removeClass('selected');
            $('td.xxx').addClass('hidden');
            $(this).addClass('selected');
            $(this).find('.xxx').removeClass('hidden');
            
            $(this).find('.xxx').on('click', function () { 
                $('#table-body').html("");
                $('.selected').remove();
                
                calculatePcs();
                
                calculateMoney();
                $('#table-body').html($('#order-ow-tbody').html());
            });
        }
    });
});     
    
// Delete row end //-------------------------------------------/   



$('#clear-style').on('click', function(){
    $("#order-style").val("").trigger( "focusout" );
    $("#order-color").val("").trigger( "focusout" );
    $("#size-xs").val("").trigger( "focusout" );
    $("#size-s").val("").trigger( "focusout" );
    $("#size-m").val("").trigger( "focusout" );
    $("#size-l").val("").trigger( "focusout" );
    $("#size-xl").val("").trigger( "focusout" );
    $("#size-xxl").val("").trigger( "focusout" );
    $("#size-1x").val("").trigger( "focusout" );
    $("#size-2x").val("").trigger( "focusout" );
    $("#size-3x").val("").trigger( "focusout" );
    $("#x-price").val("").trigger( "focusout" );
    $("#r-price").val("").trigger( "focusout" );
    $("#description").val("").trigger( "focusout" );
});



//Check box handler start //-----------------


    $('#store-address').change(function(){
        if (sameAS.checked){
            $("#ship-address").val(storeAdd.value).trigger( "focusin" );
            $('#ship-to-address').html(storeAdd.value);
        }    
    });

    $('#address-city').change(function(){
        if (sameAS.checked){
            $("#ship-city").val(addCity.value).trigger( "focusin" );
            $('#ship-to-city').html(" "+addCity.value);
        }    
    });

    $('#state-1').change(function(){
        if (sameAS.checked){
            $("#state-2").val(state.value).trigger( "focusin" );
            $('#ship-to-state').html(" "+state.value+",");
        }    
    });

    $('#address-zip-code').change(function(){
        if (sameAS.checked){
            $("#ship-zip-code").val(aZipCode.value).trigger( "focusin" );
            $('#ship-to-zip_code').html(" "+aZipCode.value);
        }    
    });
    
    $('#same-as').click(function(){ 
            if (sameAS.checked){
                $("#ship-address").val(storeAdd.value).trigger( "focusin" );
                $("#ship-city").val(addCity.value).trigger( "focusin" );
                $("#state-2").val(state.value).trigger( "focusin" );
                $("#ship-zip-code").val(aZipCode.value).trigger( "focusin" );
                
                $('#ship-to-address').html(storeAdd.value);
                $('#ship-to-city').html(" "+addCity.value);
                $('#ship-to-state').html(" "+state.value+",");
                $('#ship-to-zip_code').html(" "+aZipCode.value);
            }
            else{
                $("#ship-address").val("").trigger( "focusout" );
                $("#ship-city").val("").trigger( "focusout" );
                $("#state-2").val("").trigger( "focusout" );
                $("#ship-zip-code").val("").trigger( "focusout" );
                
                $('#ship-to-address').html("");
                $('#ship-to-city').html("");
                $('#ship-to-state').html("");
                $('#ship-to-zip_code').html("");
            }
    });


//Check box handler end //-----------------/




//On change handlers for fillin up customer information on order (SOLD TO SECTION) start//-------------------

$('#store-name').change(function(){
    $('#sold-to-store-name').html(stsn.value);
    $('#ship-to-store-name').html(stsn.value);
});

$('#store-address').change(function(){
    $('#sold-to-address').html(storeAdd.value);
});

$('#address-city').change(function(){
    $('#sold-to-city').html(" "+addCity.value);
});

$('#state-1').change(function(){
    $('#sold-to-state').html(" "+state.value+",");
});

$('#address-zip-code').change(function(){
    $('#sold-to-zip_code').html(" "+aZipCode.value);
});

$('#email').change(function(){
    $('#sold-to-email').html(email.value);
});

$('#phone').change(function(){
    $('#sold-to-phone').html("Tel: "+phone.value);
});

//On change handlers for fillin up customer information on order (SOLD TO SECTION) end//-------------------/

//On change handlers for fillin up customer information on order (SHIP TO SECTION) start//-------------------

$('#ship-address').change(function(){
    $('#ship-to-address').html(shipAdd.value);
});

$('#ship-city').change(function(){
    $('#ship-to-city').html(" "+shipCity.value);
});

$('#state-2').change(function(){
    $('#ship-to-state').html(" "+shipState.value+",");
});

$('#ship-zip-code').change(function(){
    $('#ship-to-zip_code').html(" "+shipZipCode.value);
});

$('#shipping-instructions').change(function(){
    $('#ship-to-instr').html(shipInstr.value);
});

//On change handlers for fillin up customer information on order (SHIP TO SECTION) end//-------------------/

$('#buyer').change(function(){
    $('#buyer-1').html("Buyer: "+buyer.value);
});

$('#rep').change(function(){
    $('#sales-rep').html("Sales Rep: "+rep.value);
});

$('#terms').change(function(){
    $('#terms-1').html("Terms: "+terms.value);
});

$('#ptr').click(function(){
    window.print();
});

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var year = d.getFullYear() 

var output= (month<10 ? '0' : '') + month + '/' +(day<10 ? '0' : '') + day + '/' + year;

$('#odate').val(output);
$('#order-date').html("Order date: " + output);

