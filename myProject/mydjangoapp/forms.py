from typing import Any
from django.forms import ModelForm
from django import forms
from mydjangoapp.models import *

class PostForm(ModelForm):
    
    class Meta:
        model = Post

        fields = ["username","gender","text"]

    def clean(self):

        super(PostForm,self).clean()

        username = self.cleaned_data.get('username')
        text = self.cleaned_data.get('text')

        if len(username) < 5:
            self._errors['username'] = self.error_class([
                'Minimum 5 characters required'])
        if len(text) < 10:
            self._errors['text'] = self.error_class([
                'Post Should Contain a minimum of 10 characters'])
            
        return self.cleaned_data
    
class ContactForm(ModelForm):
    
    class Meta:
        model = Contact

        fields = ["Name","Email","Subject","Message"]


    def clean(self):

        super(ContactForm,self).clean()

        Name = self.cleaned_data.get('Name')
        Message = self.cleaned_data.get('Message')

        if len(Name) < 5:
            self._errors['Name'] = self.error_class([
                'Minimum 5 characters required'])
        if len(Message) < 10:
            self._errors['Message'] = self.error_class([
                'Post Should Contain a minimum of 10 characters'])
            
        return self.cleaned_data


class ServiceForm(ModelForm):
    
    class Meta:
        model = Service

        fields = ["Name","Email","Device","Service","Message"]


    def clean(self):

        super(ServiceForm,self).clean()

        Name = self.cleaned_data.get('Name')
        Message = self.cleaned_data.get('Message')

        if len(Name) < 5:
            self._errors['Name'] = self.error_class([
                'Minimum 5 characters required'])
        if len(Message) < 10:
            self._errors['Message'] = self.error_class([
                'Post Should Contain a minimum of 10 characters'])
            
        return self.cleaned_data
