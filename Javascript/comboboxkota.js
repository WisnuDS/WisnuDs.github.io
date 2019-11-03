let dataKota;
$.get('../indonesia.json', async function(data) {
    dataKota = await data;
}, 'json')


function comboboxkota(){
    if (typeof dataKota == 'undefined'){

    }
    let indexSelected = $('#ddlProvinsi').val();
    let listDataKota = dataKota[indexSelected]
    $('#ddlKota').find('option').remove().end().append('<option value="0">- Pilih Kota -</option>')
    $.each(listDataKota, (key, kota) => {
        $.each(kota, (id, val) => {
            $('#ddlKota').append(`<option value="${val}">${val}</option>`)
        })
    })
}
