function initialize() {

    var request = $.ajax({
        url: window.location.protocol + "//" + window.location.host + "/viewMyLeaves",
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        //data: ,
        success: function(result) {
            console.log(result);
            var table = document.getElementById("fviewLeaves");
            for (var i = 0; i < result.length; i++) {
                var row = table.insertRow(i);
                var cell0 = row.insertCell(0);
                var cell1 = row.insertCell(1);
                var cell2 = row.insertCell(2);
                var cell3 = row.insertCell(3);
                var cell4 = row.insertCell(4);
               var cell5 = row.insertCell(5);
                var cell6 = row.insertCell(6);

                let isAcceptedvalue="";
                if(result[i]["isAccepted"]){
                    isAcceptedvalue=result[i]["isAccepted"];
                }else{
                    isAcceptedvalue="Pending";
                }


                cell0.innerHTML = result[i]["lrId"];
                cell1.innerHTML = result[i]["lrEmployeeid"];
                cell2.innerHTML = result[i]["lrDuration"];
                cell3.innerHTML = result[i]["lrType"];
                cell4.innerHTML = result[i]["leaveRequestDate"];
                cell5.innerHTML = result[i]["leaveEndDate"];
                cell6.innerHTML = isAcceptedvalue;


            }
        }
    });
}

function postData() {
   // confirm(document.getElementById("femployeeID").value);
    //var employeeID = document.getElementById("femployeeID").value;
    var leaveDuration = document.getElementById("fLeaveDuration").value;
    var leaveTypeString = document.getElementById("fleaveTypeID").value;
    var leaveStartdate = new Date(document.getElementById("fLeaveStartdate").value).getTime();
    var leaveEnddate = new Date(document.getElementById("fleaveEndDate").value).getTime();



    console.log('1');
    var request = $.ajax({
        url: window.location.protocol + "//" + window.location.host + "/getEmployeeLeaves",
        type: "POST",
        contentType: 'application/json; charset=utf-8',
        // data: "hellow",
        data: JSON.stringify({
            //'lr_EmployeeID': employeeID,
            'lrDuration': leaveDuration,
            'lrType': leaveTypeString,
            'leaveRequestDate': leaveStartdate,
            'isAccepted' : null,
            'leaveEndDate': leaveEnddate
        }),
        success: function(result) {
            console.log("This is console");
            console.log(result);
            // if(result.error == null){
            if(result.error==null){
                // var empcode = document.getElementById('femployeeID');
                // empcode.value = result.employeeID;
                //document.getElementById('femployeeID').disabled = true;
                document.getElementById('fLeaveDuration').disabled = true;
                document.getElementById('fleaveTypeID').disabled = true;
                document.getElementById('fLeaveStartdate').disabled = true;
                document.getElementById('fleaveEndDate').disabled = true;
                var errordiv = document.getElementById('div-error-info');
                errordiv.innerHTML = "<p style='color:Green;'>Insert Successfully</p>;";
            } else{
                var errordiv = document.getElementById('div-error-info');
                errordiv.innerHTML = "<p style='color:red;'>"+result.error+'</p>;';
            }
        }, error: function(err) {
            console.log(err);
        }
    });
    //
    // request.fail(function(jqXHR, textStatus) {
    //     confirm("Request failed: " + textStatus);
    // });
}