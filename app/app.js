$(document).ready(function () {
  app.initialized()
    .then(function (_client) {
      var client = _client;
      
      var explorer = window.Kloudless.explorer({
        // Explorer Initialization options here.
        app_id: "szWG8Xbec3v7Y_CRPKuPz_0ltKt0Ra991ZaDaqxVgrgtA0nB",
        link: true
      });


      // When a user successfully selects or saves a file
      explorer.on('success', function (files) {
        // files is an array of JS objects that contain file metadata.
        console.log('Successfully selected files: ', files);
        var fileLink = files[0].link;
        console.log('file link:', fileLink);
        client.interface.trigger('insertElement', {
          id: 'ticketContent',
          content: '<div><a href="' + fileLink + '">Append File</a></div>'
        })
      });

      // launch chooser
      explorer.choose();
    });
});
