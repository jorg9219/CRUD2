var tabla;

function init(){
        $("#producto_form").on("submit",function(e){
            guardaryeditar(e);
        });

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

function guardaryeditar(e){
  e.preventDefault();
  var formData = new FormData($("#producto_form")[0]);
  $.ajax({
    url: "../../controller/producto.php?op=guardarymodificar",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: function(datos){
      console.log(datos);
      $('#producto_form')[0].reset();
      $("#modalmantenimiento").modal('hide');
      $('#producto_data').DataTable().ajax.reload();

      swal.fire(
        'Registro!',
        'El registro quedo completado',
        'success'
       )
        
       }
    });


}

function editar(prod_id){
    console.log(prod_id);

}

function eliminar(prod_id){

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swal.fire({
        title: 'crud',
        text: "Desea Eliminar el Registro",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

            $.post("../../controller/producto.php?op=eliminar",{prod_id:prod_id},function (data){

            });
        
            $('#producto_data').DataTable().ajax.reload();

            swal.fire(
            'Eliminado!',
            'El Archivo se ha Eliminado',
            'success'
          )
        }
      })
    
}

$(document).on("click","#btnnuevo", function(){
   $('#modalmantenimiento').modal('show');
   $('#mdltitulo').html('Nuevo Registro');
});

init();