from django.urls import path, re_path
from .views import index

urlpatterns = [
    path('', index),
    # path("<path:path>", index)
    re_path(r'front-desk-operator/.*$', index),
    re_path(r'data-entry-operator/.*$', index),
    re_path(r'doctor/.*$', index),
    re_path(r'administrator/.*$', index),
]
