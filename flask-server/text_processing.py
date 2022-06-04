# from hashlib import new
from flashtext import KeywordProcessor
keyword_processor = KeywordProcessor()

# keyword dictionary to add all at once
# {'clean_name': ['list of unclean names']}
keyword_dict = {
    "pour": ["for"],
    "si": ["if"],
    "sinon": ["else"],
 }
 

# adding list of keywords
def replacing_keywords(js_str):
    keyword_processor.add_keywords_from_dict(keyword_dict)
    # replacing keywords
    new_str = keyword_processor.replace_keywords(js_str)
    return new_str