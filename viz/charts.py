# Trying out visualization techniques for NLP output

from pychartjs import BaseChart, ChartType, Color

class MyBarGraph(BaseChart):

    type = ChartType.Bar

    class data:
        label = "Numbers"
        data = [12, 19, 3, 17, 10]
        backgroundColor = Color.Green

    def homepage(request):
        NewChart = MyBarGraph()
        NewChart.data.label = "Mood scores"

        ChartJSON = NewChart.get()

        return render(request=request,
                      template_name='main/home.html',
                      context={"chartJSON": ChartJSON})