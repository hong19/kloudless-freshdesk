# Abstract
Integrate [file-explorer](https://github.com/Kloudless/file-explorer) into FreshDesk.

# Demo 
[![Demo Of Freshdesk PoC](http://img.youtube.com/vi/roBp7ECP_V0/0.jpg)](http://www.youtube.com/watch?v=roBp7ECP_V0)

# Requirements 
- node >= 6.10.0 

# Install 
[Install Freshworks CLI](https://developers.freshdesk.com/v2/docs/quick-start/#install_the_cli)

# Test
[Test Your App](https://developers.freshdesk.com/v2/docs/quick-start/#test_your_app)
 

### Folder structure explained

    .
    ├── README.md                  This file
    ├── app                        Contains the files that are required for the front end component of the app
    │   ├── app.js                 JS to render the dynamic portions of the app
    │   ├── icon.svg               Sidebar icon SVG file. Should have a resolution of 64x64px.
    │   ├── style.css              Style sheet for the app
    │   ├── template.html          Contains the HTML required for the app’s UI
    ├── config                     Contains the installation parameters and OAuth configuration
    │   ├── iparams.json           Contains the parameters that will be collected during installation
    │   └── iparam_test_data.json  Contains sample Iparam values that will used during testing
    └── manifest.json              Contains app meta data and configuration information
