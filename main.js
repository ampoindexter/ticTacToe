(function app(){
  'use strict';

        var documentReady = function() {
          var lastMark;
          var turnCount = 0;

          $("#play").on("click", function() {
            location.reload();
          });

          $(".box").on("click", function(event) {
              var $e = $(event.target);

              if($e.data("clicked")){
                return;
              }

              lastMark = (lastMark === "X") ? lastMark = "O" : lastMark = "X";
               $e.text(lastMark);
               turnCount++;
               var winner = function(){

                   var newDiv = document.createElement('div');
                   var newNode = document.createTextNode("you win!!");
                   newDiv.appendChild(newNode);
                   document.getElementById('winner').appendChild(newDiv)
                 };

               if ( $('#1').text){var first = $('#1').text();}
               if ($('#2').text )var second = $('#2').text();
               if ($('#3').text )var third = $('#3').text();
               if ($('#4').text)var fourth = $('#4').text();
               if ($('#5').text)var fifth = $('#5').text();
               if ($('#6').text) var sixth = $('#6').text();
               if ($('#7').text) var seventh = $('#7').text();
               if ($('#8').text) var eighth = $('#8').text();
               if ($('#9').text)var ninth = $('#9').text();
              let dict ={};
               dict["first"] = first;
              dict["second"]= second;
              dict["third"]=third;
              dict["fourth"]=fourth;
              dict["fifth"]=fifth;
              dict["sixth"]=sixth;
              dict["seventh"]=seventh;
              dict["eighth"]=eighth;
              dict["ninth"]=ninth;
                if( dict.first == "X" && dict.first === dict.second && dict.second===dict.third && dict.second !== undefined){winner()};
                if( dict.fourth == "X" && dict.fourth === dict.fifth && dict.fifth===dict.sixth && dict.second !== undefined){winner()};
                if(dict.first == "X" && dict.first === dict.second && dict.second===dict.third && dict.second !== undefined){winner()};
                if(dict.seventh == "X" && dict.seventh === dict.eighth && dict.eighth===dict.ninth && dict.second !== undefined){winner()};
                if(dict.first == "X" && dict.first === dict.fifth && dict.fifth===dict.ninth && dict.second !== undefined){winner()};
                if(dict.third == "X" && dict.third === dict.fifth && dict.fifth===dict.seventh && dict.second !== undefined){winner()};
                if(dict.third == "X" && dict.third === dict.sixth && dict.ninth===dict.third && dict.second !== undefined){winner()};
                if(dict.second == "X" && dict.second === dict.fifth && dict.fifth===dict.eighth && dict.second !== undefined){winner()};
                if(dict.first == "X" && dict.first === dict.fourth && dict.fourth===dict.seventh && dict.second !== undefined){winner()};

               if( dict.first == "O" && dict.first === dict.second && dict.second===dict.third && dict.second !== undefined){winner()};
               if( dict.fourth == "O" && dict.fourth === dict.fifth && dict.fifth===dict.sixth && dict.second !== undefined){winner()};
               if(dict.first == "O" && dict.first === dict.second && dict.second===dict.third && dict.second !== undefined){winner()};
               if(dict.seventh == "O" && dict.seventh === dict.eighth && dict.eighth===dict.ninth && dict.second !== undefined){winner()};
               if(dict.first == "O" && dict.first === dict.fifth && dict.fifth===dict.ninth && dict.second !== undefined){winner()};
               if(dict.third == "O" && dict.third === dict.fifth && dict.fifth===dict.seventh && dict.second !== undefined){winner()};
               if(dict.third == "O" && dict.third === dict.sixth && dict.ninth===dict.third && dict.second !== undefined){winner()};
               if(dict.second == "O" && dict.second === dict.fifth && dict.fifth===dict.eigth && dict.second !== undefined){winner()};
              var winner = function(){
              var newDiv = document.createElement('div');
              var newNode = document.createTextNode("you win!!");
              newDiv.appendChild(newNode);
              document.getElementById('pairHolder').appendChild(newDiv)};


              $e.data("clicked", true);
          })
        }

        $(documentReady);


})();