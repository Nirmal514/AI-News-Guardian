import requests
import os
from dotenv import load_dotenv

load_dotenv()

NEWS_API_KEY = os.getenv("NEWS_API_KEY")

def verify_news(query):

    try:

        url = (
            f"https://newsapi.org/v2/everything?"
            f"q={query}&"
            f"language=en&"
            f"sortBy=relevancy&"
            f"apiKey={NEWS_API_KEY}"
        )

        response = requests.get(url)
        data = response.json()

        articles = []

        if data.get("articles"):

            for article in data["articles"][:5]:

                articles.append({
                    "title": article["title"],
                    "source": article["source"]["name"],
                    "url": article["url"]
                })

        return articles

    except Exception as e:

        return {
            "error": str(e)
        }