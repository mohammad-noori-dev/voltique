from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.urls import reverse
from django.views import View

from home.forms import MessageForm
from home.models import Message


# Create your views here.


class Home(View):
    def get(self, request):
        form = MessageForm()
        return render(request, 'home/voltique.html', {'form': form})

    def post(self, request):
        form = MessageForm(request.POST)

        if request.headers.get('x-requested-with') == 'XMLHttpRequest':
            if form.is_valid():
                Message(
                    email=form.cleaned_data['email'],
                    full_name=form.cleaned_data['full_name'],
                    body=form.cleaned_data['body'],
                ).save()
                return JsonResponse({'success': True})

            return JsonResponse({
                'success': False,
                'errors': {f: list(e) for f, e in form.errors.items()}
            })

        return redirect(reverse('home:home-page'))
