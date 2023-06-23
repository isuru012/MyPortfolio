$(document).ready(function() {
    var rowNumber2 = 1;
    var arr = [];
    var t;
    var selectedRow = null;

    $('#add1').click(function() {
        var cusName = $('.txtName').val();
        var cusAddress = $('.txtAddress').val();
        var cusPhoneNumber = $('.txtPhoneNumber').val();

        let customerObject = {
            name: cusName,
            address: cusAddress,
            phone: cusPhoneNumber
        };

        arr.push(customerObject);

        t = $('#example2').DataTable();
        t.row.add([rowNumber2, customerObject['name'], customerObject['address'], customerObject['phone']]).draw(false);

        rowNumber2++;
    });

    $('#example2').DataTable({
        pageLength: 5,
        lengthMenu: [
            [5, 10, 25, 50, -1],
            ['5', '10', '25', '50', 'All']
        ]
    });

    // Function to populate the text fields with data from the selected row
    function populateFields(row) {
        var name = $(row).find('td:eq(1)').text();
        var address = $(row).find('td:eq(2)').text();
        var phoneNumber = $(row).find('td:eq(3)').text();

        $('.txtName').val(name);
        $('.txtAddress').val(address);
        $('.txtPhoneNumber').val(phoneNumber);
    }

    // Event handler for table row selection
    $(document).on('click', '#example2 tbody tr', function() {
        $('#example2 tbody tr').removeClass('selected');
        $(this).addClass('selected');

        populateFields(this);
        $('.btnUpd').prop('disabled', false);
        $('.btnAdd').prop('disabled', true);

        selectedRow = this;
    });

    // Event handler for update button click
    $(document).on('click', '.btnUpd', function() {
        if (selectedRow) {
            var name = $('.txtName').val();
            var address = $('.txtAddress').val();
            var phoneNumber = $('.txtPhoneNumber').val();

            $(selectedRow).find('td:eq(1)').text(name);
            $(selectedRow).find('td:eq(2)').text(address);
            $(selectedRow).find('td:eq(3)').text(phoneNumber);

            // Update the corresponding item in the arr array
            var rowIndex = t.row(selectedRow).index();
            arr[rowIndex].name = name;
            arr[rowIndex].address = address;
            arr[rowIndex].phone = phoneNumber;

            $(selectedRow).removeClass('selected');
            $('.btnUpd').prop('disabled', true);
            $('.btnAdd').prop('disabled', false);

            $('.txtName').val('');
            $('.txtAddress').val('');
            $('.txtPhoneNumber').val('');

            selectedRow = null;
        }
    });

    // Event handler for delete button click
    $(document).on('click', '.btnDel', function() {
        if (selectedRow) {
            var rowIndex = t.row(selectedRow).index();

            // Remove the selected row from the table
            t.row(selectedRow).remove().draw();

            // Remove the corresponding item from the arr array
            arr.splice(rowIndex, 1);

            $(selectedRow).removeClass('selected');
            $('.btnUpd').prop('disabled', true);
            $('.btnAdd').prop('disabled', false);

            $('.txtName').val('');
            $('.txtAddress').val('');
            $('.txtPhoneNumber').val('');

            selectedRow = null;
        }
    });
});
