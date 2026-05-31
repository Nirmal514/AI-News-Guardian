def calculate_credibility(news_text, prediction):

    score = 0

    details = {
        "prediction_score": 0,
        "quality_score": 0,
        "bias_score": 0
    }

    # ==========================
    # Prediction Score (40)
    # ==========================

    if prediction == "REAL NEWS":
        details["prediction_score"] = 40
        score += 40
    else:
        details["prediction_score"] = 10
        score += 10

    # ==========================
    # Content Quality (30)
    # ==========================

    word_count = len(news_text.split())

    if word_count > 300:
        details["quality_score"] = 30
        score += 30

    elif word_count > 150:
        details["quality_score"] = 20
        score += 20

    else:
        details["quality_score"] = 10
        score += 10

    # ==========================
    # Suspicious Keywords (30)
    # ==========================

    suspicious_words = [
        "aliens",
        "miracle",
        "conspiracy",
        "secret",
        "ufo",
        "100% cure",
        "time traveler"
    ]

    penalty = 0

    text = news_text.lower()

    for word in suspicious_words:

        if word in text:
            penalty += 5

    bias_score = max(0, 30 - penalty)

    details["bias_score"] = bias_score

    score += bias_score

    # ==========================
    # Rating
    # ==========================

    if score >= 80:
        rating = "Highly Credible"

    elif score >= 60:
        rating = "Moderately Credible"

    elif score >= 40:
        rating = "Low Credibility"

    else:
        rating = "Very Suspicious"

    return {
        "score": score,
        "rating": rating,
        "details": details
    }