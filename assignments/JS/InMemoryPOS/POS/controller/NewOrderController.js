// Get the dropdown items
var dropdownItems = document.querySelectorAll('.dropdown-item');
var selectedValue;
// Add event listener to each dropdown item
dropdownItems.forEach(function (item) {
    item.addEventListener('click', function () {
         selectedValue= item.textContent;
        console.log(selectedValue); // You can use the selectedValue as per your requirement
    });
});


var rowNumber3 = 1;
var arr4 = [];
var t3;
var balanace=0;

$('#add3').click(function () {
    // Retrieve input values inside the click event handler
    var itemName = $('.txtNameNewOrderItem').val();
    var customerName = $('.txtNameNewOrderCustomer').val();
    var quantityNeeded = $('.txtQuantityNeeded').val();
    var unitPrice = $('.txtNewOrderUnitPrice').val();
    var discount = $('.txtNewOrderDiscount').val();

    let newOrderObject = {
        Item_Name: itemName,
        Batch_Number: selectedValue,
        Customer_Name:customerName,
        Quantity_Needed: quantityNeeded,
        Unit_Price: unitPrice,
        Discounts: discount
    };

    arr4.push(newOrderObject);

    t3 = $('#example6').DataTable();
    t3.row.add([
        rowNumber3,
        newOrderObject['Item_Name'],
        newOrderObject['Batch_Number'],
        newOrderObject['Customer_Name'],
        newOrderObject['Quantity_Needed'],
        newOrderObject['Unit_Price'],
        newOrderObject['Discounts']
    ]).draw(false);

    balanace = balanace+(newOrderObject['Quantity_Needed']*(newOrderObject['Unit_Price']-newOrderObject['Discounts']));
    rowNumber3++;
    $('.balance').text("Balance : "+balanace);
});


$(document).ready(function () {
    $('#example6').DataTable({
        pageLength: 5,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            ['5', '10', '25', '50', 'All']
        ]

    });

});