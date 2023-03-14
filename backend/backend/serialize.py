from rest_framework import serializers
from backend.models import DetailsModel

class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model=DetailsModel
        fields="__all__"