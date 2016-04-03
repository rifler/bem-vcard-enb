(function () {
    var counter = 'yaCounter20642695';

    document.addEventListener('yacounter20642695inited', function () {
        var result = {
            pageleave_support: {}
        };

        if ('onpagehide' in window) {
            result.pageleave_support.pagehide = 1;
        }

        if ('onbeforeunload' in window) {
            result.pageleave_support.beforeunload = 1;
        }

        window[counter].params(result);
    });

    window.addEventListener('beforeunload', function () {
        window[counter] && window[counter].params({
            pageleave: 'beforeunload'
        });
    });

    window.addEventListener('pagehide', function () {
        window[counter] && window[counter].params({
            pageleave: 'pagehide'
        });
    });
})();
