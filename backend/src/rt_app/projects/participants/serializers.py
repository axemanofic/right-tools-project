from rest_framework import serializers

from rt_app.common.serializers import ServiceSerializer
from rt_app.subdivisions.serializers import SubdivisionShortInfoSerializer
from rt_app.models import User, Project


class ParticipantListSerializer(ServiceSerializer, serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField('get_full_name', label="ФИО")
    online = serializers.SerializerMethodField('is_online', label="Онлайн ли пользователь")
    subdivision = SubdivisionShortInfoSerializer(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'full_name', 'username', 'online', 'last_login', 'photo', 'subdivision')


class ParticipantCreateDeleteSerializer(ServiceSerializer, serializers.Serializer):
    participants = serializers.ListField(
        child=serializers.IntegerField(),
        required=True,
        write_only=True
    )
