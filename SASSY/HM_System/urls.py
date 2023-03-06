from django.urls import path
from .views import RegisterView, LoginView, UserView, LogoutView, DoctorView, isAuth, PatientStayView, CreateUserView,InsertPatientView,InsertStayView,ConfirmAppointmentView,GetAdmittedView, GetUserProfile
urlpatterns = [
    path('home', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('user', UserView.as_view()),
    path('logout', LogoutView.as_view()),
    path('users/doctor', DoctorView.as_view()),
    path('isAuth', isAuth.as_view()),
    path('patientStayView', PatientStayView.as_view()),
    path('create-user', CreateUserView.as_view()),
    path('registerPatient', InsertPatientView.as_view()),
    path('admitPatient', InsertStayView.as_view()),
    path('appointment,Patient',ConfirmAppointmentView.as_view()),
    path('patientstay',GetAdmittedView.as_view()),
    path('list-users', GetUserProfile.as_view())
    # path('dischargePatient',)
]