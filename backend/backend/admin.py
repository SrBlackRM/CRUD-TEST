from django.contrib import admin
from backend.models import DetailsModel


class DetailsAdmin(admin.ModelAdmin):
    pass


admin.site.register(DetailsModel, DetailsAdmin)