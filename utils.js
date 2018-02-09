var glob = require('glob');
var path = require('path');
module.exports={
	getMutilEntry: function(pattern){
		var entrys = {};
		glob.sync(pattern, {nodir: true}).forEach(function(entry){
			var basename = path.basename(entry,path.extname(entry));
			var tmp = entry.split('/');
			if(tmp.length==4 || tmp[tmp.length-2]+'.js'==tmp[tmp.length-1]){
				entrys[basename] = entry;
			}
		});
		return entrys;
	}
}