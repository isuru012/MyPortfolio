var rowNumber = 1;
var arr = [];
var t ;

$('#add2').click(function() {
    var itemName=$('.txtName').val();
    var batchNumber=$('.txtBatch').val();
    var qtyOnHand=$('.txtQuantity').val();
    var unitPrice=$('.txtUnit').val();
    var discount=$('.txtDiscount').val();


    let itemObject={
        name:itemName,
        batchNumber:batchNumber,
        qty:qtyOnHand,
        unitP:unitPrice,
        diss:discount
    }

    arr.push(itemObject);

    /*  var createTr = $('<tr></tr>');
      var createTh = $('<th></th>').attr('scope', 'row').text(rowNumber);*/
   /* var createTd1 = $('<td></td>').text(customerObject['name']);
    var createTd2 = $('<td></td>').text(customerObject['address']);
    var createTd3 = $('<td></td>').text(customerObject['phone']);


    let tbody = $('#tbody');*/

    t=$('#example3').DataTable();
    t.row.add([rowNumber,itemObject['name'],itemObject[' batchNumber'],itemObject['qty'],itemObject['unitP'],itemObject['diss']]).draw(false);


    /* createTr.append(createTh, createTd1, createTd2, createTd3);
     tbody.append(createTr);
     console.log(arr);*/
    rowNumber++;
});

$(document).ready(function () {
    $('#example3').DataTable({
        pageLength: 5,

        lengthMenu: [
            [5, 10, 25, 50, -1],
            ['5', '10', '25', '50', 'All']
        ]
    });
});