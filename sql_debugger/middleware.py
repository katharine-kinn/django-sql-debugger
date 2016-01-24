import json
from django.db import connections, connection
from django.conf import settings

class SQLDebugMiddleware(object):

    def process_response(self, request, response):

        if not settings.DEBUG:
            return response

        if request.is_ajax(): #TODO: if not JSON?
            try:
                resp_d = json.loads(response.content)
                resp_d['path'] = request.get_full_path()
                resp_d['sql_debug_info'] = connection.queries
                response.content = json.dumps(resp_d)
            except Exception, e:
                pass       

        return response
