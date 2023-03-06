from django.urls import path
from .views import *

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
    path('appointmentPatient',ConfirmAppointmentView.as_view()),
    path('patientstay',GetAdmittedView.as_view()),
    path('list-users', GetUserProfile.as_view()),
    path('delete-user', DeleteUserView.as_view()),
    path('list-patients', GetPatientsView.as_view()),
    path('dischargePatient',DischargePatientView.as_view()),
    path('list-appointments', UpcomingAppointments.as_view())
]