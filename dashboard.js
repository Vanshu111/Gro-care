function showTable() {
    // alert('inside')
    var url="http://localhost:134/data";
    fetch(url)
    .then((res) => res.json())
    .then((data) => data.map((myApi) => {
        // console.log(myApi.name);
        var element = `
        <tr>
                <td>${myApi.name}</td>
                <td>${myApi.max_wt_g}</td>
                <td>${myApi.curr_wt_g}</td>
                <td class="status">${myApi.quant_percent}</td> 
                <td>${myApi.status}</td>
                <td class="indicator-box" ><div style="background-color:yellow; width:60%;" class="indicator">
                    <p class="display">${myApi.quant_percent}%</p>
                </div></td>
        </tr>`;
        
        $('#myTable').append(element);
    } ))
    }

showTable();

//add item button action

btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');

function addEntry() {
    //form ki values lo from .value method
    //submit pe event listener
    //aur add kardo
}

