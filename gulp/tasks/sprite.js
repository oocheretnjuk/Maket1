"use strict";

module.exports = function() {
	$.gulp.task('sprite', function(cb) {
		var spriteData = $.gulp.src('./source/images/*.png')
		.pipe($.gp.spritesmith({
			imgName: 'sprite.png',
			cssName: 'sprite.scss'
		}));

	spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img/sprite'));
	spriteData.css.pipe($.gulp.dest($.config.root + '/assets/css'));
	cb();
	});
};

