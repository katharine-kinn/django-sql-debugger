$(document).ready(function(){

    function createRespBox(path, data) {

        var reqCount = $(".sql_debugger_request_box").length + 1;
        var id = 'sql_debugger_request_' + reqCount;
        var html = '<div id="' + id + '" class="sql_debugger_request_box"> \
            <div class="sql_debugger_request_box_header">' + reqCount + '. ' + path + ' Requests count: ' + data.length +'</div> \
            <div class="sql_debugger_request_box_contents"></div> \
        </div>';        
        var rbox = $("#sql_debugger_view").append(html);    
        var rb = rbox.find(".sql_debugger_request_box_contents").last();

        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            var sbox_h = '<div class="sql_debugger_sql_box"></div>';
            var sbox = rb.append(sbox_h);
            var sql = '<div>' + d.sql + '</div>';

            sbox.append(sql);
            var traceback_h = '<div class="sql_debugger_traceback"><div class="sql_debugger_traceback_header">Traceback</div>\
                <div class="sql_debugger_traceback_contents"></div></div>';
            var tbh = sbox.append(traceback_h).find(".sql_debugger_traceback_contents").eq(i);
            for (var j = 0; j < d.tb.length; j++) {
                var tba = d.tb[j];
                var cfile = '<span class="sql_debugger_traceback_caller_file">' + tba[0] + ': </span>'; 
                var cmethod = '<span class="sql_debugger_traceback_caller_method">' + tba[2] + ' (' + tba[1] + ')</span>';
                var cfunc = '<span class="sql_debugger_traceback_called_func">' + tba[3]+ '</span>';
                tbh.append('<div>' + cfile + cmethod + '<br>' + cfunc + '</div>');  
            };
        };

        $("#" + id).find(".sql_debugger_request_box_header").click(function(){
            $(this).parent().find(".sql_debugger_request_box_contents").toggle(0);
        });

        $("#" + id).find(".sql_debugger_traceback").click(function(){
            $(this).find(".sql_debugger_traceback_contents").toggle(0);
        })
    }

    $("#sql_debugger_button").click(function(){
        $("#sql_debugger_view").toggle(200);
    });

    $(document).ajaxComplete(function(event, request){
        resp = request.responseJSON;
        createRespBox(resp.path, resp.sql_debug_info);
        var rcount = parseInt($("#sql_debugger_requests_count").text());
        $("#sql_debugger_requests_count").text(rcount + 1);
    });

    function onCreate() {
        var path = $("#sql_debugger_rq_path_info").text();
        var rdataJSON = $("#sql_debugger_rq_sql_info").text();
        var rdata = JSON.parse(rdataJSON);
        createRespBox(path, rdata);
        var rcount = parseInt($("#sql_debugger_requests_count").text());
        $("#sql_debugger_requests_count").text(rcount + 1);
    }

    onCreate();

});

