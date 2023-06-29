
var arr = [];
$(document).ready(function() {
    var rowNumber2 = 1;

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

    /*const inputName = document.querySelector("#txtName");
    const inputAddress = document.querySelector("#txtAddress");
    const inputPhoneNumber = document.querySelector("#txtPhoneNumber");

    inputName.addEventListener("input", function() {
        const value = inputName.value;
        const regex = new RegExp("^[a-zA-Z ]+$");

        if (!regex.test(value)) {
            inputName.style.borderColor = "red";
        } else {
            inputName.style.borderColor = "black";
        }
    });

    inputAddress.addEventListener("input", function() {
        const value = inputAddress.value;
        const regex = new RegExp("^[a-zA-Z0-9 ,.-]+$");

        if (!regex.test(value)) {
            inputAddress.style.borderColor = "red";
        } else {
            inputAddress.style.borderColor = "black";
        }
    });

    inputPhoneNumber.addEventListener("input", function() {
        const value = inputPhoneNumber.value;
        const regex = new RegExp("^(091|071|077|076|075|070)[0-9]{7}$");

        if (!regex.test(value)) {
            inputPhoneNumber.style.borderColor = "red";
        } else {
            inputPhoneNumber.style.borderColor = "black";
        }
    });
*/
    /*function validateName() {
        var nameInput = $('.txtName');
        var name = nameInput.val();
        var namePattern = /^[A-Za-z\s]+$/;
        var isValidName = namePattern.test(name);

        if (isValidName) {
            nameInput.removeClass("invalid");
        } else {
            nameInput.addClass("invalid");
        }
    }

    // Function to validate the address input
    function validateAddress() {
        var addressInput = $('.txtAddress');
        var address = addressInput.val();
        var addressPattern = /^[A-Za-z0-9\s]+$/;
        var isValidAddress = addressPattern.test(address);

        if (isValidAddress) {
            addressInput.removeClass("invalid");
        } else {
            addressInput.addClass("invalid");
        }
    }

    // Function to validate the phone number input
    function validatePhoneNumber() {
        var phoneNumberInput = $('.txtPhoneNumber');
        var phoneNumber = phoneNumberInput.val();
        var phoneNumberPattern = /^(091|071|077|076|075|070)\d{7}$/;
        var isValidPhoneNumber = phoneNumberPattern.test(phoneNumber);

        if (isValidPhoneNumber) {
            phoneNumberInput.removeClass("invalid");
        } else {
            phoneNumberInput.addClass("invalid");
        }
    }

    // Add event listeners for real-time validation
    $('.txtName').on('input', validateName);
    $('.txtAddress').on('input', validateAddress);
    $('.txtPhoneNumber').on('input', validatePhoneNumber);*/

    // Add click event listener for the "Add" button
    $('#add1').click(function () {
        var nameInput = $('.txtName');
        var addressInput = $('.txtAddress');
        var phoneNumberInput = $('.txtPhoneNumber');

        var name = nameInput.val();
        var address = addressInput.val();
        var phoneNumber = phoneNumberInput.val();

        // Regular expressions for validation
        var namePattern = /^[A-Za-z\s]+$/;
        var addressPattern = /^[A-Za-z0-9\s]+$/;
        var phoneNumberPattern = /^(091|071|077|076|075|070)\d{7}$/;

        // Validate name, address, and phone number
        var isValidName = namePattern.test(name);
        var isValidAddress = addressPattern.test(address);
        var isValidPhoneNumber = phoneNumberPattern.test(phoneNumber);

        if (isValidName && isValidAddress && isValidPhoneNumber) {
            // Create a new row in the table
            // ...

            // Clear input fields
            nameInput.val("");
            addressInput.val("");
            phoneNumberInput.val("");

            // Remove red highlighting if previously applied
            nameInput.removeClass("invalid");
            addressInput.removeClass("invalid");
            phoneNumberInput.removeClass("invalid");
        } else {
            // Apply red highlighting to invalid input fields
            if (!isValidName) {
                nameInput.addClass("invalid");
            }
            if (!isValidAddress) {
                addressInput.addClass("invalid");
            }
            if (!isValidPhoneNumber) {
                phoneNumberInput.addClass("invalid");
            }
            alert("Please enter valid input for all fields.");
        }
    });
});





