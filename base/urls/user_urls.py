from django.urls import path
from base.views.user_views import (
    registerUser,
    getUsers,
    updateUserProfile,
    getUserProfile,
    deleteUser,
    updateUser,
    getUserById,
    CustomTokenObtainPairView,
)

urlpatterns = [
    path("register/", registerUser, name="register"),
    path("profile/", getUserProfile, name="users-profile"),
    path("profile/update/", updateUserProfile, name="users-profile-update"),
    path("login/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("", getUsers, name="users"),
    path("<str:pk>/", getUserById, name="user"),
    path("update/<str:pk>/", updateUser, name="user-update"),
    path("delete/<str:pk>/", deleteUser, name="user-delete"),
]
