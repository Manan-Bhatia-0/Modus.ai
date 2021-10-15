#!/usr/bin/env python
# coding: utf-8

# In[21]:


import text2emotion as te
import nltk
import pandas as pd
from nltk.tokenize import sent_tokenize
import string
from textblob import TextBlob
from nltk.sentiment import SentimentIntensityAnalyzer
nltk.download('vader_lexicon')


# In[22]:


class MoodAnalysis:
    
    @staticmethod
    def t2e_entry_analysis(entry):
        mood = te.get_emotion(entry)
        return mood
    
    @staticmethod
    def t2e_sent_analysis(entry):
        sent_tokenized = {}
        sent_tokenized = nltk.tokenize.sent_tokenize(entry)
        mood_list = []
        for sentence in sent_tokenized:
            mood = te.get_emotion(sentence)
            mood_list.append(mood)
        return mood_list
    
    @staticmethod
    def polarity_entry_analysis(entry):
        sia = SentimentIntensityAnalyzer()
        mood = sia.polarity_scores(entry)
        mood['cummulative'] = TextBlob(entry).sentiment.polarity
        return mood
    
    @staticmethod
    def polarity_sent_analysis(entry):
        sia = SentimentIntensityAnalyzer()
        sent_tokenized = {}
        sent_tokenized = nltk.tokenize.sent_tokenize(entry)
        mood_list = []
        for sentence in sent_tokenized:
            mood = sia.polarity_scores(sentence)
            mood['cummulative'] = TextBlob(sentence).sentiment.polarity
            mood_list.append(mood)
        return mood_list


# In[ ]:




