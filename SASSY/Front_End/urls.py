from django.urls import path
from .views import index
urlpatterns = [
    path('', index),
    path("<path:path>", index)
    # path('front-desk-operator/<path:path>', index),
    # path('data-entry-operator/<path:path>', index),
    # path('doctor/<path:path>', index),
    # path('administrator/<path:path>', index),
]
