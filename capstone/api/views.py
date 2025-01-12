from django.shortcuts import render
from django.http import JsonResponse
from playground.crewAIPlayground import generateTask


# Create your views here.
def hello(request):
    return JsonResponse({"message": "API Response: Welcome to the splash screen!"})

def genTask(request):
    task = generateTask()
    return JsonResponse(task)