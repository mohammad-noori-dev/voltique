import threading

from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View

from home.forms import MessageForm
from home.models import Message
from utils.email_service import send_email


# Create your views here.


class Home(View):
    def get(self, request):
        form = MessageForm()
        return render(request, 'home/voltique.html', {'form': form})

    def post(self, request):
        form = MessageForm(request.POST)

        if request.headers.get('x-requested-with') == 'XMLHttpRequest':
            if form.is_valid():
                message = Message()
                message.email = form.cleaned_data['email']
                message.full_name = form.cleaned_data['full_name']
                message.body = form.cleaned_data['body']
                message.save()
                threading.Thread(target=send_email, args=(f"New message - {message.full_name} - {message.email}",
                                                          str(message.body) + f"\n\nName: {message.full_name}\nEmail: {message.email}",
                                                          )).start()
                return JsonResponse({'success': True})
            return JsonResponse({
                'success': False,
                'errors': {f: list(e) for f, e in form.errors.items()}
            })
        return redirect(reverse('home:home-page'))
