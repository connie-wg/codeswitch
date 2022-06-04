# from hashlib import new
from flashtext import KeywordProcessor
keyword_processor = KeywordProcessor()

# keyword dictionary to add all at once
# {'clean_name': ['list of unclean names']}
keyword_dict = {
    "abstract": [],
    "arguments": [],
    "async": [],
    "await": [],
    "boolean": [],
    "break": [],
    "byte": [],
    "case": [],
    "catch": [],
    "char": [],
    "const": [],
    "continue": ["poursuit"],
    "debugger": [],
    "default": ["defaut", "défaut"],
    "delete": ["supprime"],
    "do": ["effectue"],
    "double": [],
    "else": ["sinon"],
    "eval": [],
    "false": ["faux"],
    "final": [],
    "finally": [],
    "float": ['flottant'],
    "for": ['pour'],
    "function": ['fonction'],
    "goto": [],
    "if": ['si'],
    "implements": [],
    "in": ["dans"],
    "instanceof": [],
    "int": [],
    "interface": [],
    "let": ["laissez"],
    "long": [],
    "native": [],
    "new": [],
    "null": [],
    "package": [],
    "private": [],
    "protected": [],
    "public": [],
    "return": [],
    "short": [],
    "static": [],
    "switch": [],
    "synchronized": [],
    "this": [],
    "throw": [],
    "throws": [],
    "transient": [],
    "true": [],
    "try": [],
    "typeof": [],
    "var": [],
    "void": [],
    "volatile": [],
    "while": [],
    "with": [],
    "yield": [],
    "class": [],
    "enum": [],
    "export": [],
    "extends": [],
    "import": [],
    "super": [],
 }
 

# adding list of keywords
def replacing_keywords(js_str):
    keyword_processor.add_keywords_from_dict(keyword_dict)
    # replacing keywords
    new_str = keyword_processor.replace_keywords(js_str)
    return new_str