/**
 * Created by mac on 8/8/17.
 */

var demoPagerWidget = {
    init: function (options) {
        if (options.pageSizeParam == 'undefined' || !(options.pageSizeParam)){
            return;
        }

        if (options.pageParam == 'undefined' || !(options.pageParam)){
            return;
        }

        if (options.url == 'undefined' || !(options.url)){
            return;
        }

        this.bindEvent(options.pageSizeParam, options.pageParam, options.url)
    },
    bindEvent: function (pageSizeParam, pageParam, url) {
        $('input[name = "' + pageParam + '"]').on('keydown', function (evt) {
            if (evt.which == 13){
                var targetPage = $(this).val();

                var pattern = new RegExp("\(&" + pageParam + "=\)\\d+","gi");
                var newUrl = url.replace(pattern, "$1"+targetPage);
                window.location.href = newUrl;
            }

        });
        
        $('select[name="' + pageSizeParam + '"]').on('change',function () {
            var selectedPageSize = $(this).find('option:selected').val();

            var pattern = new RegExp("\(&" + pageParam + "=\)\\d+","gi");
            var newUrl = url.replace(pattern, "$1"+targetPage);
            window.location.href = newUrl;
            
        });

    }
};