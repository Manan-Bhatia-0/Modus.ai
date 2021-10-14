import unittest

from viz.plot_scores import PlotScores


class TestPlotScores(unittest.TestCase):
    dict_scores1 = {"happy": 0.0,
                    "sad": 0.2,
                    "fear": 0.1,
                    "anger": 0.1,
                    "surprise": 0.2}

    dict_scores2 = {"happy": 0.0,
                    "sad": 0.3,
                    "fear": 0.0,
                    "anger": 0.5,
                    "surprise": 0.0}

    dict_scores3 = {"happy": 0.5,
                    "sad": 0.2,
                    "fear": 0.1,
                    "anger": 0.1,
                    "surprise": 0.1}

    dict_scores4 = {"happy": 0.2,
                    "sad": 0.4,
                    "fear": 0.3,
                    "anger": 0.1,
                    "surprise": 0.0}

    dict_scores5 = {"happy": 1.0,
                    "sad": 0.0,
                    "fear": 0.0,
                    "anger": 0.0,
                    "surprise": 0.0}

    dict_scores6 = {"happy": 0.4,
                    "sad": 0.2,
                    "fear": 0.6,
                    "anger": 0.8,
                    "surprise": 0.2}

    dict_scores7 = {"happy": 0.2,
                    "sad": 0.4,
                    "fear": 0.6,
                    "anger": 0.8,
                    "surprise": 1.0}

    list_scores_dict = [dict_scores1, dict_scores2, dict_scores3, dict_scores4, dict_scores5, dict_scores6,
                        dict_scores7]
    # print(PlotScores.to_list('happy'))

    # RawScoresChart.pie_chart_from_df()
    # RawScoresChart.histogram_from_dict(dict_scores1)

    def test_line_plot_from_list(self):
        PlotScores.line_plot_from_list_scores(self.list_scores_dict)

    def test_hist_from_dict(self):
        PlotScores.histogram_from_dict(self.dict_scores6)

    def test_pie_chart_from_dict(self):
        PlotScores.pie_chart_from_dict(self.dict_scores6)


if __name__ == '__main__':
    unittest.main()
