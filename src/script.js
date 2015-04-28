'use strict';

var $ = require('jquery');

var modal = module.exports = {};
var $modal, $modalBg, modalOpen;
var ESCAPE_KEY = 27;

modal.open = function openModal(contents, animate) {
	if (!$modal) {
		this._createModal();
	}

	modalOpen = true;

	$modal.html(contents);
	var $animate = $modal.add($modalBg);

	if (typeof animate !== 'boolean' || animate) {
		$animate.fadeIn();
	}

	return $animate;
};

modal.close = function closeModal(animate) {
	modalOpen = false;

	var $animate = $modal.add($modalBg);

	if (typeof animate !== 'boolean' || animate) {
		$animate.fadeOut();
	}

	return $animate;
};

modal._createModal = function createModal() {
	$modal = $('<div />').addClass('lmn-modal').appendTo(document.body);
	$modalBg = $('<div />').addClass('lmn-modal-bg').appendTo(document.body);

	$modalBg.on('click', function () {
		modal.close();
	});

	$(document).on('keydown', function (e) {
		if (e.keyCode === ESCAPE_KEY && modalOpen) {
			e.preventDefault();
			modal.close();
		}
	});
};
