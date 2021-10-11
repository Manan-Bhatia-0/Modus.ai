# This will be used to create a chart to display raw scores as a line chart

from matplotlib.backends.backend_pdf import PdfPages
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.axes import Axes as ax


class RawScoresChart:

    def line_plot_from_df(self):
        # TODO call aggregation here

        # plot two moods' scores at once. Later change to multiple line plots per mood
        dict_scores = {"happy": [0.2, 0.2, 0.3, 0.2, 0.0, 0.0, 0.1],
                       "surprise": [0.4, 0.1, 0.1, 0.1, 0.0, 0.0, 0.4]}

        df = pd.DataFrame(dict_scores, columns=['happy', 'surprise'])

        plt.plot(df['happy'], df['surprise'], color='red', marker='o')
        plt.title('happy vs surprise', fontsize=14)
        plt.xlabel('happy', fontsize=14)
        plt.ylabel('surprise', fontsize=14)
        plt.grid(True)
        plt.show()

    # per journal entry pie chart distribution of the
    # qualitative variables (moods)
    def pie_chart_from_df(self):
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

    def main(self):
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

        plt.style.use(plt.style.available[4])
        plt.xlabel('Key')
        plt.ylabel('Value')
        moods = list(dict_scores_1.keys())
        raw_scores = list(dict_scores_1.values())
        ax.plot_date(moods, raw_scores, '-')  # x-axis

        moods = list(dict_scores_2.keys())
        raw_scores = list(dict_scores_2.values())
        ax.plot_date(moods, raw_scores, '-')

        moods = list(dict_scores_3.keys())
        raw_scores = list(dict_scores_3.values())
        ax.plot_date(moods, raw_scores, '-')

        moods = list(dict_scores_4.keys())
        raw_scores = list(dict_scores_4.values())
        ax.plot_date(moods, raw_scores, '-')

        moods = list(dict_scores_5.keys())
        raw_scores = list(dict_scores_5.values())
        ax.plot_date(moods, raw_scores, '-')

    if __name__ == '__main__':
        main()
