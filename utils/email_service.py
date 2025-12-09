from django.conf import settings
from django.core.mail import send_mail
from dotenv import load_dotenv

load_dotenv()


def send_email(subject, message, receiver):
    try:
        massage = message
        from_email = settings.EMAIL_HOST_USER
        send_mail(subject, massage, from_email, recipient_list=[receiver], fail_silently=False)
    except Exception as e:
        print(f"Error sending email: {e}")
