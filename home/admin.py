from django.contrib import admin

from .models import Message


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'short_body', 'is_replied', 'created_at')
    list_editable = ('is_replied',)
    list_filter = ('is_replied', 'created_at')
    search_fields = ('full_name', 'email', 'body')
    readonly_fields = ('created_at',)

    def short_body(self, obj):
        return (obj.body[:50] + '...') if len(obj.body) > 50 else obj.body

    short_body.short_description = 'Message'
