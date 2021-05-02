$(function() {
          $('input[name="daterange"]').daterangepicker({
          });
        });

function executesearch(){
   var searchinput = document.getElementById("datebar");
   var filter = searchinput.value;
   if (filter == '') {
        var mainbody = document.getElementById("mainbody");
        var logo = document.getElementById("logo");
        var count = document.getElementById("count");
        mainbody.style.display = "block";
        logo.style.display = "none";
        count.innerHTML = "10";

   }

   if (filter == "12/31/2019 - 01/02/2021"){
        var mainbody = document.getElementById("mainbody");
        var logo = document.getElementById("logo");
        var count = document.getElementById("count");
        mainbody.style.display = "block";
        logo.style.display = "none";
        count.innerHTML = "10";

        }

   else {
        var mainbody = document.getElementById("mainbody");
        var logo = document.getElementById("logo");
        var count = document.getElementById("count");
        mainbody.style.display = "none";
        logo.style.display = "block";
        count.innerHTML = "0";
   }
};