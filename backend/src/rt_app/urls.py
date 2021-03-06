from django.urls import path, include
from .views import PingView

urlpatterns = [
    path('users/', include('rt_app.users.urls')),
    path('subdivisions/', include('rt_app.subdivisions.urls')),
    path('projects/', include('rt_app.projects.urls')),
    path('documents/', include('rt_app.documents.urls')),

    path('mind-maps/', include('rt_app.mind_maps.urls')),
    path('mind-cards/', include('rt_app.mind_cards.urls')),

    path('kanban-boards/', include('rt_app.kanban_boards.urls')),
    path('kanban-cards/', include('rt_app.kanban_cards.urls')),

    path('auth/', include('rt_app.auth.urls')),
    path('ping/', PingView.as_view())
]
