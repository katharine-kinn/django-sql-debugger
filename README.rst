=====
SQL Debugger
=====

.. image:: https://badge.fury.io/py/django-sql-debugger.svg
    :target: https://badge.fury.io/py/django-sql-debugger

django-sql-debugger is an app that helps controlling number of SQL during your HTTPRequests, including AJAX.
Based on custom database backend, it currently supports only MySQL.

*Warning: the app currently works under Django 1.6.5 and is not tested against other versions*

Installation
------------

You can install the app with PyPi::
    
    pip install django-sql-debugger


Quick start
-----------

1. Add "sql_debugger" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = (
        ...
        'sql_debugger',
    )

2. To turn on SQL Debugger add the following to your settings.py file::

    SQL_DEBUGGER_SHOW_TRACEBACK = True

Also make sure DEBUG is set to True. Do not use this on production server!

Usage
-----

1. To add visualization to your page include SQL Debugger template there::

    {% include 'sql_debugger/base.html' %}


