var rowNumber2 = 1;
var arr = [];
var t ;

$('#add1').click(function() {
    var cusName=$('.txtName').val();
    var cusAddress=$('.txtAddress').val();
    var cusPhonenumber=$('.txtPhoneNumber').val();


    let customerObject={
        name:cusName,
        address:cusAddress,
        phone:cusPhonenumber
    }
    arr.push(customerObject);

    /*  var createTr = $('<tr></tr>');
      var createTh = $('<th></th>').attr('scope', 'row').text(rowNumber);*/
   /* var createTd1 = $('<td></td>').text(customerObject['name']);
    var createTd2 = $('<td></td>').text(customerObject['address']);
    var createTd3 = $('<td></td>').text(customerObject['phone']);


    let tbody = $('#tbody');*/

    t=$('#example2').DataTable();
    t.row.add([rowNumber2,customerObject['name'],customerObject['address'],customerObject['phone']]).draw(false);


    /* createTr.append(createTh, createTd1, createTd2, createTd3);
     tbody.append(createTr);
     console.log(arr);*/
    rowNumber2++;
});

$(document).ready(function () {
    $('#example2').DataTable({
        pageLength: 5,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            ['5', '10', '25', '50', 'All']
        ],

    });


});