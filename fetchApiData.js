$(document).ready(function(){
  $.ajax({
    url: 'https://api.publicapis.org/entries',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      var entry = data.entries[0]; // Tomamos el primer objeto de la respuesta

      // Actualizar cada campo individualmente
      $('label[for="Api"]').text('Api: ' + entry.API);
      $('label[for="Descripcion"]').text('Descripción: ' + entry.Description);
      $('label[for="Auth"]').text('Auth: ' + (entry.Auth ? entry.Auth : 'Ninguno'));
      $('label[for="HTTPS"]').text('HTTPS: ' + entry.HTTPS);
      $('label[for="Cors"]').text('Cors: ' + entry.Cors);
      $('label[for="Link"]').html('Link: <a href="' + entry.Link + '" target="_blank">Acceder a la API</a>');
      $('label[for="Category"]').text('Category: ' + entry.Category);
    },
    error: function(xhr, status, error) {
      console.error('Error al cargar los datos de la API: ' + error);
    }
  });
});
