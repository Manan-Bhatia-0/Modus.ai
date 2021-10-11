# Aggregation will be used to aggregate data points over a period of time
# The algorithm is as follows:
#   The average func:
#       Receives the list of scores per day (latest entry score per day)
#           Two approaches: nested list or list of dicts. Support for both is provided.
#       Averages the scores for each emotion per n number of days

import numpy as np
import numpy.ma as ma


class AggregateScores:

    def __init__(self, score_dicts, list_keys):
        # score_dicts is a list of dictionaries of scores
        self.scores = score_dicts
        self.keys = list_keys

    # average per day (favorable approach)
    def avg(self):
        aggregated_scores = []
        index = 0
        dict_len = len(self.keys)  # same as len of each dictionary element of the scores list
        for i in self.keys:

            sum_scores = 0
            inner_index = 0

            for j in self.scores:
                score_dict = self.scores[index]
                sum_scores += score_dict[self.keys[inner_index]]
                inner_index += 1

            index += 1

            avg_score = sum_scores / len(self.scores)
            aggregated_scores.append(avg_score)
        return aggregated_scores

    # Possible to do this too:
    # for i-th element average in lists of lists
    def average_list(self, list_scores):

        for i in list_scores:
            if len(i) <= max:
                for j in range(max - len(i)):
                    i.append(None)

        temp = []
        new_lists = []
        for j in range(max):
            for i in range(len(list_scores)):
                temp.append(list_scores[i][j])
            new_lists.append(ma.masked_values(temp, None))
            del temp[:]

        # per list avg
        avg_list = []
        for i in new_lists:
            avg_list.append(np.ma.average(i))

        return avg_list

    def max_len(self, list_scores):
        lens = []
        for i in list_scores:
            lens.append(len(i))
        max = np.amax(lens)
