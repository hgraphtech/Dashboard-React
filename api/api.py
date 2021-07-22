from flask import Flask
from flask import render_template
import pandas as pd
import datetime as dt

app = Flask(__name__)

df = pd.read_pickle('commod_price_data.pkl')
df = df.fillna(method="ffill")


table_data = [{'commodity':c, 'price': round(df[c][-1],1),
      'om': round(100*(df[c][-1]-df[c][-20])/df[c][-20],1),
      'sm': round(100*(df[c][-1]-df[c][-120])/df[c][-120],1)}
      for c in df.columns]

dates = [d.strftime('%F')  for d in df.index]

prices = [{'commodity':c, 'price_series':list(df[c].values)} for c in df.columns]

data = {'dates':dates, 'prices':prices, 'table_data':table_data} 

@app.route('/api/', methods=['GET'])
def api():
  return data


if __name__ == "__main__":
  app.run(debug=True)