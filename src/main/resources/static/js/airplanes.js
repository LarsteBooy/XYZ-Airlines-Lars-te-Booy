var _restEndpoint = '/api/airplanes/';
var _tableElement = $('#airplaneTable');
var _deleteElement = $('#btndelete');

// Define Modal
var _modalElement = $('#entryModal');

// Define add airplane Button
var _airplaneButton = $('#addAirplaneBtn');

var _dataTable = _tableElement.DataTable({
    ajax: {
        url: _restEndpoint,
        dataSrc: "",
        type: "GET",
    },
});


_airplaneButton.on('click', function(){
    openModalForObject({},true);
});


_tableElement.on('click', 'tr', function () {
    var data = _dataTable.row(this).data();

    if(!data) {
        console.error('unable to retrieve data');
        return;
    }

    $.get(_restEndpoint + data.id, function(data) {
        if(!data) return;

        openModalForObject(data, false);
    });
});

function openModalForObject(data,newEntry) {
    var _nameField = _modalElement.find('#name');
    var _fuelField = _modalElement.find('#fuel');
    var _currentAirportField = _modalElement.find('#currentAirport');
    var _passengerField = _modalElement.find('#passengers');
    var _planeTypeField = _modalElement.find('#planeType');

    if(!newEntry){
        _nameField.val(data.name);
        _fuelField.val(data.fuel);
        _currentAirportField.val(data.currentAirport);
        _passengerField.val(data.passengers);
        _planeTypeField.val(data.planeType);
    }else{
        _nameField.val("");
        _fuelField.val("");
        _currentAirportField.val("");
        _passengerField.val("");
        _planeTypeField.val("");
    }

    if(newEntry){
        _modalElement.find('#modal-title').html('Add Airplane')
    }else{
        _modalElement.find('#modal-title').html('Edit Airplane');
    }

    _modalElement.find('#btnsubmit')
    .off('click')
    .on('click', function() {


        if(newEntry){
            var saveData = {
                name: _nameField.val(),
                fuel: _fuelField.val(),
                currentAirport: _currentAirportField.val(),
                passengers: _passengerField.val(),
                planeType: _planeTypeField.val()

            };
        }else{
            var saveData = {
                id: data.id,
                name: _nameField.val(),
                fuel: _fuelField.val(),
                currentAirport: _currentAirportField.val(),
                passengers: _passengerField.val(),
                planeType: _planeTypeField.val()
            };
        }


//        if(fuel > 0 && fuel <= 5){
            $.ajax({
                contentType : 'application/json',
                url: _restEndpoint,
                type: 'post',
                data: JSON.stringify(saveData),
                success: function() {
                    _modalElement.modal('hide');
                    reloadData();
                },
            });
//        }
//        else {
//            alert('A plane can hold a maximum of 5 tons fuel')
//        }

    });

    if(!newEntry){
        _modalElement.find('#btndelete').show()
        .off('click')
        .on('click', function() {
            var result = confirm('This airplane will be removed, this action can not be undone');

            if(result) {
                $.ajax({
                    contentType : 'application/json',
                    url: _restEndpoint + data.id,
                    type: 'delete',
                    success: function() {
                        _modalElement.modal('hide');
                        reloadData();
                    },
                });
            }
        });
    }
    _modalElement.modal('show');
    if(newEntry){
        _deleteElement.hide();
    }else{
        _deleteElement.show();
    }
}

function reloadData() {
    _dataTable.ajax.reload();
}
