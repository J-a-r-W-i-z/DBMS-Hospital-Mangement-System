from django.urls import path
from .views import RegisterView, LoginView, UserView, LogoutView, DoctorView, isAuth, temp
urlpatterns = [
    path('home', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('users/doctor', DoctorView.as_view()),
    path('isAuth', isAuth.as_view()),
    path('temp', temp.as_view())
]