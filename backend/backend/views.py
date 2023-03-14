from backend import serialize
from backend.models import DetailsModel
from backend.serialize import DetailsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class DetailsCreate(APIView):
    def post(self, request):
        object_key = DetailsSerializer(data = request.data)
        if object_key.is_valid():
            object_key.save()
            return Response(200)
        return Response(object_key.errors)

class DetailsRead(APIView):
    def get(self, request):
        detailsObject = DetailsModel.objects.all()
        object_key = DetailsSerializer(detailsObject, many=True)
        return Response(object_key.data) 

    
class DetailsUpdate(APIView):
    def put(self, request, pk):
        try:
            object_key = DetailsModel.objects.get(pk=pk)
            
        except:
            return Response("Not found in Database")
                
        serializeObject = DetailsSerializer(object_key, data=request.data)
        if serializeObject.is_valid():
            serializeObject.save()
            return Response(200)
        return Response(serializeObject.errors)
    

class DetailsDelete(APIView):
    def delete(self, request, pk):
        try:
            object_key = DetailsModel.objects.get(pk=pk)
            
        except:
            return Response("Not found in Database")
                
        object_key.delete()
        return Response(200)
    