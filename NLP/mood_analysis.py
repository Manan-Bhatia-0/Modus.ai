#!/usr/bin/env python
# coding: utf-8

import text2emotion as te
import nltk
from nltk.tokenize import sent_tokenize
import string
from textblob import TextBlob
from nltk.sentiment import SentimentIntensityAnalyzer
nltk.download('vader_lexicon')
from flask import Flask
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api, reqparse

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
api = Api(app)


class MoodAnalysis(Resource):
    @staticmethod
    def t2e_entry_analysis(text):
        mood = te.get_emotion(text)
        return mood

    @staticmethod
    def t2e_sent_analysis(text):
        sent_tokenized = {}
        sent_tokenized = nltk.tokenize.sent_tokenize(text)
        mood_list = []
        for sentence in sent_tokenized:
            mood = te.get_emotion(sentence)
            mood_list.append(mood)
        return mood_list

    @staticmethod
    def polarity_entry_analysis(text):
        sia = SentimentIntensityAnalyzer()
        mood = sia.polarity_scores(text)
        mood['cummulative'] = TextBlob(text).sentiment.polarity
        return mood

    @staticmethod
    def polarity_sent_analysis(text):
        sia = SentimentIntensityAnalyzer()
        sent_tokenized = {}
        sent_tokenized = nltk.tokenize.sent_tokenize(text)
        mood_list = []
        for sentence in sent_tokenized:
            mood = sia.polarity_scores(sentence)
            mood['cummulative'] = TextBlob(sentence).sentiment.polarity
            mood_list.append(mood)
        return mood_list

    @cross_origin()
    def post(self):
        parser = reqparse.RequestParser()  # initialize

        parser.add_argument('text', required=True)  # add args

        args = parser.parse_args()  # parse arguments to dictionary

        text = args['text']

        mood_analysis_dict = {'t2e_entry_analysis': MoodAnalysis.t2e_entry_analysis(text),
                              't2e_sent_analysis': MoodAnalysis.t2e_sent_analysis(text),
                              'polarity_entry_analysis': MoodAnalysis.polarity_entry_analysis(text),
                              'polarity_sent_analysis': MoodAnalysis.polarity_sent_analysis(text)}
        return {'data': mood_analysis_dict}, 200


api.add_resource(MoodAnalysis, '/moodanalysis')

if __name__ == '__main__':
    app.run()  # run our Flask app
