from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from credibility import calculate_credibility
from scraper import extract_article
from model import detect_fake_news
from fastapi import UploadFile
from fastapi import File

from ocr import extract_text_from_image
from chatbot import (
    chatbot_response,
    explain_news,
    summarize_news,
    extract_key_points
)

from fact_checker import verify_news

app = FastAPI()

# ==================================
# CORS
# ==================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==================================
# REQUEST MODELS
# ==================================

class NewsRequest(BaseModel):
    text: str


class ChatRequest(BaseModel):
    question: str


class UrlRequest(BaseModel):
    url: str


class FactCheckRequest(BaseModel):
    claim: str


class SummaryRequest(BaseModel):
    text: str


# ==================================
# HOME
# ==================================

@app.get("/")
def home():

    return {
        "message": "Fake News AI Backend Running"
    }


# ==================================
# FAKE NEWS DETECTION
# ==================================

@app.post("/detect")
def detect_news(request: NewsRequest):

    result = detect_fake_news(request.text)

    prediction = result["prediction"]

    explanation = explain_news(
        request.text,
        prediction
    )

    credibility = calculate_credibility(
        request.text,
        prediction
    )

    return {
        "prediction": prediction,
        "confidence": result["confidence"],
        "explanation": explanation,
        "credibility": credibility
    }


# ==================================
# CHATBOT
# ==================================

@app.post("/chat")
def chat(request: ChatRequest):

    answer = chatbot_response(
        request.question
    )

    return {
        "response": answer
    }


# ==================================
# URL ANALYZER
# ==================================

@app.post("/analyze-url")
def analyze_url(request: UrlRequest):

    article = extract_article(
        request.url
    )

    if "error" in article:
        return article

    result = detect_fake_news(
        article["text"]
    )

    prediction = result["prediction"]

    explanation = explain_news(
        article["text"],
        prediction
    )

    return {
        "title": article["title"],
        "prediction": prediction,
        "confidence": result["confidence"],
        "explanation": explanation
    }


# ==================================
# FACT VERIFICATION
# ==================================

@app.post("/fact-check")
def fact_check(request: FactCheckRequest):

    results = verify_news(
        request.claim
    )

    return {
        "claim": request.claim,
        "sources": results
    }


# ==================================
# NEWS SUMMARIZER
# ==================================

@app.post("/summarize")
def summarize(request: SummaryRequest):

    summary = summarize_news(
        request.text
    )

    key_points = extract_key_points(
        request.text
    )

    return {
        "summary": summary,
        "key_points": key_points
    }
@app.post("/analyze-image")
async def analyze_image(
    file: UploadFile = File(...)
):

    file_path = file.filename

    with open(
        file_path,
        "wb"
    ) as buffer:

        buffer.write(
            await file.read()
        )

    extracted_text = (
        extract_text_from_image(
            file_path
        )
    )

    result = detect_fake_news(
        extracted_text
    )

    explanation = explain_news(
        extracted_text,
        result["prediction"]
    )

    return {

        "text": extracted_text,

        "prediction":
        result["prediction"],

        "confidence":
        result["confidence"],

        "explanation":
        explanation
    }