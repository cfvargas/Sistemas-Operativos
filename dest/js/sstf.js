var cantidad,pistaInicio,val,arrayPistas=[],arrayRecorrido=[],promedio,suma=0;$("#calcular").on("click",function(){cantidad=parseInt($("#cantidad").val()),pistaInicio=parseInt($("#inicio").val());for(var a="<input type='text' class='result__item'>",r=1;cantidad>=r;r++)$(".result__container__input").append(a);$(".article").slideUp("fast"),$(".ocultar").css("display","flex"),$(".result").slideDown(),$(".result__item:first-child").addClass("active")}),$(".result__calcular__button").on("click",function(){var a=pistaInicio;arrayPistas.push(a);for(var r=0;cantidad>r;r++){var s=$(".active");val=parseInt(s.val()),arrayPistas.push(val),a=Math.abs(arrayPistas[r+1]-arrayPistas[r]),suma+=a,arrayRecorrido.push(a);var i=arrayRecorrido[r];$(".result__container__pistas").append("<p>"+i+"</p>"),s.next().addClass("active"),s.removeClass("active")}promedio=suma/cantidad,$(".result__container__promedio").append("<p>"+promedio+"</p>");for(var t=[],a=0,r=1;cantidad>r;r++)for(var c=1;2*cantidad+1>c;c++)arrayPistas[r]>=arrayPistas[c+1]&&arrayPistas[r]<=100&&arrayPistas[r]>=a&&(a=arrayPistas[r]);t[0]=a;for(var r=1;cantidad>=r;r++)for(var c=0;2*cantidad>c;c++)if(arrayPistas[r]<=arrayPistas[r+1]&&arrayPistas[r]<=t[0]){var e=arrayPistas[r];arrayPistas[r]=arrayPistas[c],arrayPistas[c]=e}console.log(arrayPistas)});