# from hashlib import new
from flashtext import KeywordProcessor
keyword_processor = KeywordProcessor()

# keyword dictionary to add all at once
# {'clean_name': ['list of unclean names']}
keyword_dict = {
    "abstract": ["abstrait"],
    "arguments": [],
    "async": [],
    "await": ['attend'],
    "boolean": ["booléen", "boolean"],
    "break": ["brise"],
    "byte": ["octet"],
    "case": ["cas"],
    "catch": ["reprend"],
    "char": [],
    "const": [],
    "continue": ["poursuit"],
    "debugger": ["debogue", "débogue"],
    "default": ["defaut", "défaut"],
    "delete": ["supprime"],
    "do": ["effectue"],
    "double": [],
    "else": ["sinon"],
    "eval": [],
    "false": ["faux"],
    "final": [],
    "finally": ["enfin"],
    "float": ['flottant'],
    "for": ['pour'],
    "function": ['fonction'],
    "goto": [],
    "if": ['si'],
    "implements": [],
    "in": ["dans"],
    "instanceof": ["instancede"],
    "int": [],
    "interface": [],
    "let": ["laisse"],
    "long": [],
    "native": [],
    "new": ["nouveau"],
    "null": ["nul"],
    "package": ["paquet"],
    "private": ["prive", "privé"],
    "protected": ["protege", "protegé", 'protégé'],
    "public": [],
    "return": ['retourne'],
    "short": [],
    "static": ['statique'],
    "switch": ['change'],
    "synchronized": [],
    "this": ['soi'],
    "throw": ['lance'],
    "throws": [],
    "transient": [],
    "true": ['vrai'],
    "try": ['essaie'],
    "typeof": ['typede'],
    "var": [],
    "void": ['vide'],
    "volatile": [],
    "while": ["tant"],
    "with": ["avec"],
    "yield": ["cede", "cède"],
    "class": ['classe'],
    "enum": ['énum'],
    "export": ['exporte'],
    "extends": ['étend', 'etend'],
    "import": ['importe'],
    "super": [],
 }
 
built_in_dict = {

}
 

# adding list of keywords
def replacing_keywords(js_str):
    keyword_processor.add_keywords_from_dict(keyword_dict)
    # replacing keywords
    new_str = keyword_processor.replace_keywords(js_str)
    return new_str