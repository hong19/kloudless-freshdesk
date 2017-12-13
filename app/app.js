$(document).ready(function () {
  app.initialized()
    .then(function (_client) {
      var client = _client;

      // initialize file-explorer
      var explorer = window.Kloudless.explorer({
        // Explorer Initialization options here.
        app_id: "szWG8Xbec3v7Y_CRPKuPz_0ltKt0Ra991ZaDaqxVgrgtA0nB",
        link: true,
        multiselect: true
      });


      // When a user successfully selects or saves a file
      explorer.on('success', function (files) {
        // files is an array of JS objects that contain file metadata.
        console.log('Successfully selected files: ', files);
        appendFiles(client, files);
      });

      // when file-explorer close
      explorer.on('close', function () {
        // set time out to wait for close animation completion
        window.setTimeout(explorer.choose.bind(explorer), 300);
      });

      // launch chooser
      explorer.choose();
    });
});


/**
 * Append link of files to tickets
 *
 * @param {object} client - freshdesk sdk client
 * @param {array} files - files return by kloudless file-explorer chooser
 */
function appendFiles(client, files) {
  var filesHtml = '';
  for (var i = 0 ; i < files.length ; i++) {
    filesHtml += '<div><a href="' + files[i].link + '">' + files[i].name + '</a></div>';
  }
  // insert the link to ticket editor
  client.interface.trigger('insertElement', {
    id: 'ticketContent',
    content: filesHtml
  })
}