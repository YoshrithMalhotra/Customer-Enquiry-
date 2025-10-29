from rest_framework import generics, filters
from .models import Enquiry
from .serializers import EnquirySerializer

class EnquiryListCreateView(generics.ListCreateAPIView):
    queryset = Enquiry.objects.all().order_by('-created_at')
    serializer_class = EnquirySerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'email']

class EnquiryDestroyView(generics.DestroyAPIView):
    queryset = Enquiry.objects.all()
    serializer_class = EnquirySerializer
