import unittest
from viz.aggregate_points import AggregateScores


class TestAggregationScores(unittest.TestCase):

    def test_list_scores_dicts(self):
        list_scores = []
        list_keys = ['happy', 'sad', 'fear', 'anger', 'surprise']
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

        list_scores.append(dict_scores_1)
        list_scores.append(dict_scores_2)
        list_scores.append(dict_scores_3)
        list_scores.append(dict_scores_4)
        list_scores.append(dict_scores_5)

        avg_score_obj = AggregateScores(list_scores, list_keys)
        avg_list = avg_score_obj.avg()

        list_calculated_avg = [0.12000000000000002, 0.16, 0.19999999999999998, 0.20000000000000004, 0.2]
        print(list_scores)
        print(avg_list)

        self.assertEqual(avg_list, list_calculated_avg)


if __name__ == '__main__':
    unittest.main()
