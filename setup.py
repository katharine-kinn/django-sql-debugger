import os
from setuptools import setup

with open(os.path.join(os.path.dirname(__file__), 'README.rst')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='django-sql-debugger',
    version='0.1',
    packages=['sql_debugger'],
    include_package_data=True,
    license='MIT License', 
    description='Django app that helps controlling database requests count',
    long_description=README,
    url='https://github.com/katharine-kinn/django-sql-debugger',
    download_url = 'https://github.com/katharine-kinn/django-sql-debugger/tarball/0.1',
    author='Catherine',
    author_email='katherine.goncharova@gmail.com',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License', 
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        # Replace these appropriately if you are stuck on Python 2.
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
    ],
)