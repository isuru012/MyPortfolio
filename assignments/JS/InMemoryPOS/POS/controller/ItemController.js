var rowNumber = 1;
var arr2 = [];
var t1;

$('#add2').click(function() {
    // Retrieve input values inside the click event handler
    var itemName = $('.txtName').val();
    var batchNumber = $('.txtBatch').val();
    var qtyOnHand = $('.txtQuantity').val();
    var unitPrice = $('.txtUnit').val();
    var discount = $('.txtDiscount').val();

    let itemObject = {
        Item_Name: itemName,
        Batch_Number: batchNumber,
        Quantity_On_Hand: qtyOnHand,
        Unit_Price: unitPrice,
        Discounts: discount
    };

    arr2.push(itemObject);

    t1 = $('#example3').DataTable();
    t1.row.add([
        rowNumber,
        itemObject['Item_Name'],
        itemObject['Batch_Number'],
        itemObject['Quantity_On_Hand'],
        itemObject['Unit_Price'],
        itemObject['Discounts']
    ]).draw(false);

    rowNumber++;
});

$(document).ready(function() {
    $('#example3').DataTable({
        pageLength: 5,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            ['5', '10', '25', '50', 'All']
        ]
    });
});
