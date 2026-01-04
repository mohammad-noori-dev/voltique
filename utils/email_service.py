from django.conf import settings
from django.core.mail import send_mail
from dotenv import load_dotenv
import os

load_dotenv()


def send_email(subject, message):
    try:
        from_email = settings.EMAIL_HOST_USER
        send_mail(subject, message, from_email, recipient_list=[os.getenv("RECEIVER")], fail_silently=False)
    except Exception as e:
        print(f"Error sending email: {e}")
