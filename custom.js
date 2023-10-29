
$(document).ready(function() {


   // Multi delete script for displaying delete button when a checkbox is selected
   $('.deletecheckboxvalue').click(function(){
      var txt='';

      $('.deletecheckboxvalue:checked').each(function() {
        txt+=$(this).val()+','
        // alert(txt)

          $('#delete').show(0)

      });
      $('#deleteallvalues').val(txt);
    });



    if ($(".success")[0]){
      // alert("Item successfully created.\n Click here to receive this from vendor");
          $(function() {
            $( ".success" ).dialog({
                open: function(event, ui){
                 setTimeout("$('.success').dialog('close')",5000);
                },
                modal: false,
                // position: [100, 100],
                resizeable: false,
                draggable: false,
                autoOpen: true,
                show: {
                  effect: "fade",
                  duration: 1000,
                  },

                hide: {
                  effect: "fade",
                  duration: 500
                }
            });
          });

    // } else {
    //     alert("An Error occured")
    }


    if ($(".error")[0]){
      // alert("Item successfully created.\n Click here to receive this from vendor");
          $(function() {
            $( ".error" ).dialog({
              open: function(event, ui){
                 setTimeout("$('.error').dialog('close')",100000);
                },
                autoOpen: true,
                show: {
                  effect: "bounce",
                  duration: 1000,
                },

                hide: {
                  effect: "bounce",
                  duration: 500
                }
            });
          });
    }

  
  // $('.tabs').tabs();//to be restored
  // $('.pannel').accordion({collapsible: true},{heightStyle: 'content'},{icons: {        //to be restored
  //                                                                               header: "ui-icon-plus",
  //                                                                               activeHeader: "ui-icon-minus"
  //                                                                             }
  //                                                                     }
  //                       );


    // REMEMBER THE LAST SETTINGS TAB
    function tab() { //tab with cookie function
      $( ".tabs" ).tabs({
        active   : $.cookie('activetab'),
        activate : function( event, ui ){
            $.cookie( 'activetab', ui.newTab.index(),{
                expires : 10
            });
        }
      });
    }


    var url      = window.location.href;     // Returns full URL
      // var pathname = window.location.pathname; // Returns path only

    var store = "store_";
    var fixAsset = "fix_assets";
    var settings = "settings";

    storeResults = url.search(store);
    assetResults = url.search(fixAsset);
    settingsResults = url.search(settings);

    // if ((storeResults != -1) || (assetResults != -1)){
    //   $('#settings').show();
    // }else $('#settings').hide();

    // if (settingsResults != -1){
    //   $('#settings').hide();
    //   tab(); //calling the tab with coockie function
    // }

  
    var elementsToReset = $('#id_pay_allowance, #id_date_allowance_paid, #id_pay_contribution, #id_date_allowance_contributed, #id_issue_amount, #id_issue_to, .store-form #id_unit, #id_receive_amount, #id_returned_by, .store-form #id_supplier_name');

    elementsToReset.val('');

    // rank_index0 = document.getElementById("id_rank").selectedIndex = "0";
    // rank_index1 = document.getElementById("id_rank").selectedIndex = "1";
    // rank_index2 = document.getElementById("id_rank").selectedIndex = "2";
    // rank_index3 = document.getElementById("id_rank").selectedIndex = "3";
    // rank_index4 = document.getElementById("id_rank").selectedIndex = "4";
    // rank_index5 = document.getElementById("id_rank").selectedIndex = "5";
    // rank_index6 = document.getElementById("id_rank").selectedIndex = "6";
    // rank_index7 = document.getElementById("id_rank").selectedIndex = "7";
   

  $('#div_id_rank').change(function() {
      var selected = $('#div_id_rank :selected').text();
      var extracted_num = parseInt(selected.replace(/[^0-9\.]/g, ''), 10)

      if (selected == 'GEN, COL, LT COL = USD 1301'){
          $('#id_allowance').val( '1301' );
      }

      else if (selected == 'MAJOR = USD 1210'){
          $('#id_allowance').val( '1210' );
      }

      else if (selected == 'CAPT = USD 1139'){
          $('#id_allowance').val( '1139' );
      }

      else if (selected == 'LT = USD 1081'){
          $('#id_allowance').val( '1081' );
      }

      else if (selected == '2IT = USD 1026'){
          $('#id_allowance').val( '1026' );
      }

      else if (selected == 'OCDT, WO2, SSGT = USD 974'){
          $('#id_allowance').val( '974' );
      }

      else if (selected == 'SGT, CPL, LCPL = USD 876'){
          $('#id_allowance').val( '876' );
      }
  });


$(document).ready(function(){
  
  $(".datetimeinput").datepicker({changeYear: true,changeMonth: true, dateFormat: 'yy-mm-dd'});
 
 
});
    // var endDate = $('#id_enddate');
    // endDate.val('2037-12-31');
    // $('#id_reorder_level').val(0);


    // var assetVehicle = $('.asset-form #div_id_number_plate, .inline-search #div_id_number_plate, .inline-search #div_id_chasis_number, .asset-form #div_id_make, .asset-form #div_id_model, .asset-form #div_id_chasis_number');
    // var assetBuildingLand = $('#div_id_plot_or_building_number, #div_id_size, .inline-search #div_id_plot_or_building_number');
    // var assetFurniture = $('#div_id_serial_number');
    // var hideWarrantyMinistry = $('.asset-form #div_id_delivery_date, .asset-form #div_id_waranty_starts, .asset-form #div_id_waranty_ends, .asset-form #div_id_ministry_or_department,  .asset-form #div_id_unit');


    // hiddenFields = $('.form-edit #div_id_serial_number, .form-edit #div_id_plot_or_building_number, .form-edit #div_id_size, .form-edit #div_id_serial_number, .form-edit #div_id_delivery_date, .form-edit #div_id_waranty_starts, .form-edit #div_id_waranty_ends, #div_id_depreciation_commencement_date, #div_id_depreciation_percentage')
    // hiddenFields.hide()

    // Note in USE On Clicking View More
    //   $('.viewmore, .edit').click(function() {
    //     hiddenFields.slideToggle()
    // });


    var disableFormFields = ('.form-edit :text, .form-edit .select, .form-edit .textarea, .form-edit .checkboxinput, .form-edit :input[type="number"], form .save, form-edit .update, form #show_update_button');
    $(disableFormFields).prop('disabled', true)
    $('.edit').click(function(){
      $(disableFormFields).prop('disabled', false);
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });

    $('#show_update_button').click(function(){
      if(document.getElementById('show_update_button').checked) {
        $('.update').show(200)
      }else{
        $('.update').hide(200)
      }

    });

    var store = "store_";
    var fixAsset = "fix_assets";
    var settings = "settings";

    storeResults = url.search(store);
    assetResults = url.search(fixAsset);
    settingsResults = url.search(settings);


    var training_create = "create";
    var training_edit = "edit";
    training_createResults = url.search(training_create);
    training_editResults = url.search(training_edit);
    // receive_Results = url.search(receive_);


    $('#div_id_oversea_training').click(function(){
      if(document.getElementById('id_oversea_training').checked) {
        $('#div_id_rank').show(200)
        $('#div_id_USD_Rate').show(200)
        $('#div_id_host_pay').show(200)
      }else{
        $('#div_id_rank').hide(200)
        $('#div_id_USD_Rate').hide(200)
        $('#div_id_host_pay').hide(200)
      }

    });


    $('#div_id_sponsor').click(function(){
      if(document.getElementById('id_sponsor').checked) {
        $('#div_id_fees').hide(200)
        $('#div_id_fees_paid').hide(200)
        $('#div_id_date_fees_paid').hide(200)
      }else{
        $('#div_id_fees').show(200)
        $('#div_id_fees_paid').show(200)
        $('#div_id_date_fees_paid').show(200)
      }
    });



   // Scroll Top Script
   //Check to see if the window is top if not then display button
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });
   //END Scroll Top Script



    $(".jumbotron, .navbar").hide().fadeIn(1000);
    $('.jumbotron').ready(function () {
      $(".display-icons").hide().fadeIn(1000);
    })
    


    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(300).slideDown(300);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(300).slideUp(300);
      });



    // $('<br />').insertAfter('#div_id_buildings_and_lands');

    $('<br /><br /><br /><br /><hr class="form-divider">').insertAfter('#div_id_line_one_total_price');
    $('<br /><br /><br /><br /><hr class="form-divider">').insertAfter('#div_id_line_two_total_price');
    $('<br /><br /><br /><br /><hr class="form-divider">').insertAfter('#div_id_line_three_total_price');
    $('<br /><br /><br /><br /><hr class="form-divider">').insertAfter('#div_id_line_four_total_price');
    $('<br /><br /><br /><br /><hr class="form-divider">').insertAfter('#div_id_line_five_total_price');
    $('<br class="hideable" /><br class="hideable" /><br class="hideable" /><hr class="form-divider hideable">').insertAfter('#div_id_line_six_total_price');
    $('<br class="hideable" /><br class="hideable" /><br class="hideable" /><hr class="form-divider hideable">').insertAfter('#div_id_line_seven_total_price');
    $('<br class="hideable" /><br class="hideable" /><br class="hideable" /><hr class="form-divider hideable">').insertAfter('#div_id_line_eight_total_price');
    $('<br class="hideable" /><br class="hideable" /><br class="hideable" /><hr class="form-divider hideable">').insertAfter('#div_id_line_nine_total_price');
    $('<br class="hideable" /><br class="hideable" /><br class="hideable" /><hr class="form-divider hideable">').insertAfter('#div_id_line_ten_total_price');
    $("<br class='hideable' /><hr class='form-divider'> <input id='more-line' class='btn btn-primary' value='Show / Hide More Lines'/>").insertAfter('.invoice-form #div_id_total');

    $('.hideable, #div_id_line_six, #div_id_line_six_quantity, #div_id_line_six_unit_price, #div_id_line_six_total_price, #div_id_line_seven, #div_id_line_seven_quantity, #div_id_line_seven_unit_price, #div_id_line_seven_total_price, #div_id_line_eight, #div_id_line_eight_quantity, #div_id_line_eight_unit_price, #div_id_line_eight_total_price, #div_id_line_nine, #div_id_line_nine_quantity, #div_id_line_nine_unit_price, #div_id_line_nine_total_price, #div_id_line_ten, #div_id_line_ten_quantity, #div_id_line_ten_unit_price, #div_id_line_ten_total_price').hide()

    $('#more-line').click(function(){
        $('#div_id_line_six, #div_id_line_six_quantity, #div_id_line_six_unit_price, #div_id_line_six_total_price').slideToggle(200)
        $('#div_id_line_seven, #div_id_line_seven_quantity, #div_id_line_seven_unit_price, #div_id_line_seven_total_price').slideToggle(200)
        $('#div_id_line_eight, #div_id_line_eight_quantity, #div_id_line_eight_unit_price, #div_id_line_eight_total_price').slideToggle(200)
        $('#div_id_line_nine, #div_id_line_nine_quantity, #div_id_line_nine_unit_price, #div_id_line_nine_total_price').slideToggle(200)
        $('#div_id_line_ten, #div_id_line_ten_quantity, #div_id_line_ten_unit_price, #div_id_line_ten_total_price').slideToggle(200)
        $('.hideable').slideToggle(200)
    });

    // var line_one_quantity_text = $('#id_line_one_quantity').val();
    // var line_one_unit_price_text = $('#id_line_one_unit_price').val();
    // var line_one_total = line_one_quantity_text * line_one_unit_price_text

    // var line_two_quantity_text = $('#id_line_two_quantity').val();
    // var line_two_unit_price_text = $('#id_line_two_unit_price').val();
    // var line_two_total = line_two_quantity_text * line_two_unit_price_text

    // var line_three_quantity_text = $('#id_line_three_quantity').val();
    // var line_three_unit_price_text = $('#id_line_three_unit_price').val();
    // var line_three_total = line_three_quantity_text * line_three_unit_price_text
    
    // var line_four_quantity_text = $('#id_line_four_quantity').val();
    // var line_four_unit_price_text = $('#id_line_four_unit_price').val();
    // var line_four_total = line_four_quantity_text * line_four_unit_price_text

    // var line_five_quantity_text = $('#id_line_five_quantity').val();
    // var line_five_unit_price_text = $('#id_line_five_unit_price').val();
    // var line_five_total = line_five_quantity_text * line_five_unit_price_text

    // var line_six_quantity_text = $('#id_line_six_quantity').val();
    // var line_six_unit_price_text = $('#id_line_six_unit_price').val();
    // var line_six_total = line_six_quantity_text * line_six_unit_price_text

    // var line_seven_quantity_text = $('#id_line_seven_quantity').val();
    // var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
    // var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

    // var line_eight_quantity_text = $('#id_line_eight_quantity').val();
    // var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
    // var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

    // var line_nine_quantity_text = $('#id_line_nine_quantity').val();
    // var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
    // var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

    // var line_ten_quantity_text = $('#id_line_ten_quantity').val();
    // var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
    // var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

    // var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

// Line One Auto Calculation
    $('#id_line_one_quantity').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_one_total_price').val(line_one_total);
        $('#id_total').val(total);
    });

    $('#id_line_one_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_one_total_price').val(line_one_total);
        $('#id_total').val(line_one_total);
    });



// Line Two Auto Calculation
    $('#id_line_two_quantity').keyup(function(){
        
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_two_total_price').val(line_two_total);
        $('#id_total').val(total);
    });

    $('#id_line_two_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_two_total_price').val(line_two_total);
        $('#id_total').val(total);
    });


  // Line Three Auto Calculation
    $('#id_line_three_quantity').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_three_total_price').val(line_three_total);
        $('#id_total').val(total);
    });

    $('#id_line_three_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_three_total_price').val(line_three_total);
        $('#id_total').val(total);
    });


  // Line Four Auto Calculation
    $('#id_line_four_quantity').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_four_total_price').val(line_four_total);
        $('#id_total').val(total);
    });

    $('#id_line_four_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_four_total_price').val(line_four_total);
        $('#id_total').val(total);
    });

  
  // Line Five Auto Calculation
    $('#id_line_five_quantity').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_five_total_price').val(line_five_total);
        $('#id_total').val(total);
    });

    $('#id_line_five_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_five_total_price').val(line_five_total);
        $('#id_total').val(total);
    });

  
  // Line Six Auto Calculation
    $('#id_line_six_quantity').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_six_total_price').val(line_six_total);
        $('#id_total').val(total);
    });

    $('#id_line_six_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_six_total_price').val(line_six_total);
        $('#id_total').val(total);
    });

  
  // Line Seven Auto Calculation
    $('#id_line_seven_quantity').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_seven_total_price').val(line_seven_total);
        $('#id_total').val(total);
    });

    $('#id_line_seven_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_seven_total_price').val(line_seven_total);
        $('#id_total').val(total);
    });


  // Line Eight Auto Calculation
    $('#id_line_eight_quantity').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_eight_total_price').val(line_eight_total);
        $('#id_total').val(total);
    });

    $('#id_line_eight_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_eight_total_price').val(line_eight_total);
        $('#id_total').val(total);
    });

  

  // Line Nine Auto Calculation
    $('#id_line_nine_quantity').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_nine_total_price').val(line_nine_total);
        $('#id_total').val(total);
    });

    $('#id_line_nine_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_nine_total_price').val(line_nine_total);
        $('#id_total').val(total);
    });

  
  // Line Ten Auto Calculation
    $('#id_line_ten_quantity').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_ten_total_price').val(line_ten_total);
        $('#id_total').val(total);
    });

    $('#id_line_ten_unit_price').keyup(function(){
        var line_one_quantity_text = $('#id_line_one_quantity').val();
        var line_one_unit_price_text = $('#id_line_one_unit_price').val();
        var line_one_total = line_one_quantity_text * line_one_unit_price_text

        var line_two_quantity_text = $('#id_line_two_quantity').val();
        var line_two_unit_price_text = $('#id_line_two_unit_price').val();
        var line_two_total = line_two_quantity_text * line_two_unit_price_text

        var line_three_quantity_text = $('#id_line_three_quantity').val();
        var line_three_unit_price_text = $('#id_line_three_unit_price').val();
        var line_three_total = line_three_quantity_text * line_three_unit_price_text
        
        var line_four_quantity_text = $('#id_line_four_quantity').val();
        var line_four_unit_price_text = $('#id_line_four_unit_price').val();
        var line_four_total = line_four_quantity_text * line_four_unit_price_text

        var line_five_quantity_text = $('#id_line_five_quantity').val();
        var line_five_unit_price_text = $('#id_line_five_unit_price').val();
        var line_five_total = line_five_quantity_text * line_five_unit_price_text

        var line_six_quantity_text = $('#id_line_six_quantity').val();
        var line_six_unit_price_text = $('#id_line_six_unit_price').val();
        var line_six_total = line_six_quantity_text * line_six_unit_price_text

        var line_seven_quantity_text = $('#id_line_seven_quantity').val();
        var line_seven_unit_price_text = $('#id_line_seven_unit_price').val();
        var line_seven_total = line_seven_quantity_text * line_seven_unit_price_text

        var line_eight_quantity_text = $('#id_line_eight_quantity').val();
        var line_eight_unit_price_text = $('#id_line_eight_unit_price').val();
        var line_eight_total = line_eight_quantity_text * line_eight_unit_price_text

        var line_nine_quantity_text = $('#id_line_nine_quantity').val();
        var line_nine_unit_price_text = $('#id_line_nine_unit_price').val();
        var line_nine_total = line_nine_quantity_text * line_nine_unit_price_text

        var line_ten_quantity_text = $('#id_line_ten_quantity').val();
        var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
        var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text

        var total = line_one_total + line_two_total + line_three_total + line_four_total + line_five_total+ line_six_total + line_seven_total + line_eight_total + line_nine_total + line_ten_total

        $('#id_line_ten_total_price').val(line_ten_total);
        $('#id_total').val(total);
    });

  

  // // Line TOTAL Auto Calculation
  //   $('#id_line_ten_quantity').keyup(function(){
  //       var line_ten_quantity_text = $('#id_line_ten_quantity').val();
  //       var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
  //       var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text
  //       $('#id_line_ten_total_price').val(line_ten_total);
  //   });

  //   $('#id_line_ten_unit_price').keyup(function(){
  //       var line_ten_quantity_text = $('#id_line_ten_quantity').val();
  //       var line_ten_unit_price_text = $('#id_line_ten_unit_price').val();
  //       var line_ten_total = line_ten_quantity_text * line_ten_unit_price_text
  //       $('#id_line_ten_total_price').val(line_ten_total);
  //   });

  



    // Pagination Script
    // $('.table').paging({limit:15});//to be restored
    // END Pagination Script
     

    NProgress.start();
    NProgress.done();


    // $(".dateinput").datepicker({yearRange: '1930:2100', showButtonPanel: true, changeMonth: true, changeYear: true, dateFormat: 'yy-mm-dd'});//to be restored
   
    var currentDateAndTime = moment().format('YYYY-MM-DD HH:mm');
   


  (function blink() { 
    $('.blink-me').fadeOut(500).fadeIn(500, blink); 
  });

   $(document).ready(function(){
  
      $(".datetimeinput").datepicker({changeYear: true,changeMonth: true, dateFormat: 'yy-mm-dd'});
     
     
    });



});//Document.ready closing brace
