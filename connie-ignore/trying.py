# # from hashlib import new
# from flashtext import KeywordProcessor
# keyword_processor = KeywordProcessor()

# # keyword dictionary to add all at once
# # {'clean_name': ['list of unclean names']}
# keyword_dict = {
#     "apple": ["pomme", "manzana"],
#     "orange": ["orange", "naranja"],
#     "Jenna": ["poo", "cool vb player girl"],
#  }

# # adding list of keywords
# keyword_processor.add_keywords_from_dict(keyword_dict)

# # replacing keywords
# new_sentence = keyword_processor.replace_keywords('I ate a pomme aussi appelle una manzana j\'aime (naranja) poo is her')

# print(new_sentence)

big_str = "01/*456/**/"
end = big_str.index("*/", 0)
print(end)

def string_trans(strinp):
    arr_str = strinp.split('\n')
    str_out = ""
    for str in arr_str:
        a = "\"" + str + "\": [],\n"
        str_out += a
    return str_out

print(string_trans("""
"""))
