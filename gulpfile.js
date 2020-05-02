const { src,dest }=require('gulp');
const exec = require ('gulp-exec');


function moveFiles(){
    return src('src/**/*')
        .pipe(dest('public', {overwrite:true}));
}

function serve(){
    return moveFiles()
        .pipe(exec('node server/server.js'));
}

exports.moveFiles=moveFiles;
exports.serve=serve;
