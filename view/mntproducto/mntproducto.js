var tabla;

function init(){

}

$(document).ready(function(){
        tabla=$('#producto_data').dataTable({
        "aProcessing": true,//Activamos el procesamiento del datatables
        "aServerSide": true,//Paginacion y filtrado realizados por el servidor
        "dom": 'Blfrtip',
                buttons: [
                    'copiar',
                    'excel',
                    'csv',
                    'pdf'
                ],
         "ajax":{
             
             url: '../../controller/producto.php?op=listar',
             type: "get",
             dataType: "json",
             error: function(e){ 
                 console.log(e.responsText);
             }
         },
         "bDestroy": true,
         "responsive": true,
         "bInfo":true,
         "iDisplayLength": 10,//Por cada 10 registros hace una paginación
         "order": [[0,"acs"]],//Ordenar (columna,orden)
         "language": {
             "sProcessing":     "Procesando...",
             "sLenghtMenu":     "Mostrar _MENU_ registros",
             "sZeroRecords":    "No se encontraron resultados",
             "sEmptyTable":     "Ningun dato disponible en esta tabla",
             "sInfo":           "Mostrando un total de _TOTAL_ registros",
             "sInfoEmpty":      "Mostrando un total de 0 registros",
             "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
             "sInfoPostFix":    "",
             "sSearch":         "Buscar:",
             "sUrl":            "",
             "sInfoThousands":  ",",
             "sLoadingRecords": "Cargando...",
             "oPaginate": {
                 "sFirts":      "Primero",
                 "sLast":       "Último",
                 "sNext":       "Siguiente",
                 "sPrevious":   "Anterior"
                 },
                 "oAria":{
                     "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
                     "sSortDescending": ":Activar para ordenar la columna de manera descendente"
                 }
         }
        }).DataTable();
});

init();