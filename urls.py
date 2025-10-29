from django.urls import path
from .views import EnquiryListCreateView, EnquiryDestroyView

urlpatterns = [
    path('enquiries/', EnquiryListCreateView.as_view(), name='enquiry-list-create'),
    path('enquiries/<int:pk>/', EnquiryDestroyView.as_view(), name='enquiry-delete'),
]
