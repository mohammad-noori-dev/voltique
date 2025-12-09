from django import forms


class MessageForm(forms.Form):
    email = forms.EmailField(
        label='Email',
        widget=forms.EmailInput(),
        max_length=200,
        error_messages={
            'max_length': "Email can't have more than 200 characters.",
            'invalid': 'Invalid email format',
        }
    )
    full_name = forms.CharField(
        label='Full name',
        widget=forms.TextInput(),
        max_length=100,
        error_messages={
            'required': 'This field is required',
            'max_length': "Full name can't have more than 100 characters.",
        }
    )
    body = forms.CharField(
        label='Message',
        widget=forms.Textarea,
        error_messages={
            'required': 'This field is required',
        }
    )
