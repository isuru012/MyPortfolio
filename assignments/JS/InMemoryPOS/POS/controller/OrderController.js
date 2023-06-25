

$('#placeOrder').click(function() {
    // Get the entered values
    var itemName = $('.txtNameNewOrderItem').val();
    var batchNumber = selectedBatchNumber;
    var quantityPurchased = $('.txtQuantityNeeded').val();
    var sellingUnitPrice = $('.txtNewOrderUnitPrice').val();
    var totalPrice = quantityPurchased * sellingUnitPrice;

    // Generate order ID and date
    var orderId = generateOrderId();
    var date = getCurrentDate();

    // Update the order page table
    var t4 = $('#example4').DataTable();
    t4.row.add([t4.data().count() + 1, orderId, date, quantityPurchased, sellingUnitPrice, totalPrice]).draw(false);

    // Clear input fields
    $('.txtNameNewOrderItem').val('');
    $('.txtQuantityNeeded').val('');
    $('.txtNewOrderUnitPrice').val('');

    // Display success message or perform any additional actions
});

function generateOrderId() {
    // Generate a unique order ID (you can implement your own logic here)
    return Math.floor(Math.random() * 1000000) + 1;
}

function getCurrentDate() {
    // Get the current date in the format: yyyy.mm.dd
    var currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var day = String(currentDate.getDate()).padStart(2, '0');
    return year + '.' + month + '.' + day;
}


$(document).ready(function () {

    $('#example4').DataTable({
        pageLength: 5,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            ['5', '10', '25', '50', 'All']
        ]

    });

});