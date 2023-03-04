from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from .models import User
import jwt
import sys
import datetime
from django.db import connection

# Create your views here.


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        username = request.data['username']
        password = request.data['password']
        user_type = request.data['user_type']
        print("Here")
        user = User.objects.filter(
            username=username, user_type=user_type).first()
        if user is None:
            raise AuthenticationFailed('User Not Found!')

        if not user.check_password(password):
            print("aiufhaiwuhfnakjfeahnekf")
            raise AuthenticationFailed('Incorrect Password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)

        response.data = {
            'jwt': token
        }

        print("returning...")
        return response


class isAuth(APIView):
    def get(sef, request):
        print(request.__dict__, file=sys.stderr)
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response({
            'response': serializer.data
        })


class UserView(APIView):
    def authenticate(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            print("Err1")
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            print("Err2")
            raise AuthenticationFailed('Unauthenticated!')

        return payload

    def cursorToDict(self, cursor):
        columns = [col[0] for col in cursor.description]
        return [
            dict(zip(columns, row))
            for row in cursor.fetchall()
        ]


class DoctorView(UserView):
    def get(self, request):
        payload = UserView.authenticate(self, request)
        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response({
            'response': serializer.data
        })


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'Logout Successful'
        }
        return response


class CreateUserView(UserView):
    def post(self, request):
        print(request.data)
        print("Authenticating...")
        UserView.authenticate(self, request)

        username = request.data['username']
        password = request.data['password']
        user_type = request.data['user_type']
        print(password)
        hashed_pwd = make_password(password=password)

        # Run query to insert into Users table
        query = """INSERT INTO hm_system_user (username, password, user_type, is_superuser) VALUES (%s,%s,%s,%s);"""
        with connection.cursor() as cursor:
            cursor.execute(query, (username, hashed_pwd, user_type, '0'))

        # query="""Select username from hm_system_user where username=%s"""

        # try:
        #     with connection.cursor() as cursor:
        #         cursor.execute(query, (username))
        #         record=cursor.fetchone()
        #         eid=record[0]
        # except:
        #     #TODO
        #     return

        # GET other info from request
        # TODO
        # EmployeeId=eid
        # Name=request.data['Name']
        # Address=request.data['Address']
        # Phone=request.data['Phone']
        # Email=request.data['Email']
        # AadharId=request.data['AadharID']
        # Gender=request.data['Gender']
        # DOB=request.data['DOB']
        # Insert other details of user in appropriate table according to the user type
        # TODO
        # if user_type==1:
        #     query = """Insert into FdOperator values(%s,%s,%s,%s,%s,%s,%s,%s);"""
        # elif user_type==2:
        #     query = """Insert into DataOperator values(%s,%s,%s,%s,%s,%s,%s,%s);"""
        # elif user_type==3:
        #     query = """Insert into Doctor values(%s,%s,%s,%s,%s,%s,%s,%s);"""
        # else:
        #     query = """Insert into Administrator values(%s,%s,%s,%s,%s,%s,%s,%s);"""

        # try:
        #     with connection.cursor() as cursor:
        #         cursor.execute(query, (EmployeeId,Name,Address,Phone,Email,AadharId,Gender,DOB))
        # except:
        #     # TODO
        #     return

        response = Response()
        response.data = {
            'messege': 'User Added Successfully'
        }
        return response


###################################### SQL VIEWS ##################################
######################################## TODO #####################################

class PatientStayView(UserView):
    def get(self, request):
        UserView.authenticate(self, request)
        # Put the required query to get list of patients who are currently staying in the hospital room
        query = "Select * from hm_system_user"
        with connection.cursor() as cursor:
            cursor.execute(query)
            return Response({
                'List': UserView.cursorToDict(self, cursor)
            })

# Query 1


class InsertPatientView(UserView):
    def post(self, request):
        UserView.authenticate(self, request)

        AadharId = request.data['AadharID']
        Name = request.data['Name']
        Address = request.data['Address']
        Phone = request.data['Phone']
        Email = request.data['Email']
        Gender = request.data['Gender']
        DOB = request.data['DOB']

        query = """Insert into hm_system_patient values(%s,'%s','%s','%s','%s','%s','%s');"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(query, (AadharId, Name, Address,
                               Phone, Email, Gender, DOB))
        except:
            # TODO
            print("I am here")

            return

        response = Response()
        response.data = {
            'messege': 'Patient Added Successfully'
        }
        return response

# Query 3


class ConfirmAppointmentView(UserView):
    def post(self, request):
        UserView.authenticate(self, request)

        Patient = request.data['Patient']
        Doctor = request.data['Doctor']
        Start = request.data['Start']

        query = """Insert into hm_system_appointment (Patient,Doctor,Start) values(%s,%s,%s);"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(query, (Patient, Doctor, Start))
        except:
            # TODO
            return
        response = Response()
        response.data = {
            'messege': 'Appointment Added Successfully'
        }
        return response

# Query 4


class InsertPrescribeView(UserView):
    def post(self, request):
        UserView.authenticate(self, request)

        Appointment = request.data['Appointment']
        Medication = request.data['Medication']
        Patient = request.data['Patient']
        Doctor = request.data['Doctor']
        Dose = request.data['Dose']

        query = """Insert into hm_system_prescribes values(%s,%s,%s,%s,%s);"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(
                    query, (Appointment, Medication, Patient, Doctor, Dose))
        except:
            # TODO
            return
        response = Response()
        response.data = {
            'messege': 'Prescription Added Successfully'
        }
        return response


class InsertReportView(UserView):
    def post(self, request):
        UserView.authenticate(self, request)

        Patient = request.data['Patient']
        Doctor = request.data['Doctor']
        Test = request.data['Test']
        Date = request.data['Date']
        TestResult = request.data[TestResult]

        query = """Insert into hm_system_report (Patient,Doctor,Test,Date,TestResult) values(%s,%s,%s,%s,%s);"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(
                    query, (Patient, Doctor, Test, Date, TestResult))
        except:
            # TODO
            return
        response = Response()
        response.data = {
            'messege': 'Report Added Successfully'
        }
        return response

# Query 8


class InsertStayView(UserView):
    def post(self, request):
        UserView.authenticate(self, request)

        Patient = request.data['Patient']
        Room = request.data['Room']
        Start = request.data['Start']

        query = """Insert into hm_system_stay (Patient,Room,Start) values(%s,%s,%s);"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(query, (Patient, Room, Start))
        except:
            # TODO
            return
        response = Response()
        response.data = {
            'messege': 'Stay Added Successfully'
        }
        return response


class InsertUndergoesView(UserView):
    def post(self, request):
        UserView.authenticate(self, request)

        Patient = request.data['Patient']
        Treatment = request.data['Treatment']
        Stay = request.data['Stay']
        Date = request.data['Date']
        Doctor = request.data['Doctor']
        Appointment = request.data['Appointment']

        query = """Insert into hm_system_undergoes (Patient,Treatment,Stay,Date,Doctor,Appointment) values(%s,%s,%s,%s,%s,%s);"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(query, (Patient, Treatment,
                               Stay, Date, Doctor, Appointment))
        except:
            # TODO
            return
        response = Response()
        response.data = {
            'messege': 'Undergoes Added Successfully'
        }
        return response

# Query 5


class GetPatientsView(UserView):
    def get(self, request):
        UserView.authenticate(self, request)
        query = """(Select distinct P.Name
                From hm_system_patient as P, hm_system_appointment as A
                where P.AadharID=A.Patient and A.Doctor=1 and A.Start>'2020-01-01 00:00')
                union
                (Select distinct P.Name
                From hm_system_patient as P, hm_system_undergoes as U
                where P.AadharID=U.Patient and U.Doctor=1);"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(query)
                return Response({
                    'List': UserView.cursorToDict(self, cursor)
                })
        except:
            # TODO
            return

# Query 6 ????????

# Query 7


class GetRoomsView(UserView):
    def get(self, request):
        UserView.authenticate(self, request)
        query = """Select *
                from hm_system_room as R
                where R.Unavailable=FALSE;"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(query)
                return Response({
                    'List': UserView.cursorToDict(self, cursor)
                })
        except:
            # TODO
            return

# Query 9???

# Query 10


class GetReportsView(UserView):
    def get(self, request):
        UserView.authenticate(self, request)
        query = """Select * 
                from hm_system_report
                where Patient=111 and Doctor=1 
                order by Date DESC limit 5;"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(query)
                return Response({
                    'List': UserView.cursorToDict(self, cursor)
                })
        except:
            # TODO
            return

# Query 13


class GetAdmittedView(UserView):
    def get(self, request):
        UserView.authenticate(self, request)
        query = """Select P.Name as Name,P.AadharID as AadharID,P.Address as Address,P.Phone as Phone,P.Email as Email,P.Gender as Gender,P.DOB as DOB
                from hm_system_patient as P, hm_system_stay as S
                where S.Patient=P.AadharID and ((S.End is NULL) or (S.End > NOW()));"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(query)
                return Response({
                    'List': UserView.cursorToDict(self, cursor)
                })
        except:
            # TODO
            return

# Query 14 ????

# Query 15


class SetAvailableView(UserView):
    def get(self, request):
        UserView.authenticate(self, request)
        query = """Update hm_system_room
                Set Unavailable=FALSE
                where Number=(Select S.Room
                            from Stay as S
                            where S.StayID=1);"""
        try:
            with connection.cursor() as cursor:
                cursor.execute(query)
                return Response({
                    'List': UserView.cursorToDict(self, cursor)
                })
        except:
            # TODO
            return
