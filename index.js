const manifestFactory = require("./lib/manifest");

// a mock for a config, a package.json hash or command line arguments
const directives = [
    "test-project/index.html:2:test-project",
    "test-project/script/test.js:1:test-project/script",
    "test-project/media/alphabet-arts-and-crafts-blog-459688.jpg:1:test-project/media",
    "test-project/css/test.css:3:test-project/css"
];

const config = {
    directives: directives,
    options: {
        // where to save the manifest, defaults to cwd
        manifestDest: "./manifest.json",
        // rename backup files  and delete generated hash files
        restore: true,
        // dry run only
        dryRun: false
    }
};

const process = () => {
    console.log("processing started");
    manifestFactory()(config.directives, config.options);
    console.log("processing completed");
};

// it all starts here
process();
