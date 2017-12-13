$(document).ready(function () {
  app.initialized()
    .then(function (_client) {
      var client = _client;

      // initialize file-explorer
      var explorer = window.Kloudless.explorer({
        // Explorer Initialization options here.
        app_id: "szWG8Xbec3v7Y_CRPKuPz_0ltKt0Ra991ZaDaqxVgrgtA0nB",
        link: true
      });


      // When a user successfully selects or saves a file
      explorer.on('success', function (files) {
        // files is an array of JS objects that contain file metadata.
        console.log('Successfully selected files: ', files);
        // only single selection
        var fileLink = files[0].link;
        // insert the link to ticket editor
        client.interface.trigger('insertElement', {
          id: 'ticketContent',
          content: '<div><a href="' + fileLink + '">Append File</a></div>'
        })
      });

      // bind a button to launch file-explorer 
      explorer.choosify($("#choose-file-btn"));
      // launch chooser
      explorer.choose();
    });
});
