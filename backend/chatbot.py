from google import genai
import os
from dotenv import load_dotenv

load_dotenv()

# Gemini Client
try:
    client = genai.Client(
        api_key=os.getenv("GEMINI_API_KEY")
    )
except:
    client = None


# ==================================
# AI CHATBOT
# ==================================

def chatbot_response(question):

    if client is None:
        return "AI service unavailable."

    try:

        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=question
        )

        return response.text

    except Exception:
        return "AI service temporarily unavailable."


# ==================================
# NEWS EXPLANATION ENGINE
# ==================================

def explain_news(news_text, prediction):

    news = news_text.lower()

    fake_indicators = [
        "aliens",
        "time traveler",
        "government hiding",
        "miracle cure",
        "100% cure",
        "conspiracy",
        "end of world",
        "secret alien base",
        "ufo landing"
    ]

    found = []

    for word in fake_indicators:

        if word in news:
            found.append(word)

    if prediction == "REAL NEWS":

        return (
            "The article appears consistent with legitimate news reporting. "
            "No major misinformation indicators were detected. "
            "The content follows a standard news format and does not contain extraordinary unsupported claims."
        )

    if len(found) > 0:

        return (
            f"This article contains suspicious claims such as "
            f"{', '.join(found)}. Readers should verify these claims using trusted sources."
        )

    return (
        "The article was classified as potentially misleading. "
        "Readers should verify information using trusted news organizations."
    )


# ==================================
# NEWS SUMMARIZER
# ==================================

def summarize_news(news_text):

    try:

        words = news_text.split()

        if len(words) <= 120:
            return news_text

        summary = " ".join(words[:120])

        return summary + "..."

    except Exception:

        return "Summary unavailable."


# ==================================
# KEY POINT EXTRACTION
# ==================================

def extract_key_points(news_text):

    try:

        sentences = news_text.split(".")

        points = []

        for sentence in sentences:

            sentence = sentence.strip()

            if len(sentence) > 25:

                points.append(sentence)

            if len(points) >= 5:
                break

        return points

    except Exception:

        return []