# Trying out visualization techniques for NLP output

from pychartjs import BaseChart, ChartType, Color
from matplotlib.backends.backend_pdf import PdfPages
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.axes import Axes as ax


class MyGraphs(BaseChart):
    type = ChartType.Bar

    class data:
        label = "Numbers"
        dict_scores_1 = {"happy": 0.0,
                         "sad": 0.2,
                         "fear": 0.1,
                         "anger": 0.1,
                         "surprise": 0.2}

        dict_scores_2 = {"happy": 0.0,
                         "sad": 0.3,
                         "fear": 0.0,
                         "anger": 0.5,
                         "surprise": 0.0}

        dict_scores_3 = {"happy": 0.5,
                         "sad": 0.2,
                         "fear": 0.1,
                         "anger": 0.1,
                         "surprise": 0.1}

        dict_scores_4 = {"happy": 0.2,
                         "sad": 0.4,
                         "fear": 0.3,
                         "anger": 0.1,
                         "surprise": 0.0}

        dict_scores_5 = {"happy": 1.0,
                         "sad": 0.0,
                         "fear": 0.0,
                         "anger": 0.0,
                         "surprise": 0.0}
        backgroundColor = Color.Green

    def plots(request):
        new_chart = MyGraphs()
        new_chart.data.label = "Mood scores"

        ChartJSON = new_chart.get()

        plt.style.use(plt.style.available[4])
        plt.xlabel('Key')
        plt.ylabel('Value')
        moods = list(new_chart.dict_scores_1.keys())
        raw_scores = list(new_chart.dict_scores_1.values())
        ax.plot_date(moods, raw_scores, '-')  # x-axis

        moods = list(new_chart.dict_scores_2.keys())
        raw_scores = list(new_chart.dict_scores_2.values())
        ax.plot_date(moods, raw_scores, '-')

        moods = list(new_chart.dict_scores_3.keys())
        raw_scores = list(new_chart.dict_scores_3.values())
        ax.plot_date(moods, raw_scores, '-')

        moods = list(new_chart.dict_scores_4.keys())
        raw_scores = list(new_chart.dict_scores_4.values())
        ax.plot_date(moods, raw_scores, '-')

        moods = list(new_chart.dict_scores_5.keys())
        raw_scores = list(new_chart.dict_scores_5.values())
        ax.plot_date(moods, raw_scores, '-')

        # return render(request=request, template_name='main/home.html', context={"chartJSON": ChartJSON})
