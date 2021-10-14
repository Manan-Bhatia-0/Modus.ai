# This will be used to create a chart to display raw scores as a line chart

from matplotlib.backends.backend_pdf import PdfPages
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.axes import Axes as ax


class RawScoresChart:

    # This function will plot as many values are passed
    # The caller must only pass the number of data points
    # that are to be plotted.
    @staticmethod
    def line_plot_from_list_scores(list_dict_scores: list[dict]):

        # to get x-axis values
        x = []
        i = 0
        while i < len(list_dict_scores):
            x.append(i + 1)
            i += 1

        keys = list_dict_scores[0].keys()

        for j in keys:
            y = RawScoresChart.to_list(list_dict_scores, j)
            plt.plot(x, y, marker='D', mfc='red', label=j)

        plt.legend()
        plt.xlabel('Days')
        plt.ylabel('Mood Scores (%)')
        plt.savefig('test_plot1.png')
        plt.show()

    # per journal entry pie chart distribution of the
    # qualitative variables (moods)
    @staticmethod
    def pie_chart_from_df(scores_dict):
        import matplotlib.pyplot as plt

        dict_scores = {"happy": 0.0,
                       "sad": 0.2,
                       "fear": 0.1,
                       "anger": 0.1,
                       "surprise": 0.2}
        labels = []
        sizes = []

        for x, y in dict_scores.items():
            labels.append(x)
            sizes.append(y)
        plt.pie(sizes, labels=labels)

        # plt.axis('equal')
        plt.show()

    @staticmethod
    def to_list(list_dict_scores: list[dict], key: str):
        scores = []
        counter = 0
        for i in list_dict_scores:
            dict_scores = list_dict_scores[counter]
            scores.append(dict_scores[key] * 100)
            counter += 1
        return scores


def main():
    dict_scores = {"happy": 0.0,
                   "sad": 0.2,
                   "fear": 0.1,
                   "anger": 0.1,
                   "surprise": 0.2}

    dict_scores2 = {"happy": 0.2,
                    "sad": 0.4,
                    "fear": 0.6,
                    "anger": 0.8,
                    "surprise": 1.0}
    list_scores_dict = [dict_scores, dict_scores2]
    # print(RawScoresChart.to_list('happy'))

    RawScoresChart.line_plot_from_list_scores(list_scores_dict)
    # RawScoresChart.pie_chart_from_df()


if __name__ == '__main__':
    main()
