/*
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

});*/
// Arrays to store customer names and item names
 // Populate this array with item names

// Function to populate customer name suggestions
/*
function populateCustomerSuggestions() {
    $('.txtNameNewOrderCustomer').autocomplete({
        source: customerNames
    });
}
*/

var selectedBatchNumber;
function populateCustomerSuggestions() {
    $('.txtNameNewOrderCustomer').autocomplete({
        source: function(request, response) {
            var term = request.term.toLowerCase();
            var matchingCustomers = arr.filter(function(customer) {
                return customer.name.toLowerCase().indexOf(term) !== -1;
            });
            var customerNames = matchingCustomers.map(function(customer) {
                return customer.name;
            });
            response(customerNames);
        }
    });
}

function populateItemSuggestions() {
    $('.txtNameNewOrderItem').autocomplete({
        source: function(request, response) {
            var term = request.term.toLowerCase();
            var matchingCustomers = arr2.filter(function(customer) {
                return customer.Item_Name.toLowerCase().indexOf(term) !== -1;
            });
            var customerNames = matchingCustomers.map(function(customer) {
                return customer.Item_Name;
            });
            response(customerNames);
        }
    });
}


// Function to populate batch numbers based on selected item name
function populateBatchNumbers(itemName) {
    var batchNumbers = []; // Populate this array with batch numbers for the selected item name
    var dropdownMenu = $('.dropdown-menu');
    dropdownMenu.empty();

    // Find batch numbers for the selected item name
    arr2.forEach(function(item) {
        if (item.Item_Name === itemName) {
            batchNumbers.push(item.Batch_Number);
        }
    });

    if (batchNumbers.length > 0) {
        batchNumbers.forEach(function(batchNumber) {
            var listItem = $('<li>');
            var linkItem = $('<a>', {
                class: 'dropdown-item',
                href: '#',
                text: batchNumber
            });

            linkItem.on('click', function() {
                selectedBatchNumber = $(this).text();
                var selectedUnitPrice = getUnitPrice(itemName, selectedBatchNumber);
                $('.txtNewOrderUnitPrice').val(selectedUnitPrice);
            });


            listItem.append(linkItem);
            dropdownMenu.append(listItem);
        });
    } else {
        dropdownMenu.append($('<li>').text('No batch numbers available'));
    }
}

function getUnitPrice(itemName, batchNumber) {
    // Find and return the unit price for the selected item and batch number
    var unitPrice = null;

    arr2.forEach(function(item) {
        if (item.Item_Name === itemName && item.Batch_Number === batchNumber) {
            unitPrice = item.Unit_Price;
        }
    });

    return unitPrice;
}


// Event listener for dropdown item selection

var rowNumber3 = 1;
var arr4 = [];
var t3;
var balance = 0;
var quantityNeeded;
var unitPrice;

$('#add3').click(function () {
    var itemName = $('.txtNameNewOrderItem').val();
    var customerName = $('.txtNameNewOrderCustomer').val();
     quantityNeeded = $('.txtQuantityNeeded').val();
    unitPrice = $('.txtNewOrderUnitPrice').val();
    var discount = $('.txtNewOrderDiscount').val();

    let newOrderObject = {
        Item_Name: itemName,
        Batch_Number: selectedBatchNumber,
        Customer_Name: customerName,
        Quantity_Needed: quantityNeeded,
        Unit_Price: unitPrice,
        Discounts: discount
    };

    arr4.push(newOrderObject);

    t3 = $('#example6').DataTable();
    t3.row
        .add([
            rowNumber3,
            newOrderObject['Item_Name'],
            newOrderObject['Batch_Number'],
            newOrderObject['Customer_Name'],
            newOrderObject['Quantity_Needed'],
            newOrderObject['Unit_Price'],
            newOrderObject['Discounts']
        ])
        .draw(false);

    balance += newOrderObject['Quantity_Needed'] * (newOrderObject['Unit_Price'] - newOrderObject['Discounts']);
    rowNumber3++;
    $('.balance').text('Balance: ' + balance);

    // Clear input fields after adding
    $('.txtNameNewOrderItem').val('');
    $('.txtNameNewOrderCustomer').val('');
    $('.txtQuantityNeeded').val('');
    $('.txtNewOrderUnitPrice').val('');
    $('.txtNewOrderDiscount').val('');
});

// Event listener for table row click
$('#example6 tbody').on('click', 'tr', function () {
    var tableData = t3.row(this).data();
    var rowNumber = tableData[0];
    var itemName = tableData[1];
    var batchNumber = tableData[2];
    var customerName = tableData[3];
    var quantityNeeded = tableData[4];
    var unitPrice = tableData[5];
    var discount = tableData[6];

    // Set input field values
    $('.txtNameNewOrderItem').val(itemName);
    $('.txtNameNewOrderCustomer').val(customerName);
    $('.txtQuantityNeeded').val(quantityNeeded);
    $('.txtNewOrderUnitPrice').val(unitPrice);
    $('.txtNewOrderDiscount').val(discount);

    // Disable Add button and enable Update button
    $('#add3').prop('disabled', true);
    $('.btnUpd').prop('disabled', false);
});

// Event listener for Update button click
$('.btnUpd').click(function () {
    var itemName = $('.txtNameNewOrderItem').val();
    var customerName = $('.txtNameNewOrderCustomer').val();
    var quantityNeeded = $('.txtQuantityNeeded').val();
    var unitPrice = $('.txtNewOrderUnitPrice').val();
    var discount = $('.txtNewOrderDiscount').val();

    var selectedIndex = t3.row('.selected').index();
    var updatedOrderObject = {
        Item_Name: itemName,
        Batch_Number: selectedValue,
        Customer_Name: customerName,
        Quantity_Needed: quantityNeeded,
        Unit_Price: unitPrice,
        Discounts: discount
    };

    arr4[selectedIndex] = updatedOrderObject;

    t3.row('.selected').data([
        selectedIndex + 1,
        updatedOrderObject['Item_Name'],
        updatedOrderObject['Batch_Number'],
        updatedOrderObject['Customer_Name'],
        updatedOrderObject['Quantity_Needed'],
        updatedOrderObject['Unit_Price'],
        updatedOrderObject['Discounts']
    ]);

    t3.draw(false);

    // Clear input fields after updating
    $('.txtNameNewOrderItem').val('');
    $('.txtNameNewOrderCustomer').val('');
    $('.txtQuantityNeeded').val('');
    $('.txtNewOrderUnitPrice').val('');
    $('.txtNewOrderDiscount').val('');

    // Enable Add button and disable Update button
    $('#add3').prop('disabled', false);
    $('.btnUpd').prop('disabled', true);
});

// Event listener for Delete button click
$('.btnDel').click(function () {
    var selectedIndex = t3.row('.selected').index();
    arr4.splice(selectedIndex, 1);

    t3.row('.selected').remove().draw(false);

    // Clear input fields after deleting
    $('.txtNameNewOrderItem').val('');
    $('.txtNameNewOrderCustomer').val('');
    $('.txtQuantityNeeded').val('');
    $('.txtNewOrderUnitPrice').val('');
    $('.txtNewOrderDiscount').val('');

    // Enable Add button and disable Update button
    $('#add3').prop('disabled', false);
    $('.btnUpd').prop('disabled', true);
});

$(document).ready(function () {
    $('#example6').DataTable({
        pageLength: 5,
        lengthMenu: [[5, 10, 25, 50, -1], ['5', '10', '25', '50', 'All']]
    });

    // Call the functions to populate suggestions and batch numbers
    populateCustomerSuggestions();

    populateItemSuggestions();

    $('.txtNameNewOrderItem').on('input', function() {
        var itemName = $(this).val();
        populateBatchNumbers(itemName);
    });
});
