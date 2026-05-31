from transformers import pipeline

classifier = pipeline(
    "text-classification",
    model="mrm8488/bert-tiny-finetuned-fake-news-detection"
)

def detect_fake_news(text):

    result = classifier(text)

    raw_label = result[0]["label"]
    score = result[0]["score"]

    # Convert model labels
    if raw_label == "LABEL_1":
        label = "FAKE NEWS"
    else:
        label = "REAL NEWS"

    return {
        "prediction": label,
        "confidence": round(score * 100, 2)
    }