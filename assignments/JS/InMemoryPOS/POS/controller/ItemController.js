
var arr2 = [];

$(document).ready(function() {
    var rowNumber = 1;
    var t1;
    var selectedRow = null;

    $('#add2').click(function() {
        var itemName = $('.txtNameItem').val();
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

    $('#example3').DataTable({
        pageLength: 5,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            ['5', '10', '25', '50', 'All']
        ]
    });

    // Function to populate the text fields with data from the selected row
    function populateFields(row) {
        var itemName = $(row).find('td:eq(1)').text();
        var batchNumber = $(row).find('td:eq(2)').text();
        var qtyOnHand = $(row).find('td:eq(3)').text();
        var unitPrice = $(row).find('td:eq(4)').text();
        var discount = $(row).find('td:eq(5)').text();

        $('.txtNameItem').val(itemName);
        $('.txtBatch').val(batchNumber);
        $('.txtQuantity').val(qtyOnHand);
        $('.txtUnit').val(unitPrice);
        $('.txtDiscount').val(discount);
    }

    // Event handler for table row selection
    $(document).on('click', '#example3 tbody tr', function() {
        $('#example3 tbody tr').removeClass('selected');
        $(this).addClass('selected');

        populateFields(this);
        $('.btnUpd').prop('disabled', false);
        $('.btnAdd').prop('disabled', true);

        selectedRow = this;
    });

    // Event handler for update button click
    $(document).on('click', '.btnUpd', function() {
        if (selectedRow) {
            var itemName = $('.txtNameItem').val();
            var batchNumber = $('.txtBatch').val();
            var qtyOnHand = $('.txtQuantity').val();
            var unitPrice = $('.txtUnit').val();
            var discount = $('.txtDiscount').val();

            $(selectedRow).find('td:eq(1)').text(itemName);
            $(selectedRow).find('td:eq(2)').text(batchNumber);
            $(selectedRow).find('td:eq(3)').text(qtyOnHand);
            $(selectedRow).find('td:eq(4)').text(unitPrice);
            $(selectedRow).find('td:eq(5)').text(discount);

            var rowIndex = t1.row(selectedRow).index();
            arr2[rowIndex].Item_Name = itemName;
            arr2[rowIndex].Batch_Number = batchNumber;
            arr2[rowIndex].Quantity_On_Hand = qtyOnHand;
            arr2[rowIndex].Unit_Price = unitPrice;
            arr2[rowIndex].Discounts = discount;

            $(selectedRow).removeClass('selected');
            $('.btnUpd').prop('disabled', true);
            $('.btnAdd').prop('disabled', false);

            $('.txtNameItem').val('');
            $('.txtBatch').val('');
            $('.txtQuantity').val('');
            $('.txtUnit').val('');
            $('.txtDiscount').val('');

            selectedRow = null;
        }
    });

    // Event handler for delete button click
    $(document).on('click', '.btnDel', function() {
        if (selectedRow) {
            var rowIndex = t1.row(selectedRow).index();

            t1.row(selectedRow).remove().draw();
            arr2.splice(rowIndex, 1);

            $(selectedRow).removeClass('selected');
            $('.btnUpd').prop('disabled', true);
            $('.btnAdd').prop('disabled', false);

            $('.txtNameItem').val('');
            $('.txtBatch').val('');
            $('.txtQuantity').val('');
            $('.txtUnit').val('');
            $('.txtDiscount').val('');

            selectedRow = null;
        }
    });
});
