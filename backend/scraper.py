from newspaper import Article

def extract_article(url):

    try:

        article = Article(url)

        article.download()
        article.parse()

        print("TITLE:", article.title)
        print("TEXT LENGTH:", len(article.text))

        if len(article.text.strip()) == 0:
            return {
                "error": "Article content could not be extracted."
            }

        return {
            "title": article.title,
            "text": article.text
        }

    except Exception as e:

        print("SCRAPER ERROR:", str(e))

        return {
            "error": str(e)
        }