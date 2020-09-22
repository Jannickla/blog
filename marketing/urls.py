from django.urls import path
from .views import email_list_signup

app_name = "marketing"

urlpatterns = [
    path('email-signup/', email_list_signup, name='email-list-signup'),
]