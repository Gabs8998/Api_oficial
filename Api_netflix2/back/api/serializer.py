from rest_framework import serializers
from .models import Filmes, Genero, Classificacao, Images

class FilmesSerializers(serializers.ModelSerializer):
    class Meta: 
        model = Filmes
        fields = ['id', 'titulo', 'genre', 'ano', 'idioma', 'classf']

class GeneroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genero
        fields = ['id', 'genre']

class ClassificacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classificacao
        fields = ['id', 'classf']

class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model= Images
        fields = ['id', 'imagem']